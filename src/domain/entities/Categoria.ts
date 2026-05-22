import { Conta } from "./Conta"
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
} from "typeorm";

@Entity("categorias")
export class Categoria {
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column({ type: "varchar", length: 150 })
    nome!: string;

    @CreateDateColumn()
    criadoEm!: Date;

    @UpdateDateColumn()
    atualizadoEm!: Date;

    @OneToMany(() => Conta, (conta) => conta.categoria)
    contas!: Conta[];



}