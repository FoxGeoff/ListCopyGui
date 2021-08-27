import { Contact } from "./contact";

export interface Account {
  company: string;
  address: string;
  phone:string;
  notes: string;
  contacts: Contact[]
}
