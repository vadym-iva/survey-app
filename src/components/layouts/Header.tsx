'use client';

import Image from 'next/image';
import styles from './Header.module.scss';
import { IHeaderProps } from './types';

export default function Header({ isWhiteIcons }: IHeaderProps) {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <header className={styles.header}>
      <Image
        src={`/icons/${isWhiteIcons ? 'backArrow' : 'darkBackArrow'}.svg`}
        className={styles.backIcon}
        width={24}
        height={24}
        alt="Back Arrow"
        onClick={handleBackClick}
      />
      <Image
        src={`/icons/${isWhiteIcons ? 'logo' : 'darkLogo'}.svg`}
        className={styles.logo}
        width={24}
        height={24}
        alt="Logo"
      />
    </header>
  );
}
