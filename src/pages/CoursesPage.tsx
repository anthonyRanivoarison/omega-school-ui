import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { courses } from "@/seeders/courses";

export default function CoursesPage() {
  return (
    <section className="py-20 px-6 bg-[#F8FAFC] min-h-screen">
      <motion.h2
        className="text-4xl font-bold text-center mb-10 text-[#1E40AF]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Nos Matières au Collège
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-lg border-[#E2E8F0] hover:shadow-xl transition-all bg-white">
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-[#1E40AF] flex items-center gap-2">
                  <BookOpen className="text-[#10B981]" /> {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">{course.description}</p>
                <p className="text-sm text-gray-500">
                  Durée : <strong>{course.duration}</strong>
                </p>
                <p className="text-sm text-gray-500">
                  Niveau : <strong>{course.level}</strong>
                </p>
                <Button className="w-full mt-4 bg-[#10B981] hover:bg-[#0EA972] text-white">
                  Voir les details
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}