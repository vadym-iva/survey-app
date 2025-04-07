import { TGeneralSurveyQuestionsIds } from '@/config/surveys/types';

export interface ISurveyInitialState {
  answers: Partial<Record<TGeneralSurveyQuestionsIds, string | boolean>>;
}
