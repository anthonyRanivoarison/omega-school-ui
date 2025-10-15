interface User {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  address: string;
  birthDate: string;
  avatar: string;
  gender: "Masculin" | "Féminin";
}

export interface Student extends User {
  grade: string
}

export interface Teacher extends User {
  subject: string
}