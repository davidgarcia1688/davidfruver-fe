export class Producto {
  constructor(
    public idproducto: any,
    public nombreproducto: string,
    public detalleproducto: string,
    public precioproducto: number,
    public foto: string,
    public cantidad: number = 0
  ) {}
}
