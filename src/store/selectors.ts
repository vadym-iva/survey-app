import { TSurveyId } from '@/config/surveys/types';
import { RootState } from '@/store';

export const selectSurveyAnswers = (surveyId: TSurveyId) => (state: RootState) => {
  return state[surveyId]?.answers || {};
};
