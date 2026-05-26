export interface ContaRequestDTO {
    nome: string;
    descricao?: string;
    valor: number;
    tipo: "PAGAR" | "RECEBER";
    dataVencimento: string;
    pago?: boolean;
    categoriaId: number;

}