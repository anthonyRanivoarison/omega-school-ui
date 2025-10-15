import { TeacherCard } from "@/components/TeacherCard";
import { Badge } from "@/components/ui/badge";
import { teachers } from "@/seeders/data";

export default function TeachersPageOnAdmin() {
  return (
    <div className="p-6 flex flex-col gap-4 items-start">
      <span className="flex items-center justify-between w-full">
        <h1 className="text-3xl font-semibold">Nos professeurs</h1>
        <span>Total : <Badge>{teachers.length}</Badge></span>
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full">
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
}
