import { redirect } from 'next/navigation';

import SingleChoiceScreen from '@/components/container/SingleChoiceScreen';
import { getSurveyConfig } from '@/config/surveys/utils/getSurveyConfig';
import { SCREEN_TYPES, SURVEYS_IDS, TGeneralSurveyItem } from '@/config/surveys/types';
import { GENERAL_SURVEY_ROUTES, ROUTES } from '@/config/routes';
import { TGeneralSurveyRoutesUrls } from '@/config/routes.types';
import SurveyResults from '@/components/container/SurveyResults';
import AstrologyWithAI from '@/components/container/AstrologyWithAI';

export async function generateStaticParams() {
  return Object.values(GENERAL_SURVEY_ROUTES).map((page: TGeneralSurveyRoutesUrls) => ({
    page,
  }));
}

export default async function QuestionPage({
  params,
}: {
  params: Promise<{
    page: TGeneralSurveyRoutesUrls;
  }>;
}) {
  const { page } = await params;

  const config = getSurveyConfig(SURVEYS_IDS.GENERAL_SURVEY);
  const pageConfig = config.pages[page];

  if (page === GENERAL_SURVEY_ROUTES.RESULTS) {
    return <SurveyResults surveyId={SURVEYS_IDS.GENERAL_SURVEY} />;
  }

  if (page === GENERAL_SURVEY_ROUTES.ASTROLOGY) {
    return <AstrologyWithAI />;
  }

  if (!pageConfig) {
    redirect(`${ROUTES.GENERAL_SURVEY.BASE}${config.startPage}`);
  }

  if (pageConfig.screenType === SCREEN_TYPES.SINGLE_CHOICE) {
    return <SingleChoiceScreen config={pageConfig as TGeneralSurveyItem} surveyId={config.id} />;
  }
}
