import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Eye, Trash } from "lucide-react";
import type { NotificationType } from "@/components/notification";
import Notification from "@/components/notification";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import type { Student } from "@/types/user";

export function StudentList({
  students,
}: {
  students?: Student[]
}) {
  const [notif, setNotif] = useState<NotificationType>();
  const [selectedstudent, setSelectedstudent] = useState<Student | null>(
    null
  );

  return (
    <div className="p-6 w-full overflow-x-auto">
      {notif && <Notification message={notif.message} type={notif.type} />}
      <Table className="border rounded-lg shadow-sm">
        <TableHeader className="bg-blue-50">
          <TableRow>
            <TableHead className="font-semibold">#</TableHead>
            <TableHead>Avatar</TableHead>
            <TableHead>Nom</TableHead>
            <TableHead>Prénom</TableHead>
            <TableHead>Classe</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Téléphone</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {students?.map((student, index) => (
            <TableRow
              key={student.id}
              className="hover:bg-blue-50 transition-colors"
            >
              <TableCell>{index + 1}</TableCell>

              <TableCell>
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={student.avatar}
                    alt={`${student.firstName} ${student.lastName}`}
                  />
                  <AvatarFallback>
                    {student.firstName[0] + student.lastName[0]}
                  </AvatarFallback>
                </Avatar>
              </TableCell>

              <TableCell>{student.lastName}</TableCell>
              <TableCell>{student.firstName}</TableCell>

              <TableCell className="truncate max-w-[150px]">
                {student.email ?? "N/A"}
              </TableCell>

              <TableCell>{student.phone}</TableCell>

              <TableCell>
                <div className="flex items-center gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        title="Voir profil"
                        className="text-blue-600 border-blue-300 hover:bg-blue-100"
                        onClick={() => setSelectedstudent(student)}
                      >
                        <Eye className="w-4 h-4 mr-1" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 p-4">
                      {selectedstudent && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-4">
                            <img
                              src={selectedstudent.avatar}
                              alt={`${selectedstudent.firstName} ${selectedstudent.lastName}`}
                              className="w-16 h-16 rounded-full border-2 border-gray-200 object-cover"
                            />
                            <div>
                              <h3 className="text-lg font-semibold text-[#1E40AF]">
                                {selectedstudent.firstName} {selectedstudent.lastName}
                              </h3>
                              <p className="text-sm text-gray-600">
                                Classe: {selectedstudent?.grade}
                              </p>
                            </div>
                          </div>
                          <div className="text-sm text-gray-600">
                            <p>Email: {selectedstudent.email || "N/A"}</p>
                            <p>Téléphone: {selectedstudent.phone}</p>
                            <p>Adresse: {selectedstudent.address}</p>
                          </div>
                        </div>
                      )}
                    </PopoverContent>
                  </Popover>
                  <Button
                    variant="destructive"
                    size="sm"
                    title="Supprimer"
                    className="bg-red-500 hover:bg-red-600 text-white"
                    onClick={() => { setNotif({ message: `Supprime`, type: "success", duration: 3000 }), setNotif(undefined) }}
                  >
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}

          {students?.length === 0 && (
            <TableRow>
              <TableCell colSpan={8} className="text-center text-gray-500 py-4">
                Aucun utilisateur trouvé.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
