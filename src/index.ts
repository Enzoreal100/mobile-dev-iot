import { Consulta } from "./interfaces/consulta";
import { criarConsulta } from "./types/criarConsulta";
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
  data: new Date(),
  valor: 350,
});

const consultaConfirmada = consultaService.confirmarConsulta(consulta1);
console.log("=== CONSULTA CONFIRMADA ===");
console.log(consultaService.exibirConsulta(consultaConfirmada));