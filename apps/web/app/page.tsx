import { Map } from "@/components/map"
import { FloodLegend } from "@/components/flood-legend"

export default function Page() {
  return (
    <main className="relative h-svh w-full">
      <Map />
      <FloodLegend />
    </main>
  )
}
