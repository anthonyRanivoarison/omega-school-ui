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
import type { Student, Teacher } from "@/types/user";
import type { NotificationType } from "@/components/notification";
import Notification from "@/components/notification";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function UserList({
  students,
  teachers,
}: {
  students?: Student[];
  teachers?: Teacher[];
}) {
  const users = (students ?? teachers ?? []) as (Student | Teacher)[];
  const isTeacher = !!teachers;
  const [notif, setNotif] = useState<NotificationType>();
  const [selectedUser, setSelectedUser] = useState<Student | Teacher | null>(
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
            {isTeacher ? (
              <TableHead>Matière</TableHead>
            ) : (
              <TableHead>Classe</TableHead>
            )}
            <TableHead>Email</TableHead>
            <TableHead>Téléphone</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user, index) => (
            <TableRow
              key={user.id}
              className="hover:bg-blue-50 transition-colors"
            >
              <TableCell>{index + 1}</TableCell>

              <TableCell>
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={user.avatar}
                    alt={`${user.firstName} ${user.lastName}`}
                  />
                  <AvatarFallback>
                    {user.firstName[0] + user.lastName[0]}
                  </AvatarFallback>
                </Avatar>
              </TableCell>

              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.firstName}</TableCell>

              <TableCell>
                {"subject" in user ? user.subject : (user as Student).grade}
              </TableCell>

              <TableCell className="truncate max-w-[150px]">
                {user.email ?? "N/A"}
              </TableCell>

              <TableCell>{user.phone}</TableCell>

              <TableCell>
                <div className="flex items-center gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        title="Voir profil"
                        className="text-blue-600 border-blue-300 hover:bg-blue-100"
                        onClick={() => setSelectedUser(user)}
                      >
                        <Eye className="w-4 h-4 mr-1" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 p-4">
                      {selectedUser && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-4">
                            <img
                              src={selectedUser.avatar}
                              alt={`${selectedUser.firstName} ${selectedUser.lastName}`}
                              className="w-16 h-16 rounded-full border-2 border-gray-200 object-cover"
                            />
                            <div>
                              <h3 className="text-lg font-semibold text-[#1E40AF]">
                                {selectedUser.firstName} {selectedUser.lastName}
                              </h3>
                              <p className="text-sm text-gray-600">
                                Classe: {selectedUser?.grade}
                              </p>
                            </div>
                          </div>
                          <div className="text-sm text-gray-600">
                            <p>Email: {selectedUser.email || "N/A"}</p>
                            <p>Téléphone: {selectedUser.phone}</p>
                            <p>Adresse: {selectedUser.address}</p>
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
                  >
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}

          {users.length === 0 && (
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
