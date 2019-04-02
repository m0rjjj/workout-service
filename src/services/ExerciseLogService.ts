import { Service, AfterRoutesInit } from '@tsed/common';
import { TypeORMService } from '@tsed/typeorm';
import { Connection} from 'typeorm';
import { ExerciseLog } from '~/entities/ExerciseLog';

@Service()
export class ExerciseLogService implements AfterRoutesInit {
	private connection!: Connection;
	constructor(private typeORMService: TypeORMService) {

	}

	$afterRoutesInit() {
		const connection = this.typeORMService.get();
		if (connection) {
			this.connection = connection;
		}
	}

	async create(user: ExerciseLog): Promise<ExerciseLog> {
		await this.connection.manager.save(user);
		console.log('Saved a new user with id: ' + user.id);

		return user;
	}

	async find(): Promise<ExerciseLog[]> {
		const exerciseLogs = await this.connection.manager.find(ExerciseLog);
		console.log('Loaded exerciseLogs: ', exerciseLogs);

		return exerciseLogs;
	}

}