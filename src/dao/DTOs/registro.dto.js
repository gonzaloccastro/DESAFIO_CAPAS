import crypto from "crypto";
export default class RegistroDTO {
  constructor(registro) {
    this.firstName = registro.firstName;
    this.lastName = registro.lastName;
    this.email = registro.email;
    this.age = registro.age;
    this.password = registro.password;
    this.id = crypto.randomBytes(16).toString("hex");
  }
}
