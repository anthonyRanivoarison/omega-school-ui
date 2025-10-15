import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SUBJECTS } from "@/seeders/data";
import { Cell, Tooltip, Legend, ResponsiveContainer, CartesianGrid, Bar, BarChart, XAxis, YAxis } from "recharts";

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
      <h2 className="text-5xl ds-font font-bold text-[#1E40AF] mb-6">Mes Notes</h2>

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
          <CardContent className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
                <YAxis domain={[0, 20]} />
                <Tooltip formatter={(value) => `${value}/20`} />
                <Legend verticalAlign="top" height={36} />
                <Bar dataKey="value" fill="#8884d8">
                  {chartData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
