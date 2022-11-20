import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly users: User[] = [
    {
      id: 1000,
      name: "John Doe",
      emailaddress: "john@doe.com",
      birthday: new Date("29/07/1976"),
      rating: 3
    },
    {
      id: 1001,
      name: "Jasmijn Jansen",
      emailaddress: "jasmijn@jansen.com",
      birthday: new Date("10/10/2004"),
      rating: 8
    },
    {
      id: 1002,
      name: "Linda van der Velden",
      emailaddress: "lisa@vdvelden.com",
      birthday: new Date("05/09/2000"),
      rating: 5
    },
    {
      id: 1003,
      name: "Pietje Puk",
      emailaddress: "pietje@puk.com",
      birthday: new Date("05/07/1998"),
      rating: 6
    },
    {
      id: 1004,
      name: "Klaas Klaassen",
      emailaddress: "klaas@klaassen.com",
      birthday: new Date("30/12/1985"),
      rating: 9
    }
  ]

  constructor() {}

  getUsers(): User[] {
    console.log(this.users.length + " users returned")
    return this.users;
  }

  getUserById(id: number): User {
    return this.users.filter(x => x.id == id)[0];
  }

  deleteUser(id: number) {
    var userToDelete = this.users.findIndex((u) => u.id == id)
    this.users.splice(userToDelete, 1);
  }

  addUser(user: User) {
    this.users.push(user);
  }

  updateUser(user: User) {
    let editUser = this.users.findIndex((x) => x.id == user.id);
    this.users[editUser] = user;
    console.log(this.users);
  }
}
