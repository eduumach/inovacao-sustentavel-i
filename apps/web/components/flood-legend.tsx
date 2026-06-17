import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { COEFFICIENT_LEGEND } from "@/lib/flood-zones"

export function FloodLegend() {
  return (
    <Card className="absolute top-4 left-4 z-10 w-64 shadow-lg">
      <CardHeader>
        <CardTitle>Coeficiente de Escoamento</CardTitle>
        <CardDescription>Risco de alagamento por zona</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {COEFFICIENT_LEGEND.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span
              className="size-3 shrink-0 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="font-medium">{item.label}</span>
            <span className="text-muted-foreground ml-auto text-xs">
              C {item.range}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
