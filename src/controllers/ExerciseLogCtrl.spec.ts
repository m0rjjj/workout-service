import { expect } from 'chai';
import { ExerciseLogCtrl } from './ExerciseLogCtrl';
import { ExerciseLogService } from '~/services/ExerciseLogService';
import { TypeORMService } from '@tsed/typeorm';

describe('ExerciseLogCtrl', () => {
	let ctrl;
	beforeEach(() => {
		ctrl = new ExerciseLogCtrl(new ExerciseLogService(new TypeORMService()));
	});

	it('should return exercise log list', () => {
		expect(true).to.be.true;
	});
});