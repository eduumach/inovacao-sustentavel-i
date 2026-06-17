"use client"

import { useEffect, useRef } from "react"
import maplibregl from "maplibre-gl"
import "maplibre-gl/dist/maplibre-gl.css"

import { floodZones } from "@/lib/flood-zones"

// Uberlândia, MG, Brasil
const UBERLANDIA: [number, number] = [-48.2772, -18.9186]

// Degradê verde -> amarelo -> laranja -> vermelho conforme o
// coeficiente de escoamento (C) de cada zona.
const FLOOD_FILL_COLOR: maplibregl.ExpressionSpecification = [
  "interpolate",
  ["linear"],
  ["get", "coeficiente"],
  0,
  "#22c55e",
  0.3,
  "#22c55e",
  0.5,
  "#eab308",
  0.7,
  "#f97316",
  1,
  "#ef4444",
]

export function Map() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const map = new maplibregl.Map({
      container: containerRef.current,
      center: UBERLANDIA,
      zoom: 3,
      pitch: 0,
      bearing: 0,
      style: {
        version: 8,
        sources: {
          esri: {
            type: "raster",
            tiles: [
              "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            ],
            tileSize: 256,
            attribution:
              "Tiles &copy; Esri — Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community",
          },
        },
        layers: [
          {
            id: "esri-tiles",
            type: "raster",
            source: "esri",
            minzoom: 0,
            maxzoom: 19,
          },
        ],
      },
    })

    map.addControl(new maplibregl.NavigationControl(), "top-right")

    map.on("load", () => {
      // Efeito de abertura: mergulha do mundo até Uberlândia
      map.flyTo({
        center: UBERLANDIA,
        zoom: 13,
        pitch: 45,
        bearing: -20,
        duration: 6000,
        curve: 1.6,
        essential: true,
      })

      // Layer das zonas de alagamento, coloridas pelo coeficiente de escoamento (C)
      map.addSource("flood-zones", {
        type: "geojson",
        data: floodZones,
      })

      map.addLayer({
        id: "flood-zones-fill",
        type: "fill",
        source: "flood-zones",
        paint: {
          "fill-color": FLOOD_FILL_COLOR,
          "fill-opacity": 0.55,
        },
      })

      map.addLayer({
        id: "flood-zones-outline",
        type: "line",
        source: "flood-zones",
        paint: {
          "line-color": "#ffffff",
          "line-width": 1.5,
        },
      })

      map.on("mouseenter", "flood-zones-fill", () => {
        map.getCanvas().style.cursor = "pointer"
      })
      map.on("mouseleave", "flood-zones-fill", () => {
        map.getCanvas().style.cursor = ""
      })

      map.on("click", "flood-zones-fill", (e) => {
        const feature = e.features?.[0]
        if (!feature) return
        const { nome, coeficiente, classificacao, volumeLitros } =
          feature.properties as {
            nome: string
            coeficiente: number
            classificacao: string
            volumeLitros: number
          }

        new maplibregl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(
            `<strong>${nome}</strong><br/>` +
              `Coeficiente (C): ${coeficiente.toFixed(2)} — ${classificacao}<br/>` +
              `Volume estimado: ${(volumeLitros / 1_000_000).toLocaleString("pt-BR")} milhões de litros`
          )
          .addTo(map)
      })
    })

    return () => {
      map.remove()
    }
  }, [])

  return <div ref={containerRef} className="h-svh w-full" />
}
