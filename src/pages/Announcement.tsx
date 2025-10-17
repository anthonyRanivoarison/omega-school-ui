import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AnnouncementPage() {
  const data = [
    {
      id: 1,
      title: "Rentree 2024-2025",
      image: "/announcement-1.jpeg",
      date: "07 septembre 2025",
      desc: "Le college ouvre ses portes pour une nouvelle annee pleine de decouvertes !",
    },
    {
      id: 2,
      title: "Rénovation de la bibliothèque",
      image: "/devise-picture-1.jpeg",
      date: "15 août 2025",
      desc: "Venez profitr d'un espace moderne et confortable pour vos lectures et recherches.",
    },
    {
      id: 3,
      title: "Atelier de Maths",
      image: "/devise-picture-2.jpeg",
      date: "20 août 2025",
      desc: "Resolvez des enigmes et defis logiques pour apprendre en vous amusant !"
    },
  ]

  return (
    <div className="flex items-center gap-4 p-6">
      <>
        <div className="w-full">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold">Annonces</h1>
              <p className="text-sm text-muted-foreground">Derniers mise a jour de notre college</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-sm text-muted-foreground">3 annonces</span>
              <Button
                type="button"
                className="inline-flex items-center rounded-md bg-[#FACC15] hover:bg-[#cfa80d] px-3 py-2 text-sm font-medium text-white"
                title="Voir plus d'annonces"
              >
                Voir plus
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((a) => (
              <motion.div
                key={a.id}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card key={a.id} className="min-h-[140px] hover:shadow">
                  <CardHeader>
                    <img src={a.image} alt={a.title} className="rounded" />
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center justify-between w-full">
                        <CardTitle className="text-base">{a.title}</CardTitle>
                        <CardDescription className="text-lg">
                          <Badge variant={"outline"}>{a.date}</Badge>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">{a.desc}</p>
                  </CardContent>

                  <CardFooter>
                    <a href="#" className="text-sm text-primary hover:underline">
                      En savoir plus
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Autres</CardTitle>
                <CardDescription className="text-sm"></CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 grid grid-cols-2 gap-4">
                  <li className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold">Concours d'éloquence interclasses</p>
                      <p className="text-sm text-muted-foreground">Développez vos compétences oratoires et gagnez des prix. Ouvert à tous les niveaux.</p>
                    </div>
                    <Badge variant="outline">10 oct. 2025</Badge>
                  </li>

                  <li className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold">Journée portes ouvertes</p>
                      <p className="text-sm text-muted-foreground">Visites guidées, présentations des filières et rencontre avec les enseignants.</p>
                    </div>
                    <Badge variant="outline">02 nov. 2025</Badge>
                  </li>

                  <li className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold">Atelier de robotique</p>
                      <p className="text-sm text-muted-foreground">Initiation à la programmation et aux robots pour les passionnés de technologie.</p>
                    </div>
                    <Badge variant="outline">18 sept. 2025</Badge>
                  </li>

                  <li className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold">Tournoi sportif interclasses</p>
                      <p className="text-sm text-muted-foreground">Football, basketball et volley — inscrivez votre équipe pour représenter la classe.</p>
                    </div>
                    <Badge variant="outline">30 sept. 2025</Badge>
                  </li>

                  <li className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold">Programme de tutorat entre élèves</p>
                      <p className="text-sm text-muted-foreground">Des élèves avancés accompagnent les autres pour améliorer les résultats scolaires.</p>
                    </div>
                    <Badge variant="outline">Permanent</Badge>
                  </li>

                  <li className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold">Collecte de fournitures scolaires</p>
                      <p className="text-sm text-muted-foreground">Campagne solidaire pour aider les familles en difficulté — points de dépôt au hall.</p>
                    </div>
                    <Badge variant="outline">Toute la semaine</Badge>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    </div>
  )
}