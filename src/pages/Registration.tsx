import { Check } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { RegistrationForm } from "@/components/registration-form";

export default function RegistrationPage() {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="flex flex-col justify-center items-center py-10">
        <Card className="w-full max-w-xl shadow-lg border-0 rounded-xl">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-t-xl p-4">
            <CardTitle className="text-2xl font-bold">Rejoignez-nous</CardTitle>
            <CardDescription className="text-muted-foreground">
              Inscrivez-vous dès maintenant pour une aventure pleine chez Omega
              School
            </CardDescription>
          </CardHeader>
          <RegistrationForm />
          <CardFooter className="p-2 rounded-b-xl flex items-center justify-end">
            <Button
              variant="outline"
              type="submit"
              className="flex items-center gap-2 bg-white text-indigo-700 hover:bg-indigo-100 border-indigo-300"
            >
              Soumettre <Check />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
