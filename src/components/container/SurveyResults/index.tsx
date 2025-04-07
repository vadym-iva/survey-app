'use client';

import { selectSurveyAnswers } from '@/store/selectors';
import { useSelector } from 'react-redux';

import styles from './SurveyResults.module.scss';
import { getSurveyConfig } from '@/config/surveys/utils/getSurveyConfig';
import { formatDynamicText } from '@/utils/formatDynamicText';
import { ISurveyResultsProps } from './types';

export default function SurveyResults({ surveyId }: ISurveyResultsProps) {
  const surveyConfig = getSurveyConfig(surveyId);
  const surveyAnswers = useSelector(selectSurveyAnswers(surveyId));

  if (!Object.keys(surveyAnswers).length) {
    return;
  }

  return (
    <div className={styles.container}>
      {Object.entries(surveyAnswers).map(([id, answer]) => {
        const questionPage = Object.values(surveyConfig.pages).find(page => page.id === id);

        return (
          <div key={id}>
            <p className={styles.question}>
              {formatDynamicText({
                template: questionPage?.question,
                dynamicValues: { ...surveyAnswers },
                capitalizeFirstLetter: true,
              })}
            </p>
            <p>{answer}</p>
          </div>
        );
      })}
    </div>
  );
}
