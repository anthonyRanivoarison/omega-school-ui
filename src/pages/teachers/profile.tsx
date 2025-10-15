import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  Calendar,
  MapPin,
  User,
  Book,
  Hash,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import type { Teacher } from "@/types/user";
import { InfoItem } from "@/components/info-item";

export default function TeacherDashboardPage() {
  const teacher: Teacher = {
    id: 1,
    firstName: "Marie",
    lastName: "Lefèvre",
    gender: "Féminin",
    birthDate: "1985-05-12",
    phone: "+33 6 12 34 56 78",
    email: "marie.lefevre@example.com",
    address: "15 Rue de l'École, Paris",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    subject: "Mathématiques",
  };

  const cover = "/profile-bg.jpeg";

  return (
    <div className="flex justify-center min-h-screen">
      <div className="relative w-full shadow-2xl border-none overflow-hidden">
        <div className="relative h-72 w-full">
          <img
            src={cover}
            alt="Teacher cover"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
        </div>

        <CardHeader className="relative bg-white/80 backdrop-blur-md px-8 pt-10 pb-2">
          <div className="absolute -top-24 left-8">
            <img
              src={teacher.avatar}
              alt={`${teacher.firstName} ${teacher.lastName}`}
              className="w-36 h-36 rounded-full border-4 border-white shadow-xl object-cover"
            />
          </div>

          <div className="ml-44 flex items-center justify-between gap-4">
            <div className="flex flex-col gap-4">
              <CardTitle className="text-3xl font-extrabold text-[#1E3A8A] tracking-tight">
                {teacher.firstName} {teacher.lastName}
              </CardTitle>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <Badge className="bg-green-100 text-green-800 text-sm">
                  {teacher.subject}
                </Badge>
                <Badge
                  className={`text-sm ${teacher.gender === "Masculin"
                    ? "bg-cyan-100 text-cyan-800"
                    : "bg-pink-100 text-pink-800"
                    }`}
                >
                  {teacher.gender}
                </Badge>
                <Badge className="bg-purple-100 text-purple-800 text-sm flex items-center gap-1">
                  <User className="w-3 h-3" />
                  Enseignant
                </Badge>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link to={`/teacher/courses`} className={buttonVariants({ variant: "outline" })}>
                Voir mes cours
              </Link>
            </div>
          </div>
        </CardHeader>

        <CardContent className="bg-white p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoItem
            icon={<Mail className="text-blue-600 w-4 h-4" />}
            label="Email"
            value={teacher.email || "Non disponible"}
          />
          <InfoItem
            icon={<Phone className="text-blue-600 w-4 h-4" />}
            label="Téléphone"
            value={teacher.phone}
          />
          <InfoItem
            icon={<Calendar className="text-blue-600 w-4 h-4" />}
            label="Date de naissance"
            value={new Date(teacher.birthDate).toLocaleDateString("fr-FR")}
          />
          <InfoItem
            icon={<MapPin className="text-blue-600 w-4 h-4" />}
            label="Adresse"
            value={teacher.address}
          />
          <InfoItem
            icon={<Book className="text-blue-600 w-4 h-4" />}
            label="Matière enseignée"
            value={teacher.subject}
          />
          <InfoItem
            icon={<Hash className="text-blue-600 w-4 h-4" />}
            label="ID enseignant"
            value={teacher.id.toString()}
          />
        </CardContent>
        <CardFooter>
          <div className="text-muted-foreground text-center w-full p-3">
            &copy; Omega school {new Date().getFullYear()}.
          </div>
        </CardFooter>
      </div>
    </div>
  );
}