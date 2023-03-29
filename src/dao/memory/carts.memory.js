export default class Carts {
    constructor() {
      this.data = [];
    }
    get = () => {
      return this.data;
    };
    create = (cart) => {
      this.data.push(cart);
    };
    update = (id, cart) => {
      let index = this.data.findIndex((cart) => cart.id === id);
      this.data[index] = cart;
    };
    delete = (id) => {
      let index = this.data.findIndex((cart) => cart.id === id);
      this.data.splice(index, 1);
    };
  }
  