import { Consulta } from "./interfaces/consulta";
import { medicos } from "./db/medicos.data";
import { pacientes } from "./db/pacientes.data";
import { ConsultaService } from "./services/consulta.service";

// initial exec
const [medico1, medico2, medico3] = medicos;
const [paciente1, paciente2, paciente3] = pacientes;

const consultaService = new ConsultaService();

const consulta1 = consultaService.criarConsulta({
  id: 1,
  medico: medico1,
  paciente: paciente1,
  data: new Date("2026-03-01T10:00:00"),
  valor: 350,
});

let consulta2 = consultaService.criarConsulta({
  id: 2,
  medico: medico2,
  paciente: paciente2,
  data: new Date("2026-03-05T14:30:00"),
  valor: 400,
});
consulta2 = consultaService.confirmarConsulta(consulta2);

let consulta3 = consultaService.criarConsulta({
  id: 3,
  medico: medico3,
  paciente: paciente3,
  data: new Date("2026-02-20T09:00:00"),
  valor: 300,
});
consulta3 = {
  ...consulta3,
  status: "realizada",
};

let consulta4 = consultaService.criarConsulta({
  id: 4,
  medico: medico1,
  paciente: paciente3,
  data: new Date("2026-03-06T16:00:00"),
  valor: 350,
});
consulta4 = consultaService.cancelarConsulta(consulta4)!;

const consulta5 = consultaService.criarConsulta({
  id: 5,
  medico: medico2,
  paciente: paciente1,
  data: new Date("2026-03-10T11:00:00"),
  valor: 400,
});


const consultas: Consulta[] = [
  consulta1,
  consulta2,
  consulta3,
  consulta4,
  consulta5,
];

console.log("=== TODAS AS CONSULTAS ===");
consultas.forEach((c) => console.log(consultaService.exibirConsulta(c)));

console.log("\n=== APENAS AGENDADAS (usando listarConsultasPorStatus) ===");
const consultasAgendadas = consultaService.listarConsultasPorStatus(consultas, "agendada");
consultasAgendadas.forEach((c) => console.log(`- Consulta #${c.id} (${c.paciente.nome})`));

console.log("\n=== CONSULTAS FUTURAS (usando listarConsultasFuturas) ===");
const consultasFuturas = consultaService.listarConsultasFuturas(consultas);
consultasFuturas.forEach((c) => console.log(`- Consulta #${c.id} (${c.data.toLocaleDateString("pt-BR")})`));