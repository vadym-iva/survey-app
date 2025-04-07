import { IButtonProps } from './types';

import styles from './Button.module.scss';

export default function Button({ label, isActive, onClick }: IButtonProps) {
  return (
    <button className={`${styles.button} ${isActive ? styles.active : ''}`} onClick={onClick}>
      {label}
    </button>
  );
}
