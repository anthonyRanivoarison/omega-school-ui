import type { Teacher } from "@/types/user";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import { Badge } from "./ui/badge";

export const TeacherCard = ({ teacher }: { teacher: Teacher }) => {
  return (
    <Card className="w-full max-w-sm bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden border border-gray-200">
      <CardHeader className="flex items-center gap-4">
        <img
          src={teacher.avatar}
          alt={`${teacher.firstName} ${teacher.lastName}`}
          className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
        />
        <div className="flex flex-col items-start gap-4">
          <CardTitle className="text-lg font-semibold text-gray-800">
            {teacher.firstName} {teacher.lastName}
          </CardTitle>
          <Badge className="bg-[#10B981]">{teacher.subject}</Badge>
        </div>
      </CardHeader>

      <CardContent className="p-5 space-y-3 text-gray-700">
        <div className="flex items-center gap-2">
          <Phone size={18} className="text-blue-600" />
          <span>{teacher.phone}</span>
        </div>

        <div className="flex items-center gap-2">
          <Mail size={18} className="text-blue-600" />
          <span>{teacher.email || "N/A"}</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={18} className="text-blue-600" />
          <span>{teacher.address}</span>
        </div>

        <div className="flex items-center gap-2">
          <Calendar size={18} className="text-blue-600" />
          <span>{new Date(teacher.birthDate).toLocaleDateString("fr-FR")}</span>
        </div>
      </CardContent>
    </Card>
  );
};
