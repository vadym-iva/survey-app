'use client';

import Button from '@/components/common/Button';

import styles from './AstrologyWithAI.module.scss';
import { useRouter } from 'next/navigation';
import { QUERY_PARAMS } from '@/config/surveys/types';

export default function AstrologyWithAI() {
  const router = useRouter();

  const handleButtonClick = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const nextPageLink = searchParams.get(QUERY_PARAMS.NEXT);

    router.push(nextPageLink || '');
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>So how does it work?</p>
      <p className={styles.description}>
        We analyze hundreds of data points to create your unique astrological blueprint. This is
        combined with AI to tailor-make your astrological insights, based on your answers. We’re
        going to change your relationship with astrology.
      </p>
      <Button label="Next" onClick={handleButtonClick} />
    </div>
  );
}
