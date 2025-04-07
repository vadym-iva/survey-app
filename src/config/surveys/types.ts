import { TGeneralSurveyFormRoutesUrls, TGeneralSurveyRoutesUrls } from '../routes.types';

export const SCREEN_TYPES = {
  SINGLE_CHOICE: 'SINGLE_CHOICE',
} as const;

export const SURVEYS_IDS = {
  GENERAL_SURVEY: 'GENERAL_SURVEY',
} as const;

export const QUERY_PARAMS = {
  NEXT: 'next',
} as const;

export const GENERAL_SURVEY_QUESTIONS_IDS = {
  GENDER: 'GENDER',
  RELATIONSHIP_STATUS: 'RELATIONSHIP_STATUS',
  SINGLE_PARENT: 'SINGLE_PARENT',
  RELATIONSHIP_PROBLEM: 'RELATIONSHIP_PROBLEM',
  TRAITS_TEND_TO_OVERTHINK: 'TRAITS_TEND_TO_OVERTHINK',
  PARTNER_PERSONALITY_TYPE: 'PARTNER_PERSONALITY_TYPE',
  TRAITS_MOST_IMPORTANT: 'TRAITS_MOST_IMPORTANT',
  EMOTIONAL_CONTROL: 'EMOTIONAL_CONTROL',
  PARENT: 'PARENT',
  SINGLE_PROBLEM: 'SINGLE_PROBLEM',
  PARTNER_GENDER: 'PARTNER_GENDER',
  PARTNER_PRIORITY: 'PARTNER_PRIORITY',
  RELATIONSHIP_GOALS: 'RELATIONSHIP_GOALS',
  RELATIONSHIP_ABOUT_US: 'RELATIONSHIP_ABOUT_US',
  IS_PARENT: 'IS_PARENT',
} as const;

export type TGeneralSurveyQuestionsIds = keyof typeof GENERAL_SURVEY_QUESTIONS_IDS;

export type TSurveyId = keyof typeof SURVEYS_IDS;

type TScreenType = keyof typeof SCREEN_TYPES;

export type TGeneralSurveyOption = {
  label: string;
  nextPage?:
    | TGeneralSurveyRoutesUrls
    | `${TGeneralSurveyRoutesUrls}?next=${TGeneralSurveyFormRoutesUrls}`;
};

export type TGeneralSurveyItem = {
  id: TGeneralSurveyQuestionsIds;
  question: string;
  assertion?: string;
  screenType: TScreenType;
  defaultNextPage?:
    | TGeneralSurveyRoutesUrls
    | `${TGeneralSurveyRoutesUrls}?next=${TGeneralSurveyFormRoutesUrls}`;
  options: TGeneralSurveyOption[];
  isStartPage?: boolean;
  showBeforeCurrentPage?: TGeneralSurveyRoutesUrls;
};

export type TGeneralSurvey = {
  id: TSurveyId;
  startPage: TGeneralSurveyFormRoutesUrls;
  pages: Partial<Record<TGeneralSurveyRoutesUrls, TGeneralSurveyItem>>;
};
