import { Consulta } from "./interfaces/consulta";
import { criarConsulta } from "./types/criarConsulta";

function criarConsulta(criarConsulta: criarConsulta): Consulta {
  const consulta: Consulta = {
    ...criarConsulta,
    status: "agendada",
  };
  return consulta;
}

function confirmarConsulta(consulta: Consulta): Consulta {
  return {
    ...consulta,
    status: "confirmada",
  };
}

function cancelarConsulta(consulta: Consulta): Consulta | null {
  if (consulta.status === "realizada") {
    return null;
  }
  return {
    ...consulta,
    status: "cancelada",
  };
}