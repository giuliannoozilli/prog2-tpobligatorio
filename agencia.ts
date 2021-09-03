import { PaqTuristico } from "./paqueteturistico";
import { Destino } from "./destino";

export class Agencia extends PaqTuristico {
  constructor(
    fdesde: string,
    cantDias: number,
    destino: Destino,
    totalPlazas: number
    /*
    objPaqueteTuristico: string,
    tipoDoc: string,
    numDoc: number,
    cantPer: number,
    esOnLine: boolean,
    
    fecha: string,
    año: string,
    n: number // (?)
    */
  ) {
    super(fdesde, cantDias, destino, totalPlazas);
  }

  // metodos
  incorporarPaquete(objPaqueteTuristico: []) {
    return objPaqueteTuristico;
  }
  incorporarVenta(objPaquete, tipoDoc, numDoc, cantPer, esOnLine) {
    if ((venta = true)) {
      return console.log("la venta pudo concretarse");
    } else {
      return console.log(-1);
    }
  }
  informarPaquetesTuristicos(fecha: string, destino: Destino) {
    return (PaqTuristico = fecha), destino;
  }
  paqueteMasEconomico(fecha: string, destino: Destino) {
    return (PaqTuristico = fecha), destino;
  }
  informarConsumoCliente(tipoDoc: string, numDoc: number) {
    if ((objPaqueteTuristico = tipoDoc & numDoc)) {
    }
  }
  informarPaquetesMasVendido(anio, n) {
    if ((objPaqueteTuristico = anio)) {
      return objPaquete;
    }
  }
  promedioVentasOnLine() {}
  promedioVentasAgencia() {}
}
