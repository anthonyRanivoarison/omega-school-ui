import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function StudentTeachersPage() {
  const teachers = [
    {
      id: "t1",
      prenom: "Jean",
      nom: "RAKOTO",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      matiere: "Maths",
      email: "jean.rakoto@example.com",
      telephone: "+261 34 56 78 901",
    },
    {
      id: "t2",
      prenom: "Marie",
      nom: "RANDRIANARISOA",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      matiere: "Anglais",
      email: "marie.randri@example.com",
      telephone: "+261 32 12 34 567",
    },
    {
      id: "t3",
      prenom: "Paul",
      nom: "RAKOTONDRABE",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      matiere: "Malagasy",
      email: "paul.rakoto@example.com",
      telephone: "+261 33 45 67 890",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-[#1E40AF] mb-6">
        Mes Enseignants
      </h2>

      <Card>
        <CardHeader>
          <CardTitle>Liste des enseignants</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Photo</TableHead>
                <TableHead>Nom</TableHead>
                <TableHead>Matière</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Téléphone</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teachers.map((teacher) => (
                <TableRow key={teacher.id}>
                  <TableCell>
                    <img
                      src={teacher.avatar}
                      alt={`${teacher.prenom} ${teacher.nom}`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </TableCell>
                  <TableCell>
                    {teacher.prenom} {teacher.nom}
                  </TableCell>
                  <TableCell>{teacher.matiere}</TableCell>
                  <TableCell>{teacher.email}</TableCell>
                  <TableCell>{teacher.telephone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
