import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function TeacherStudentsPage() {
  const currentDate = new Date("2025-10-15T08:04:00+03:00");

  const teacherStudents = [
    { id: 1, name: "Alice Martin", grade: "6e", avatar: "https://via.placeholder.com/40?text=AM" },
    { id: 2, name: "Bob Durand", grade: "5e", avatar: "https://via.placeholder.com/40?text=BD" },
    { id: 3, name: "Clara Roux", grade: "4e", avatar: "https://via.placeholder.com/40?text=CR" },
    { id: 4, name: "David Leroy", grade: "3e", avatar: "https://via.placeholder.com/40?text=DL" },
    { id: 5, name: "Eva Petit", grade: "6e", avatar: "https://via.placeholder.com/40?text=EP" },
    { id: 6, name: "Alice Martin", grade: "6e", avatar: "https://via.placeholder.com/40?text=AM" },
    { id: 7, name: "Bob Durand", grade: "5e", avatar: "https://via.placeholder.com/40?text=BD" },
    { id: 8, name: "Clara Roux", grade: "4e", avatar: "https://via.placeholder.com/40?text=CR" },
    { id: 9, name: "David Leroy", grade: "3e", avatar: "https://via.placeholder.com/40?text=DL" },
    { id: 10, name: "Eva Petit", grade: "6e", avatar: "https://via.placeholder.com/40?text=EP" },
  ]

  return (
    <div className="p-6">
      <Table>
        <TableHeader>
          <h2 className="text-5xl font-bold text-[#1E40AF] mb-6 ds-font">Étudiants de Mme Marie Lefèvre</h2>
        </TableHeader>
        <TableHeader>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Nom</TableCell>
            <TableCell>Avatar</TableCell>
            <TableCell>Classe</TableCell>
            <TableCell>Date d'inscription</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teacherStudents.map((student, id) => (
            <TableRow key={id}>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>
                <Avatar className="h-12 w-12">
                  <AvatarImage src={student.avatar} alt={student.name} />
                  <AvatarFallback>{student.name.split(" ")[0][0]}{student.name.split(" ")[1][0]}</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>
                <Badge className="bg-[#10B981] text-white">{student.grade}</Badge>
              </TableCell>
              <TableCell>{format(currentDate, "PPPp")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}