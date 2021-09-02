import { PaqTuristico } from "./paqueteturistico";
import { Ventas } from "./ventas";

export abstract class VentasOnline {
  constructor(
    public porcentajeDescuento: string,
    public fecha: string,
    public refPaq: string,
    /*public cantPersonas: number,
    public cantDias: number,
    fdesde: string,*/
    public clienteHechoVenta: string
  ) {}
  darImporteVenta(): number {
    let importeVenta: number;
    return this.cantDias * this.fdesde * this.cantPersonas;
    //return cantDias: number * fdesde: string * cantPersonas: number
  }
}
