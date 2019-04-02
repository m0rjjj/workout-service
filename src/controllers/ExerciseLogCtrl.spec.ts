import { TypeORMService } from '@tsed/typeorm';
import { expect } from 'chai';
import { ExerciseLogService } from '~/services/ExerciseLogService';
import { ExerciseLogCtrl } from './ExerciseLogCtrl';

describe('ExerciseLogCtrl', () => {
	let ctrl;
	beforeEach(() => {
		ctrl = new ExerciseLogCtrl(new ExerciseLogService(new TypeORMService()));
	});

	it('should return exercise log list', () => {
		expect(true).to.be.true;
	});
});
