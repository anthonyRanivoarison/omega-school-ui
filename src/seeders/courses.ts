import { SUBJECTS } from "./data";

export const courses = SUBJECTS.map((subject, index) => ({
  id: index + 1,
  title: subject,
  description: getSubjectDescription(subject),
  duration: getSubjectDuration(subject),
  level: "Collège (6e-3e)",
}));

export function getSubjectDescription(subject: string) {
  const descriptions: Record<string, string> = {
    Mathématiques:
      "Maîtrisez les bases des nombres, géométrie et équations pour exceller au collège.",
    Français:
      "Développez vos compétences en lecture, grammaire et écriture avec des textes classiques.",
    Anglais:
      "Apprenez les bases de l'anglais avec vocabulaire, grammaire et conversation simple.",
    Sciences:
      "Explorez les sciences générales : physique, chimie et biologie adaptées au collège.",
    "Histoire-Géo":
      "Découvrez l'histoire de France et la géographie mondiale à travers des leçons interactives.",
    Physique:
      "Étudiez les principes de la physique avec des expériences simples et des concepts de base.",
    SVT: "Approfondissez les sciences de la vie et de la terre : corps humain, écosystèmes et géologie.",
    Informatique:
      "Initiez-vous à la programmation et à l'utilisation des outils numériques au collège.",
    EPS: "Améliorez votre condition physique avec des activités sportives adaptées à votre âge.",
    "Arts Plastiques":
      "Exprimez votre créativité à travers le dessin, la peinture et les projets artistiques.",
  };
  return (
    descriptions[subject] || "Cours interactif pour développer vos compétences."
  );
}

export function getSubjectDuration(subject: string) {
  const durations: Record<string, string> = {
    Mathématiques: "Annuel",
    Français: "Annuel",
    Anglais: "Annuel",
    Sciences: "Annuel",
    "Histoire-Géo": "Annuel",
    Physique: "Trimestriel",
    SVT: "Trimestriel",
    Informatique: "Trimestriel",
    EPS: "Trimestriel",
    "Arts Plastiques": "Trimestriel",
  };
  return durations[subject] || "Annuel";
}
