import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'esMayor'
})
export class EsMayorPipe implements PipeTransform {
    private readonly LIMITE_POR_DEFECTO = 18;
    transform(value: number, ...args: any[]) {
        const limite = args[0]? args[0] : this.LIMITE_POR_DEFECTO;
        const resultado = value > limite ? "SI" : "NO";
        return resultado;
    }

}