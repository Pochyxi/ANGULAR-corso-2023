import {UserInterface} from "../interfaces/userInterface";

export class User implements UserInterface {
  age: number;
  email: string;
  fiscalcode: string;
  id: number;
  lastname: string;
  name: string;
  phone: number;
  province: string;

  constructor() {
    this.age = 0;
    this.email = '';
    this.fiscalcode = '';
    this.id = 0;
    this.lastname = '';
    this.name = '';
    this.phone = 0;
    this.province = '';
  }
}
