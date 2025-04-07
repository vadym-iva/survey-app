import { GENERAL_SURVEY_FORM_ROUTES, GENERAL_SURVEY_ROUTES } from '../routes';
import {
  GENERAL_SURVEY_QUESTIONS_IDS,
  QUERY_PARAMS,
  SCREEN_TYPES,
  SURVEYS_IDS,
  TGeneralSurvey,
} from './types';

export const GENERAL_SURVEY_CONFIG: TGeneralSurvey = {
  id: SURVEYS_IDS.GENERAL_SURVEY,
  startPage: GENERAL_SURVEY_FORM_ROUTES.GENDER,
  pages: {
    [GENERAL_SURVEY_FORM_ROUTES.GENDER]: {
      id: GENERAL_SURVEY_QUESTIONS_IDS.GENDER,
      question: 'Select your gender:',
      screenType: SCREEN_TYPES.SINGLE_CHOICE,
      defaultNextPage: GENERAL_SURVEY_FORM_ROUTES.RELATIONSHIP_STATUS,
      options: [
        {
          label: 'Female',
        },
        {
          label: 'Male',
        },
      ],
    },
    [GENERAL_SURVEY_FORM_ROUTES.RELATIONSHIP_STATUS]: {
      id: GENERAL_SURVEY_QUESTIONS_IDS.RELATIONSHIP_STATUS,
      question: 'So we can get to know you better, tell us about your relationship status.',
      screenType: SCREEN_TYPES.SINGLE_CHOICE,
      options: [
        {
          label: 'Single',
          nextPage: GENERAL_SURVEY_FORM_ROUTES.SINGLE_PARENT,
        },
        {
          label: 'In a relationship',
          nextPage: GENERAL_SURVEY_FORM_ROUTES.PARENT,
        },
      ],
    },
    [GENERAL_SURVEY_FORM_ROUTES.SINGLE_PARENT]: {
      id: GENERAL_SURVEY_QUESTIONS_IDS.SINGLE_PARENT,
      question: 'Are you a single parent?',
      screenType: SCREEN_TYPES.SINGLE_CHOICE,
      defaultNextPage: GENERAL_SURVEY_FORM_ROUTES.RELATIONSHIP_PROBLEM,
      options: [
        {
          label: 'Yes',
        },
        {
          label: 'No',
        },
      ],
    },
    [GENERAL_SURVEY_FORM_ROUTES.RELATIONSHIP_PROBLEM]: {
      id: GENERAL_SURVEY_QUESTIONS_IDS.RELATIONSHIP_PROBLEM,
      question: `Single {{${GENERAL_SURVEY_QUESTIONS_IDS.GENDER}}} {{${GENERAL_SURVEY_QUESTIONS_IDS.IS_PARENT} | who have children}} need a slightly different approach to improve their relationship. Which statement best describes you?`,
      screenType: SCREEN_TYPES.SINGLE_CHOICE,
      defaultNextPage: GENERAL_SURVEY_FORM_ROUTES.TRAITS_TEND_TO_OVERTHINK,
      options: [
        {
          label: 'I’m very unhappy with how things are going in my relationship',
        },
        {
          label: 'I’m unhappy with parts of my relationship, but some things are working well',
        },
        {
          label: 'I’m generally happy in my relationship',
        },
      ],
    },
    [GENERAL_SURVEY_FORM_ROUTES.TRAITS_TEND_TO_OVERTHINK]: {
      id: GENERAL_SURVEY_QUESTIONS_IDS.TRAITS_TEND_TO_OVERTHINK,
      question: 'Do you tend to overthink?',
      screenType: SCREEN_TYPES.SINGLE_CHOICE,
      options: [
        {
          label: 'Yes',
          nextPage: `${GENERAL_SURVEY_ROUTES.ASTROLOGY}?${QUERY_PARAMS.NEXT}=${GENERAL_SURVEY_FORM_ROUTES.TRAITS_MOST_IMPORTANT}`,
        },
        {
          label: 'No',
          nextPage: `${GENERAL_SURVEY_ROUTES.ASTROLOGY}?${QUERY_PARAMS.NEXT}=${GENERAL_SURVEY_FORM_ROUTES.TRAITS_EMOTIONAL_CONTROL}`,
        },
      ],
    },
    [GENERAL_SURVEY_FORM_ROUTES.TRAITS_MOST_IMPORTANT]: {
      id: GENERAL_SURVEY_QUESTIONS_IDS.TRAITS_MOST_IMPORTANT,
      question: 'What is most important to you?',
      screenType: SCREEN_TYPES.SINGLE_CHOICE,
      defaultNextPage: GENERAL_SURVEY_FORM_ROUTES.RELATIONSHIP_ABOUT_US,
      showBeforeCurrentPage: GENERAL_SURVEY_ROUTES.ASTROLOGY,
      options: [
        {
          label: 'Success',
        },
        {
          label: 'Romance',
        },
        {
          label: 'Stability',
        },
        {
          label: 'Freedom',
        },
      ],
    },
    [GENERAL_SURVEY_FORM_ROUTES.TRAITS_EMOTIONAL_CONTROL]: {
      id: GENERAL_SURVEY_QUESTIONS_IDS.EMOTIONAL_CONTROL,
      question: 'Is emotional control tricky for you?',
      screenType: SCREEN_TYPES.SINGLE_CHOICE,
      defaultNextPage: GENERAL_SURVEY_FORM_ROUTES.RELATIONSHIP_ABOUT_US,
      options: [
        {
          label: 'Yes',
        },
        {
          label: 'Sometimes',
        },
        { label: 'Rarely' },
        { label: 'Not at all' },
      ],
    },
    [GENERAL_SURVEY_FORM_ROUTES.PARENT]: {
      id: GENERAL_SURVEY_QUESTIONS_IDS.PARENT,
      question: 'Are you a parent?',
      screenType: SCREEN_TYPES.SINGLE_CHOICE,
      defaultNextPage: GENERAL_SURVEY_FORM_ROUTES.SINGLE_PROBLEM,
      options: [
        {
          label: 'Yes',
        },
        {
          label: 'No',
        },
      ],
    },
    [GENERAL_SURVEY_FORM_ROUTES.SINGLE_PROBLEM]: {
      id: GENERAL_SURVEY_QUESTIONS_IDS.SINGLE_PROBLEM,
      question: `{{${GENERAL_SURVEY_QUESTIONS_IDS.GENDER}}} {{${GENERAL_SURVEY_QUESTIONS_IDS.IS_PARENT} | who have children}} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?`,
      screenType: SCREEN_TYPES.SINGLE_CHOICE,
      defaultNextPage: GENERAL_SURVEY_FORM_ROUTES.PARTNER_PERSONALITY_TYPE,
      options: [
        {
          label: 'I was unhappy with low things were going in my relationship',
        },
        {
          label: 'I was unhappy with parts of my relationship, but some thing were working',
        },
        { label: 'I was generally happy with my relationship' },
        {
          label: 'I’ve never been in a relationship',
        },
      ],
    },
    [GENERAL_SURVEY_FORM_ROUTES.PARTNER_PERSONALITY_TYPE]: {
      id: GENERAL_SURVEY_QUESTIONS_IDS.PARTNER_PERSONALITY_TYPE,
      question: 'Is your partner an introvert or extrovert?',
      screenType: SCREEN_TYPES.SINGLE_CHOICE,
      defaultNextPage: GENERAL_SURVEY_FORM_ROUTES.PARTNER_GENDER,
      options: [
        {
          label: 'Introvert',
        },
        {
          label: 'Extrovert',
        },
        { label: 'I was generally happy with my relationship' },
        {
          label: 'A bit of both',
        },
      ],
    },
    [GENERAL_SURVEY_FORM_ROUTES.PARTNER_GENDER]: {
      id: GENERAL_SURVEY_QUESTIONS_IDS.PARTNER_GENDER,
      question: 'What is your partner’s gender?',
      screenType: SCREEN_TYPES.SINGLE_CHOICE,
      defaultNextPage: GENERAL_SURVEY_FORM_ROUTES.PARTNER_PRIORITY,
      options: [
        {
          label: 'Male',
        },
        {
          label: 'Female',
        },
      ],
    },
    [GENERAL_SURVEY_FORM_ROUTES.PARTNER_PRIORITY]: {
      id: GENERAL_SURVEY_QUESTIONS_IDS.PARTNER_PRIORITY,
      question: 'Do you agree with the statement below?',
      assertion: '“My partner and I make sex a priority in our relationship”',
      screenType: SCREEN_TYPES.SINGLE_CHOICE,
      defaultNextPage: GENERAL_SURVEY_FORM_ROUTES.RELATIONSHIP_GOALS,
      options: [
        {
          label: 'Strongly agree',
        },
        {
          label: 'Agree',
        },
        {
          label: 'Neutral',
        },
        {
          label: 'Disagree',
        },
        {
          label: 'Strongly disagree',
        },
      ],
    },
    [GENERAL_SURVEY_FORM_ROUTES.RELATIONSHIP_GOALS]: {
      id: GENERAL_SURVEY_QUESTIONS_IDS.RELATIONSHIP_GOALS,
      question: 'When you think about your relationship goals, you feel...?',
      screenType: SCREEN_TYPES.SINGLE_CHOICE,
      defaultNextPage: GENERAL_SURVEY_FORM_ROUTES.RELATIONSHIP_ABOUT_US,
      options: [
        {
          label: 'Optimistic! They are totally doable, with some guidance.',
        },
        {
          label: 'Cautious. I’ve struggled before, but I’m hopeful.',
        },
        {
          label: 'I’m feeling a little anxious, honestly.',
        },
      ],
    },
    [GENERAL_SURVEY_FORM_ROUTES.RELATIONSHIP_ABOUT_US]: {
      id: GENERAL_SURVEY_QUESTIONS_IDS.RELATIONSHIP_ABOUT_US,
      question: 'Where did you hear about us?',
      screenType: SCREEN_TYPES.SINGLE_CHOICE,
      defaultNextPage: GENERAL_SURVEY_ROUTES.RESULTS,
      options: [
        {
          label: 'Poster or Billboard',
        },
        {
          label: 'Friend or Family',
        },
        {
          label: 'Instagram',
        },
        {
          label: 'Direct Mail or Package Insert',
        },
        {
          label: 'Online TV or Streaming TV',
        },
        {
          label: 'TV',
        },
        {
          label: 'Radio',
        },
        {
          label: 'Search Engine (Google, Bing, etc.)',
        },
        {
          label: 'Newspaper or Magazine',
        },
        {
          label: 'Facebook',
        },
        {
          label: 'Blog Post or Website Review',
        },
        {
          label: 'Podcast',
        },
        {
          label: 'Influencer',
        },
        {
          label: 'Youtube',
        },
        {
          label: 'Pinterest',
        },
        {
          label: 'Other',
        },
      ],
    },
  },
} as const;
