export type TipoUsuario = "paciente" | "admin";
 
export interface Usuario {
 id: number;
 nome: string;
 email: string;
 senha?: string;
 cpf: string;
 telefone: string;
 perfil: TipoUsuario;
}

export const ADMIN_CREDENTIALS = {
 email: "admin@sistema.com",
 senha: "admin123",
};