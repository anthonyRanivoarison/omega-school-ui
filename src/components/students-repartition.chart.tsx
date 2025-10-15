import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A pie chart with labels";

const chartData = [
  { grade: "A1", students: 8, fill: "var(--color-a1)" },
  { grade: "A2", students: 7, fill: "var(--color-a2)" },
  { grade: "B1", students: 9, fill: "var(--color-b1)" },
  { grade: "B2", students: 6, fill: "var(--color-b2)" },
  { grade: "C1", students: 3, fill: "var(--color-c1)" },
];

const chartConfig = {
  students: {
    label: "Étudiants",
  },
  a1: {
    label: "A1",
    color: "var(--chart-1)",
  },
  a2: {
    label: "A2",
    color: "var(--chart-2)",
  },
  b1: {
    label: "B1",
    color: "var(--chart-3)",
  },
  b2: {
    label: "B2",
    color: "var(--chart-4)",
  },
  c1: {
    label: "C1",
    color: "var(--chart-6)",
  },
} satisfies ChartConfig;

export function ChartPieLabel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pie Chart - Répartition des Classes</CardTitle>
        <CardDescription>Octobre 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="students"
              nameKey="grade"
              label={({ name, value }) => `${name}: ${value}`}
              innerRadius={40}
              outerRadius={100}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-center gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Affichage de la répartition des étudiants par classe
        </div>
      </CardFooter>
    </Card>
  );
}
