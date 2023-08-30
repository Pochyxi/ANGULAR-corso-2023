import {Injectable} from '@angular/core';
import {UserInterface} from "../interfaces/userInterface";
import {User} from "../classes/User";

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  users: UserInterface[] = [{
    'id': 1,
    'name': 'Anna',
    'lastname': 'Ferrari',
    'fiscalcode': 'NF3ABTZO61Y70I20',
    'province': 'Bologna',
    'phone': 3333842859,
    'age': 22,
    'email': 'annaromano@gmail.com'
  },
    {
      'id': 2,
      'name': 'Maria',
      'lastname': 'Verdi',
      'fiscalcode': 'RHDT6TMGWMHX1PQU',
      'province': 'Palermo',
      'phone': 3332055892,
      'age': 52,
      'email': 'mariaverdi@gmail.com'
    },
    {
      'id': 3,
      'name': 'Mario',
      'lastname': 'Romano',
      'fiscalcode': 'L4BFE0AK86ITX821',
      'province': 'Torino',
      'phone': 3338757366,
      'age': 65,
      'email': 'marioromani@gmail.com'
    },
    {
      'id': 4,
      'name': 'Anna',
      'lastname': 'Romano',
      'fiscalcode': 'L3IKQSUA1EZKVAKH',
      'province': 'Napoli',
      'phone': 3336851485,
      'age': 36,
      'email': 'annaromano@gmail.com'
    },
    {
      'id': 5,
      'name': 'Maria',
      'lastname': 'Ferrari',
      'fiscalcode': 'AOJ1QFJODH6U5T3F',
      'province': 'Milano',
      'phone': 3339070004,
      'age': 67,
      'email': 'mariaferrari@gmail.com'
    },
    {
      'id': 6,
      'name': 'Francesca',
      'lastname': 'Esposito',
      'fiscalcode': 'X2YXJX4578B48XEW',
      'province': 'Genova',
      'phone': 3334972265,
      'age': 37,
      'email': 'francescaesposito@gmail.com'
    },
    {
      'id': 7,
      'name': 'Laura',
      'lastname': 'Verdi',
      'fiscalcode': 'C2N6ABOLS6YNANZ9',
      'province': 'Palermo',
      'phone': 3331009789,
      'age': 75,
      'email': 'lauraverdi@gmail.com'
    },
    {
      'id': 8,
      'name': 'Giuseppe',
      'lastname': 'Romano',
      'fiscalcode': '5PBY0Q4OIIYWA8P8',
      'province': 'Torino',
      'phone': 3338033590,
      'age': 60,
      'email': 'giusepperomano@gmail.com'
    },
    {
      'id': 9,
      'name': 'Anna',
      'lastname': 'Rossi',
      'fiscalcode': 'LSGHYPL0B13U5FOV',
      'province': 'Bologna',
      'phone': 3339259588,
      'age': 66,
      'email': 'annarossi@gmail.com'
    },
    {
      'id': 10,
      'name': 'Luigi',
      'lastname': 'Ricci',
      'fiscalcode': 'QNPVW58NO1K5QVU2',
      'province': 'Palermo',
      'phone': 3337752643,
      'age': 56,
      'email': 'luigiricci@gmail.com'
    },
    {
      'id': 11,
      'name': 'Luigi',
      'lastname': 'Verdi',
      'fiscalcode': 'HNZ4KA4WGHN11INV',
      'province': 'Genova',
      'phone': 3339393592,
      'age': 73,
      'email': 'luigiverdi@gmail.com'
    },
    {
      'id': 12,
      'name': 'Marco',
      'lastname': 'Romano',
      'fiscalcode': '37IK3M83AZ7R5J23',
      'province': 'Bologna',
      'phone': 3330858502,
      'age': 51,
      'email': 'annaromano@gmail.com'
    },
    {
      'id': 13,
      'name': 'Maria',
      'lastname': 'Verdi',
      'fiscalcode': '8XMF2KDITHM2NM0T',
      'province': 'Torino',
      'phone': 3339739579,
      'age': 41,
      'email': 'annaromano@gmail.com'
    },
    {
      'id': 14,
      'name': 'Laura',
      'lastname': 'Colombo',
      'fiscalcode': 'KYF3SIQYFBF71JAB',
      'province': 'Palermo',
      'phone': 3336715913,
      'age': 43,
      'email': 'annaromano@gmail.com'
    },
    {
      'id': 15,
      'name': 'Francesca',
      'lastname': 'Ferrari',
      'fiscalcode': 'X84P8B9EC61BKRWD',
      'province': 'Roma',
      'phone': 3336985657,
      'age': 50,
      'email': 'annaromano@gmail.com'
    },
    {
      'id': 16,
      'name': 'Luigi',
      'lastname': 'Romano',
      'fiscalcode': 'ZHMYEAIX4KC2DTD1',
      'province': 'Milano',
      'phone': 3331942379,
      'age': 30,
      'email': 'annaromano@gmail.com'
    },
    {
      'id': 17,
      'name': 'Maria',
      'lastname': 'Rossi',
      'fiscalcode': 'Q18RDDJX9G00IYJU',
      'province': 'Palermo',
      'phone': 3335124971,
      'age': 29,
      'email': 'annaromano@gmail.com'
    },
    {
      'id': 18,
      'name': 'Luigi',
      'lastname': 'Colombo',
      'fiscalcode': 'B35FS0WA75BHCP3A',
      'province': 'Firenze',
      'phone': 3333822108,
      'age': 77,
      'email': 'annaromano@gmail.com'
    },
    {
      'id': 19,
      'name': 'Maria',
      'lastname': 'Bianchi',
      'fiscalcode': 'TD5H02YYYTS6XRB6',
      'province': 'Genova',
      'phone': 3338838980,
      'age': 67,
      'email': 'annaromano@gmail.com'
    },
    {
      'id': 20,
      'name': 'Mario',
      'lastname': 'Colombo',
      'fiscalcode': 'C0HX4RKSC3MP05ED',
      'province': 'Torino',
      'phone': 3331329615,
      'age': 66,
      'email': 'annaromano@gmail.com'
    }]

  constructor() {
  }

  getUsers() {
    return this.users
  }

  deleteUser(userChoice: UserInterface) {
    const index = this.users.indexOf(userChoice);
    if (index > -1) {
      this.users.splice(index, 1);
      console.log(this.users)
    }
  }

  updateUser(user: User) {
    const index = this.users.findIndex((u) => u.id === user.id);

    if (index > -1) {
      this.users[index] = user;
    }
  }

  addUser(user: User) {
    this.users.splice(0, 0, user);
  }
}
