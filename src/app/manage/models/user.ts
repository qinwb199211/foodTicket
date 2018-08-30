import * as uuid from 'uuid';

export class User {
  static readonly defaultTickedNumber: number = 0;

  id: string;
  teamId: string;
  name: string;
  role: string;
  ticketNumber: number;
  password: string;

  constructor(user: any) {
    this.id = user.id ? user.id : uuid.v4();
    this.teamId = user.teamId;
    this.name = user.name;
    this.role = user.role;
    this.password = user.password;
    this.ticketNumber = user.ticketNumber ? user.ticketNumber : User.defaultTickedNumber;
  }
}
