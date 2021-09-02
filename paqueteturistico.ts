import { Destino } from "./Destino";

export class PaqTuristico {
  constructor(
    public fdesde: string,
    public cantDias: number,
    public destino: Destino,
    public totalPlazas: number
  ) {}
}
