import { Consulta } from "../interfaces/consulta";
import { criarConsulta } from "../types/criarConsulta";
import { StatusConsulta } from "../types/statusConsulta";

export class ConsultaService {
  criarConsulta(dadosConsulta: criarConsulta): Consulta {
    const consulta: Consulta = {
      ...dadosConsulta,
      status: "agendada",
    };
    return consulta;
  }

  confirmarConsulta(consulta: Consulta): Consulta {
    return {
      ...consulta,
      status: "confirmada",
    };
  }

  cancelarConsulta(consulta: Consulta): Consulta | null {
    if (consulta.status === "realizada") {
      return null;
    }
    return {
      ...consulta,
      status: "cancelada",
    };
  }

  exibirConsulta(consulta: Consulta): string {
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

  listarConsultasPorStatus(
    consultas: Consulta[],
    status: StatusConsulta
  ): Consulta[] {
    return consultas.filter((consulta) => consulta.status === status);
  }

  listarConsultasFuturas(consultas: Consulta[]): Consulta[] {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0); // Zera horas para comparar apenas a data
    return consultas.filter((consulta) => consulta.data >= hoje);
  }
}