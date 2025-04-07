import type { NextConfig } from 'next';

import { GENERAL_SURVEY_CONFIG } from '@/config/surveys/generalSurveyConfig';
import { ROUTES } from '@/config/routes';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: ROUTES.HOME,
        destination: `${ROUTES.GENERAL_SURVEY.BASE}/${GENERAL_SURVEY_CONFIG.startPage}`,
        permanent: false,
      },
      {
        source: ROUTES.GENERAL_SURVEY.BASE,
        destination: `${ROUTES.GENERAL_SURVEY.BASE}/${GENERAL_SURVEY_CONFIG.startPage}`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
