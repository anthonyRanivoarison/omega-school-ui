import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

export default function TeacherCoursesPage() {
  const teacherCourses = [
    {
      id: 1,
      title: "Mathématiques",
      description: "Cours sur les fractions et géométrie.",
      lastUpdated: new Date("2025-10-14T14:00:00+03:00"),
    },
    {
      id: 2,
      title: "Sciences",
      description: "Introduction aux écosystèmes.",
      lastUpdated: new Date("2025-10-13T10:00:00+03:00"),
    },
    {
      id: 3,
      title: "Français",
      description: "Analyse de textes littéraires.",
      lastUpdated: new Date("2025-10-15T09:00:00+03:00"),
    },
  ]

  return (
    <div className="p-6">
      <h2 className="text-5xl font-bold text-[#1E40AF] mb-6 ds-font">Cours de Mme Marie Lefèvre</h2>
      <div className="grid grid-cols-3 gap-6">
        {teacherCourses.length > 0 ? (
          teacherCourses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-all">
              <CardHeader className="flex items-center gap-2">
                <BookOpen className="text-[#10B981] h-6 w-6" />
                <CardTitle className="text-[#1E40AF]">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-600">{course.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <p>Dernière mise à jour : {format(course.lastUpdated, "PPPp")}</p>
                </div>
                <Button className="w-full bg-[#1E40AF] hover:bg-[#1E3A8A] text-white mt-2">
                  Voir les détails
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-gray-500">Aucun cours assigné pour ce professeur.</p>
        )}
      </div>
    </div>
  );
}