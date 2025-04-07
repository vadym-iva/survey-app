import { GENERAL_SURVEY_CONFIG } from '../generalSurveyConfig';
import { SURVEYS_IDS, TGeneralSurvey, TSurveyId } from '../types';

export const getSurveyConfig = (surveyId: TSurveyId): TGeneralSurvey => {
  switch (surveyId) {
    case SURVEYS_IDS.GENERAL_SURVEY:
      return GENERAL_SURVEY_CONFIG;
  }
};
