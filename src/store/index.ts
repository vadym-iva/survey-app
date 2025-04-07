import { configureStore } from '@reduxjs/toolkit';
import generalSurveyReducer from './generalSurvey/slice';
import { SURVEYS_IDS } from '@/config/surveys/types';

export const store = configureStore({
  reducer: {
    [SURVEYS_IDS.GENERAL_SURVEY]: generalSurveyReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
