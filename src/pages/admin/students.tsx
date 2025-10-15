import { Input } from "@/components/ui/input";
import UserList from "@/components/UserList";
import { students } from "@/seeders/data";
import { Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { RegistrationForm } from "@/components/registration-form";

export default function StudentsPage() {
  const classOptions = [
    "A",
    "B",
    "C",
    "Toutes les classes",
  ];
  const [selectedClass, setSelectedClass] = useState("Toutes les classes");


  const filteredStudents =
    selectedClass === "Toutes les classes"
      ? students
      : students.filter((student) => student.grade.includes(selectedClass));

  return (
    <div className="w-full p-4">
      <div className="flex flex-col gap-2 sm:flex-row items-center justify-between mb-8">
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <Input
              type="text"
              placeholder="Recherchez..."
              className="w-full rounded-lg border border-gray-300 pl-9 pr-3 py-2 text-sm text-gray-800 shadow-sm transition focus:border-blue-500 focus:ring focus:ring-blue-100"
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full sm:w-auto bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Filtrer par classe: {selectedClass}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuLabel>Choisir une classe</DropdownMenuLabel>
              {classOptions.map((option) => (
                <DropdownMenuItem
                  key={option}
                  onClick={() => setSelectedClass(option)}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  {option}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-4">
          <Badge
            variant="secondary"
            className="bg-blue-100 text-blue-800 font-semibold rounded-full px-3 py-1"
          >
            Total: {students.length}
          </Badge>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"outline"}>Ajouter un nouvel eleve</Button>
            </DialogTrigger>
            <DialogContent>
              <RegistrationForm />
              <DialogFooter>
                <p>All right reserved</p>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <UserList students={filteredStudents} />
    </div>
  );
}
