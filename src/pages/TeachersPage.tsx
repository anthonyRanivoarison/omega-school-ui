import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";

export default function TeachersPage() {
  const teachers = [
    {
      id: 1,
      name: "Mme Dupont",
      email: "dupont@example.com",
      phone: "+33 1 23 45 67 89",
      avatar: "https://via.placeholder.com/40",
      joinedDate: new Date("2023-09-01T09:00:00+03:00"),
    },
    {
      id: 2,
      name: "M. Jean Dubois",
      email: "jean.dubois@example.com",
      phone: "+33 1 98 76 54 32",
      avatar: "https://via.placeholder.com/40?text=JD",
      joinedDate: new Date("2022-08-15T10:00:00+03:00"),
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-[#1E40AF] mb-6">Espace Professeurs</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher) => (
          <Card key={teacher.id} className="hover:shadow-lg transition-all">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={teacher.avatar} alt={teacher.name} />
                <AvatarFallback>{teacher.name.split(" ")[0][0]}{teacher.name.split(" ")[1][0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-[#1E40AF]">{teacher.name}</CardTitle>
                <p className="text-sm text-gray-600">Professeur</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="h-5 w-5" />
                <p>{teacher.email}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="h-5 w-5" />
                <p>{teacher.phone}</p>
              </div>
              <p className="text-sm text-gray-500">
                Rejoint le : {format(teacher.joinedDate, "PPP")}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}