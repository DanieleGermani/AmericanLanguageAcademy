export class Camara {

  constructor(
    public _id: number = Math.floor(Math.random() * 100),
    public name: string = "",
    public description: string = "",
    public price: string = "",
    public editable: boolean = false
  ) {

  }
}
