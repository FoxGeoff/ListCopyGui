import { Customer } from "./customer";

export interface Account {
  company: string;
  address: string;
  phone:string;
  notes: string;
  contacts: Customer[]
}
