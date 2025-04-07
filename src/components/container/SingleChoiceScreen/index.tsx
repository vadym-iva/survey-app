'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

import Button from '@/components/common/Button';
import { saveAnswer } from '@/store/generalSurvey/slice';
import { selectSurveyAnswers } from '@/store/selectors';
import { TGeneralSurveyOption } from '@/config/surveys/types';
import { formatDynamicText } from '@/utils/formatDynamicText';
import { ISingleChoiceScreenProps } from './types';

import styles from './SingleChoiceScreen.module.scss';

export default function SingleChoiceScreen({ config, surveyId }: ISingleChoiceScreenProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const surveyAnswers = useSelector(selectSurveyAnswers(surveyId));

  const handleOptionClick = (option: TGeneralSurveyOption) => {
    return () => {
      dispatch(
        saveAnswer({
          id: config.id,
          answer: option.label,
        })
      );

      router.push(option.nextPage || config.defaultNextPage || '');
    };
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {formatDynamicText({
          template: config.question,
          dynamicValues: { ...surveyAnswers },
          capitalizeFirstLetter: true,
        })}
      </h1>
      {config.assertion ? <p className={styles.assertion}>{config.assertion}</p> : null}
      {config.options.map((option: TGeneralSurveyOption) => (
        <div key={option.label} className={styles.option}>
          <Button
            label={option.label}
            isActive={surveyAnswers[config.id] === option.label}
            onClick={handleOptionClick(option)}
          />
        </div>
      ))}
    </div>
  );
}
