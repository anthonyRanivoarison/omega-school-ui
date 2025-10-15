import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Book, Clock } from "lucide-react";
import { format } from "date-fns";

export default function CoursesStudentPage() {
  const studentCourses = [
    { id: 1, subject: "Mathématiques", grade: 16, lastUpdated: new Date("2025-10-14T15:30:00+03:00") },
    { id: 2, subject: "Français", grade: 13, lastUpdated: new Date("2025-10-13T11:00:00+03:00") },
    { id: 3, subject: "Anglais", grade: 18, lastUpdated: new Date("2025-10-15T09:15:00+03:00") },
    { id: 4, subject: "Sciences", grade: 14, lastUpdated: new Date("2025-10-12T16:00:00+03:00") },
    { id: 5, subject: "Histoire-Géo", grade: 15, lastUpdated: new Date("2025-10-10T14:00:00+03:00") },
    { id: 6, subject: "Physique", grade: 12, lastUpdated: new Date("2025-10-15T12:45:00+03:00") },
    { id: 7, subject: "SVT", grade: 17, lastUpdated: new Date("2025-10-14T10:00:00+03:00") },
    { id: 8, subject: "Informatique", grade: 19, lastUpdated: new Date("2025-10-11T13:30:00+03:00") },
    { id: 9, subject: "EPS", grade: 16, lastUpdated: new Date("2025-10-13T09:00:00+03:00") },
    { id: 10, subject: "Arts Plastiques", grade: 14, lastUpdated: new Date("2025-10-15T08:30:00+03:00") },
  ];

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-5xl ds-font font-bold text-[#1E40AF]">
            Mes Cours
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Matière</TableHead>
                <TableHead>Note</TableHead>
                <TableHead>Dernière mise à jour</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentCourses.map((course) => (
                <TableRow key={course.id} className="hover:bg-gray-50 transition-colors">
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Book className="h-5 w-5 text-[#10B981]" />
                      {course.subject}
                    </div>
                  </TableCell>
                  <TableCell>
                    {course.grade !== null ? `${course.grade}/20` : "Non noté"}
                  </TableCell>
                  <TableCell className="text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {format(course.lastUpdated, "PPPp")}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button
                      className="bg-[#1E40AF] hover:bg-[#1E3A8A] text-white"
                      size="sm"
                    >
                      Voir les détails
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