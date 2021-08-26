import { contact } from "./contact";

export interface account {
  company: string;
  address: string;
  phone:string;
  notes: string;
  contacts: contact[]
}
