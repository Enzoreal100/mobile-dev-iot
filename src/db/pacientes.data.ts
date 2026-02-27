import { Paciente } from "../types/paciente";

const paciente1: Paciente = {
  id: 1,
  nome: "Carlos Andrade",
  cpf: "123.456.789-00",
  email: "carlos@email.com",
};
const paciente2: Paciente = {
  id: 2,
  nome: "Maria Silva",
  cpf: "987.654.321-00",
  email: "maria@email.com",
  telefone: "(11) 98765-4321",
};
const paciente3: Paciente = {
  id: 3,
  nome: "Pedro Santos",
  cpf: "456.789.123-00",
  email: "pedro@email.com",
};

export const pacientes = [paciente1, paciente2, paciente3];
