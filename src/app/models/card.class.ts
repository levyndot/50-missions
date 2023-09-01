
export enum CardSymbol {
  fire = 'fire',
  water = 'water',
  bolt= 'bolt',
  wind = 'wind'
}

export class Card {
  _symbol: CardSymbol;
  _value;

  constructor(symbol: CardSymbol, value: number) {
    this._symbol = symbol;
    this._value = value;
  }

  get symbol() {
    return this._symbol;
  }

  get value() {
    return this._value;
  }
}
