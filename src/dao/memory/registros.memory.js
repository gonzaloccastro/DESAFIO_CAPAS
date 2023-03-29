export default class Registro {
    constructor() {
      this.data = [];
    }
    get = () => {
      return this.data;
    };
    create = () => {
      this.data.push(registro);
    };
    update = (id, registro) => {
      let index = this.data.findIndex((registro) => registro.id === id);
      this.data[index] = registro;
    };
    delete = (id) => {
      let index = this.data.findIndex((registro) => registro.id === id);
      this.data.splice(index, 1);
    };
  }
  