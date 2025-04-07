import { GENERAL_SURVEY_FORM_ROUTES, GENERAL_SURVEY_ROUTES, ROUTES } from './routes';

export type TRoutes = keyof typeof ROUTES;
export type TRoutesUrls = (typeof ROUTES)[TRoutes];

export type TGeneralSurveyRoutes = keyof typeof GENERAL_SURVEY_ROUTES;
export type TGeneralSurveyRoutesUrls = (typeof GENERAL_SURVEY_ROUTES)[TGeneralSurveyRoutes];

export type TGeneralSurveyFormRoutes = keyof typeof GENERAL_SURVEY_FORM_ROUTES;
export type TGeneralSurveyFormRoutesUrls =
  (typeof GENERAL_SURVEY_FORM_ROUTES)[TGeneralSurveyFormRoutes];
