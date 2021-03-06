import { Tipo } from "./tipo.model";

export class Ocorrencia {
    matricula:number
    nome: string;
    observacao: string;
    tipo:Tipo;
    data:string;
    pais:boolean;
    nomePai:string;

    constructor(matricula:number, nome:string,tipo:Tipo, data?:string,pais?:boolean,nomePai?:string, observacao?: string,) {
        this.matricula=matricula
        this.nome = nome;
        this.observacao = observacao;
        this.data=data;
        this.tipo=tipo;
        this.pais=pais;
        this.nomePai=nomePai;
    }
}