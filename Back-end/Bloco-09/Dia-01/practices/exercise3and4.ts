class Client {
  private _name: string;

  constructor(n: string) {
    this._name = n;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

class Order {
  private _name: string;
  private _itens: number[];
  private _payment: string;
  private _discount = 0;

  constructor(n: string, i: number[], p: string) {
    this._name = n;
    this._itens = i;
    this._payment = p;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get itens(): number[] {
    return this._itens;
  }

  set itens(value: number[]) {
    this._itens = value;
  }

  get payment(): string {
    return this._payment;
  }

  set payment(value: string) {
    this._payment = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    if (value && (value < 0 || value > 100)) {
      throw new Error('O desconto deve está entre 0% a 100%')
    }

    this._discount = value;
  }

  total(): number {
    return this._itens.reduce((acc, curr) => acc + curr, 0);
  }

  totalD(): number {
    return this.total() * (1 - this._discount);
  }
}

class OrderItem {
  private _name: string;
  private _price: number;

  constructor(n: string, p: number) {
    this._name = n;
    this._price = p;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
}