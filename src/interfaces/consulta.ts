import { StatusConsulta } from "../types/statusConsulta";
import { Especialidade } from "../types/especialidade";
export interface Consulta {
 id: number;
 pacienteId: number;
 pacienteNome: string;
 medicoId: number;
 medicoNome: string;
 especialidade: string;
 usuarioId: number; // ID do usuário que agendou a consulta
 data: string;
 horario: string;
 status: StatusConsulta;
 observacoes?: string;
 valor?: number;
}
