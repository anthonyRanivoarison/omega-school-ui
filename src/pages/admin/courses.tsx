import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { SUBJECTS, teachers } from "@/seeders/data";

export default function CoursesOnAdminPage() {
  const subjectTeacherMap = SUBJECTS.map((subject) => ({
    subject,
    teachers: teachers
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.floor(Math.random() * 3) + 1),
  }));

  return (
    <div className="p-6">
      <Card className="w-full mx-auto shadow-lg rounded-xl">
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold text-[#1E40AF]">
            Gestion des Matières
          </CardTitle>
          <Link to="/courses/new">
            <Button className="bg-[#10B981] hover:bg-[#0EA972] text-white">
              <Plus size={16} className="mr-2" /> Ajouter une matière
            </Button>
          </Link>
        </CardHeader>
        <CardContent className="p-6">
          <Table className="min-w-full bg-white border border-gray-200 rounded-md">
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead className="py-3 px-4 text-left font-semibold text-gray-700">
                  #
                </TableHead>
                <TableHead className="py-3 px-4 text-left font-semibold text-gray-700">
                  Matière
                </TableHead>
                <TableHead className="py-3 px-4 text-left font-semibold text-gray-700">
                  Professeurs (Avatars)
                </TableHead>
                <TableHead className="py-3 px-4 text-left font-semibold text-gray-700">
                  Professeurs (Noms)
                </TableHead>
                <TableHead className="py-3 px-4 text-left font-semibold text-gray-700">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subjectTeacherMap.map((item, index) => (
                <TableRow
                  key={item.subject}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <TableCell className="py-3 px-4 text-gray-600">
                    {index + 1}
                  </TableCell>
                  <TableCell className="py-3 px-4 text-gray-800 font-medium">
                    {item.subject}
                  </TableCell>
                  <TableCell className="py-3 px-4 flex gap-2">
                    {item.teachers.map((teacher) => (
                      <img
                        key={teacher.id}
                        src={teacher.avatar}
                        alt={`${teacher.firstName} ${teacher.lastName}`}
                        className="w-10 h-10 rounded-full border border-gray-200 object-cover"
                      />
                    ))}
                  </TableCell>
                  <TableCell className="py-3 px-4 text-gray-800">
                    {item.teachers
                      .map(
                        (teacher) => `${teacher.firstName} ${teacher.lastName}`
                      )
                      .join(", ")}
                  </TableCell>
                  <TableCell className="py-3 px-4 flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                      onClick={() => alert(`Éditer ${item.subject}`)}
                    >
                      <Edit size={16} />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-red-100 text-red-800 hover:bg-red-200"
                      onClick={() => alert(`Supprimer ${item.subject}`)}
                    >
                      <Trash size={16} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}