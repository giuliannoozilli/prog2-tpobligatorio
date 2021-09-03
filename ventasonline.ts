import { PaqTuristico } from "./paqueteturistico";
import { Ventas } from "./ventas";

export abstract class VentasOnline {
  constructor(
    public porcentajeDescuento: string,
    public fecha: string,
    public refPaq: string,
    public clienteHechoVenta: string,
    //
    public cantPersonas: number,
    public cantDias: number,
    public fdesde: string
  ) {}
  darImporteVenta(): number {
    let importeVenta: number;
    return (importeVenta = this.cantDias * this.fdesde * this.cantPersonas);
    //return cantDias: number * fdesde: string * cantPersonas: number
  }
}
