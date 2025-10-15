import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  Calendar,
  MapPin,
  User,
  HeartPulse,
  Hash,
} from "lucide-react";
import type { Student } from "@/types/user";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { InfoItem } from "@/components/info-item";

export default function StudentDashboardPage() {
  const student: Student = {
    id: 3,
    firstName: "Tahina",
    lastName: "Andriamihaja",
    gender: "Masculin",
    birthDate: "2008-11-03",
    phone: "+261 34 77 222 13",
    email: "tahina@example.com",
    address: "67 Rue des Études, Mahamasina",
    grade: "3 ème",
    avatar: "https://randomuser.me/api/portraits/men/40.jpg",
  };

  const cover = "/profile-bg.jpeg";

  return (
    <div className="flex justify-center min-h-screen">
      <div className="relative w-full shadow-2xl border-none overflow-hidden">
        <div className="relative h-72 w-full">
          <img
            src={cover}
            alt="Student cover"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
        </div>

        <CardHeader className="relative bg-white/80 backdrop-blur-md px-8 pt-10 pb-2">
          <div className="absolute -top-24 left-8">
            <img
              src={student.avatar}
              alt={`${student.firstName} ${student.lastName}`}
              className="w-36 h-36 rounded-full border-4 border-white shadow-xl object-cover"
            />
          </div>

          <div className="ml-44 flex items-center justify-between gap-4">
            <div className="flex flex-col gap-4">
              <CardTitle className="text-3xl font-extrabold text-[#1E3A8A] tracking-tight">
                {student.firstName} {student.lastName}
              </CardTitle>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <Badge className="bg-blue-100 text-blue-800 text-sm">
                  {student.grade}
                </Badge>
                <Badge
                  className={`text-sm ${student.gender === "Masculin"
                      ? "bg-cyan-100 text-cyan-800"
                      : "bg-pink-100 text-pink-800"
                    }`}
                >
                  {student.gender}
                </Badge>
                <Badge className="bg-purple-100 text-purple-800 text-sm flex items-center gap-1">
                  <User className="w-3 h-3" />
                  Étudiant
                </Badge>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link to={"/student/grades"} className={buttonVariants({ variant: "outline" })}>Voir les notes</Link>
            </div>
          </div>
        </CardHeader>

        <CardContent className="bg-white p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoItem
            icon={<Mail className="text-blue-600 w-4 h-4" />}
            label="Email"
            value={student.email!}
          />
          <InfoItem
            icon={<Phone className="text-blue-600 w-4 h-4" />}
            label="Téléphone"
            value={student.phone!}
          />
          <InfoItem
            icon={<Calendar className="text-blue-600 w-4 h-4" />}
            label="Date de naissance"
            value={new Date(student.birthDate).toLocaleDateString("fr-FR")}
          />
          <InfoItem
            icon={<MapPin className="text-blue-600 w-4 h-4" />}
            label="Adresse"
            value={student.address}
          />
          <InfoItem
            icon={<HeartPulse className="text-blue-600 w-4 h-4" />}
            label="Contact d'urgence"
            value={"123-456-7890"}
          />
          <InfoItem
            icon={<Hash className="text-blue-600 w-4 h-4" />}
            label="ID étudiant"
            value={student.id.toString()}
          />
        </CardContent>
        <CardFooter>
          <div className="text-muted-foreground text-center w-full p-3">
            &copy; Omega school.
          </div>
        </CardFooter>
      </div>
    </div>
  );
}