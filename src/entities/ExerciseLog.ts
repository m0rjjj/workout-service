import { JsonProperty, MaxLength, Required } from '@tsed/common';
import { Description, Example } from '@tsed/swagger';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExerciseLog {
	@PrimaryGeneratedColumn()
	public id!: number;

	@Column()
	public name!: string;
}
