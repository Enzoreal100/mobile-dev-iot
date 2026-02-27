import { Medico } from "../interfaces/medico";
import { Paciente } from "../types/paciente";

export type criarConsulta = {
  id: number;
  medico: Medico;
  paciente: Paciente;
  data: Date;
  valor: number;
};