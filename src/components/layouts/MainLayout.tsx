'use client';

import { PURPLE_LAYOUT_ROUTES } from '@/config/routes';
import Header from './Header';
import styles from './MainLayout.module.scss';
import { usePathname } from 'next/navigation';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isPurpleLayout = PURPLE_LAYOUT_ROUTES.some(route => pathname.includes(route));

  return (
    <div className={`${styles.container} ${isPurpleLayout ? styles.purpleBackground : ''}`}>
      <div className={styles.content}>
        <Header isWhiteIcons={isPurpleLayout} />
        <section>{children}</section>
      </div>
    </div>
  );
}
