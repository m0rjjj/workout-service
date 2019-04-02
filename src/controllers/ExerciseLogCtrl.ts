import { Controller, Get, PathParams, Required } from '@tsed/common';
import { Description, Returns, Summary } from '@tsed/swagger';
import { NotFound } from 'ts-httpexceptions';
import { ExerciseLog } from '~/entities/ExerciseLog';
import { ExerciseLogService } from '~/services/ExerciseLogService';

const exercises: ExerciseLog[] = [{ id: 1, name: 'deadlift' }, { id: 2, name: 'pistol squats' }];

@Controller('/exercise-log')
export class ExerciseLogCtrl {
	constructor(private exerciseLogService: ExerciseLogService) {}

	@Get('/')
	@Summary('Summary of this route')
	@Description('Description of this route')
	@Returns(404, { description: 'Not found' })
	public async getAll(): Promise<ExerciseLog[]> {
		return this.exerciseLogService.find();
	}

	@Get('/:id')
	@Summary('Summary of this route')
	@Description('Description of this route')
	@Returns(404, { description: 'Not found' })
	public async getById(@Required() @PathParams('id') id: number): Promise<ExerciseLog> {
		const result = exercises.find(exercise => exercise.id === id);
		if (result) {
			return result;
		}
		throw new NotFound('Exercise Log Not Found');
	}
}
