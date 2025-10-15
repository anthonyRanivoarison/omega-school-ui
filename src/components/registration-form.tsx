import {CardContent} from "../components/ui/card";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Label } from "@/components/ui/label";

export function RegistrationForm() {
  return (
    <CardContent className="p-4 flex flex-wrap gap-4">
      <div className="flex-1 min-w-[48%] flex flex-col gap-2">
        <Label className="text-sm font-medium text-gray-700">
          Prénom(s)
        </Label>
        <Input type="text" placeholder="Koto" className="mt-1 w-full" />
      </div>
      <div className="flex-1 min-w-[48%] flex flex-col gap-2">
        <Label className="text-sm font-medium text-gray-700">
          Nom(s)
        </Label>
        <Input
          type="text"
          placeholder="RANDRIANARIVONY"
          className="mt-1 w-full"
        />
      </div>

      <div className="flex-1 min-w-[48%] flex flex-col gap-2">
        <Label className="text-sm font-medium text-gray-700">
          Numéro de téléphone
        </Label>
        <Input
          type="tel"
          placeholder="+261 34 56 789 01"
          className="mt-1 w-full"
        />
      </div>

      <div className="flex-1 min-w-[48%] flex flex-col gap-2">
        <Label className="text-sm font-medium text-gray-700">
          Date de naissance
        </Label>
        <Input type="date" className="mt-1 w-full" />
      </div>

      <div className="flex-1 w-full flex flex-col gap-2">
        <Label className="text-sm font-medium text-gray-700">Email</Label>
        <Input
          type="email"
          placeholder="koto@example.com"
          className="mt-1 w-full"
        />
      </div>

      <div className="flex-1 w-full flex flex-col gap-2">
        <Label className="text-sm font-medium text-gray-700">
          Adresse
        </Label>
        <Input
          type="text"
          placeholder="123 Rue Principale, Antananarivo"
          className="mt-1 w-full"
        />
      </div>

      <div className="flex-1 min-w-[48%] flex flex-col gap-2">
        <Label className="text-sm font-medium text-gray-700">Genre</Label>
        <Select>
          <SelectTrigger className="mt-1 w-full">
            <SelectValue placeholder="Sélectionner votre genre" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Masculin</SelectItem>
            <SelectItem value="female">Feminin</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1 min-w-[48%] flex flex-col gap-2">
        <Label className="text-sm font-medium text-gray-700">
          Contact d'urgence
        </Label>
        <Input
          type="tel"
          placeholder="+261 32 12 345 67"
          className="mt-1 w-full"
        />
      </div>
    </CardContent>
  )
}