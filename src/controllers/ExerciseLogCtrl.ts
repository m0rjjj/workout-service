import {
  Controller,
  Get,
  Required,
  PathParams,
} from '@tsed/common';
import { NotFound } from 'ts-httpexceptions';
import { ExerciseLog } from '~/interfaces/ExerciseLog';

const exercises: ExerciseLog[] = [
    { id: 1, 'name': 'deadlift' },
    { id: 2, 'name': 'pistol squats' }
];

@Controller('/exercise-log')
export class ExerciseLogCtrl {
  @Get('/')
  async getAll(): Promise<ExerciseLog[]> {
    return exercises;
  }
  @Get('/:id')
  async getById(@Required() @PathParams('id') id: number): Promise<ExerciseLog> {
    const result = exercises.find((exercise) => exercise.id === id);
    if (result) {
      return result;
    }
    throw new NotFound('Exercise Log Not Found');
  }
}
