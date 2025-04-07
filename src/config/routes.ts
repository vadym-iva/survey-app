export const GENERAL_SURVEY_FORM_ROUTES = {
  GENDER: `gender`,
  RELATIONSHIP_STATUS: 'relationship-status',
  SINGLE_PARENT: 'single-parent',
  PARENT: 'parent',
  RELATIONSHIP_PROBLEM: 'relationship-problem',
  SINGLE_PROBLEM: 'single-problem',
  TRAITS_TEND_TO_OVERTHINK: 'traits-tend-to-overthink',
  PARTNER_PERSONALITY_TYPE: 'partner-personality-type',
  PARTNER_GENDER: 'partner-gender',
  PARTNER_PRIORITY: 'partner-priority',
  RELATIONSHIP_GOALS: 'relationship-goals',
  TRAITS_EMOTIONAL_CONTROL: 'traits-emotional-control',
  TRAITS_MOST_IMPORTANT: 'traits-most-important',
  RELATIONSHIP_ABOUT_US: 'relationship-about-us',
} as const;

export const GENERAL_SURVEY_ROUTES = {
  RESULTS: 'results',
  ASTROLOGY: 'astrology',
  ...GENERAL_SURVEY_FORM_ROUTES,
} as const;

export const ROUTES = {
  HOME: '/',
  GENERAL_SURVEY: {
    BASE: '/general-survey',
    ...GENERAL_SURVEY_ROUTES,
  },
} as const;

export const PURPLE_LAYOUT_ROUTES = [GENERAL_SURVEY_ROUTES.ASTROLOGY];
