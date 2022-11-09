import { Pais } from "./pais";

export class Persona {
    id: string;
    nombre: string;
    apellido: string;
    edad: number;
    paisId: string;

    pais: Pais;
}
