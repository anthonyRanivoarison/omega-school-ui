import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SUBJECTS } from "@/seeders/data";
import { Pie, PieChart, Cell, Tooltip, Legend } from "recharts";

export default function StudentGradesPage() {
  const grades = SUBJECTS.map((subject) => ({
    subject,
    grade: Math.floor(Math.random() * 12) + 8,
    max: 20,
  }));

  const moyenne = grades.reduce((acc, g) => acc + g.grade, 0) / grades.length;

  const chartData = grades.map((g) => ({
    name: g.subject,
    value: g.grade,
  }));

  const COLORS = [
    "#1E40AF",
    "#10B981",
    "#FACC15",
    "#F43F5E",
    "#6366F1",
    "#F97316",
    "#8B5CF6",
    "#06B6D4",
    "#84CC16",
    "#D946EF",
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-[#1E40AF] mb-6">Mes Notes</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Notes par matière</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Matière</th>
                  <th className="py-2">Note</th>
                  <th className="py-2">Sur</th>
                </tr>
              </thead>
              <tbody>
                {grades.map((g) => (
                  <tr key={g.subject} className="border-b hover:bg-gray-50">
                    <td className="py-2">{g.subject}</td>
                    <td className="py-2 font-medium">{g.grade}</td>
                    <td className="py-2 text-gray-500">{g.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 font-semibold text-[#1E40AF]">
              Moyenne générale : {moyenne.toFixed(2)}/20
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Répartition des notes</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <PieChart width={300} height={300}>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={110}
                label={({ name, value }) => `${name.split(" ")[0]}: ${value}`}
              >
                {chartData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}/20`} />
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
              />
            </PieChart>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
