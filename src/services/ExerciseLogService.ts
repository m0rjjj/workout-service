import { AfterRoutesInit, Service } from '@tsed/common';
import { TypeORMService } from '@tsed/typeorm';
import { Connection } from 'typeorm';
import { ExerciseLog } from '~/entities/ExerciseLog';
import { $log } from 'ts-log-debug';

@Service()
export class ExerciseLogService implements AfterRoutesInit {
	private connection!: Connection;
	constructor(private typeORMService: TypeORMService) {}

	public $afterRoutesInit() {
		const connection = this.typeORMService.get();
    if (connection) {
			this.connection = connection;
		}
	}

	public async create(user: ExerciseLog): Promise<ExerciseLog> {
		await this.connection.manager.save(user);
		$log.debug('Saved a new user with id: ' + user.id);

		return user;
	}

	public async find(): Promise<ExerciseLog[]> {
		const exerciseLogs = await this.connection.manager.find(ExerciseLog);
		$log.debug('Loaded exerciseLogs: ', exerciseLogs);

		return exerciseLogs;
	}
}
