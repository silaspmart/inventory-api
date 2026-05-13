import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty, IsString, IsNumber } from "class-validator";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  @IsNotEmpty({ message: "Nome do produto é obrigatório!" })
  @IsString({ message: "Nome do produto precisa ser um texto" })
  name!: string;

  @Column("int")
  @IsNotEmpty({ message: "Quantidade é obrigatório!" })
  @IsNumber()
  quantity!: number;

  @Column("numeric", {
    precision: 10,
    scale: 2,
  })
  @IsNotEmpty({ message: "Preço é obrigatório!" })
  @IsNumber()
  price!: number;
}
