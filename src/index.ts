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

function exibirConsulta(consulta: Consulta): string {
  const valorFormatado = consulta.valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return `
    Consulta #${consulta.id}
    Médico: ${consulta.medico.nome}
    Paciente: ${consulta.paciente.nome}
    Especialidade: ${consulta.medico.especialidade.nome}
    Data: ${consulta.data.toLocaleDateString("pt-BR")}
    Valor: ${valorFormatado}
    Status: ${consulta.status}
    `;
}