import { Consulta } from "./interfaces/consulta";
import { criarConsulta } from "./types/criarConsulta";

function criarConsulta(criarConsulta: criarConsulta): Consulta {
  const consulta: Consulta = {
    ...criarConsulta,
    status: "agendada",
  };
  return consulta;
}