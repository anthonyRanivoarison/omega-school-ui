import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { students } from "@/seeders/data";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import { ChartPieLabel } from "@/components/students-repartition.chart";

const chartData = [
  { class: "A1", students: students.filter((s) => s.grade === "A1").length },
  { class: "A2", students: students.filter((s) => s.grade === "A2").length },
  { class: "B1", students: students.filter((s) => s.grade === "B1").length },
  { class: "B2", students: students.filter((s) => s.grade === "B2").length },
  { class: "C1", students: students.filter((s) => s.grade === "C1").length },
];

const chartConfig = {
  students: {
    label: "Étudiants",
    color: "#FACC15",
  },
} satisfies ChartConfig;

function ClassStatisticsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#1E40AF]">
          Répartition des Étudiants par Classe
        </CardTitle>
        <CardDescription>Octobre 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="class"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="students" fill="var(--color-students)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default function AdminDashboardPage() {
  const totalStudents = students.length;
  const totalTeachers = 15;
  const totalCourses = 10;

  return (
    <div className="w-full p-4">
      <h2 className="text-3xl font-bold text-[#1E40AF] mb-6">
        Tableau de bord Admin
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-white shadow-md hover:shadow-lg transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-[#1E40AF]">Étudiants</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-[#10B981]">{totalStudents}</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md hover:shadow-lg transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-[#1E40AF]">
              Professeurs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-[#10B981]">{totalTeachers}</p>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-md hover:shadow-lg transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-[#1E40AF]">Cours</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-[#10B981]">{totalCourses}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ClassStatisticsChart />
        <ChartPieLabel />
      </div>
    </div>
  );
}
