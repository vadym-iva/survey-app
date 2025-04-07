import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISurveyInitialState } from './types';
import {
  GENERAL_SURVEY_QUESTIONS_IDS,
  SURVEYS_IDS,
  TGeneralSurveyQuestionsIds,
} from '@/config/surveys/types';

const initialState: ISurveyInitialState = {
  answers: {},
};

const generalSurveySlice = createSlice({
  name: SURVEYS_IDS.GENERAL_SURVEY,
  initialState,
  reducers: {
    saveAnswer: (
      state,
      action: PayloadAction<{ id: TGeneralSurveyQuestionsIds; answer: string | boolean }>
    ) => {
      const questionId = action.payload.id;
      const answer = action.payload.answer;

      if (
        questionId === GENERAL_SURVEY_QUESTIONS_IDS.PARENT ||
        questionId === GENERAL_SURVEY_QUESTIONS_IDS.SINGLE_PARENT
      ) {
        if (typeof answer === 'string' && answer.toLowerCase() === 'yes') {
          state.answers[GENERAL_SURVEY_QUESTIONS_IDS.IS_PARENT] = true;
        } else {
          state.answers[GENERAL_SURVEY_QUESTIONS_IDS.IS_PARENT] = false;
        }
      }

      state.answers[questionId] = answer;
    },
  },
});

export const { saveAnswer } = generalSurveySlice.actions;
export default generalSurveySlice.reducer;
