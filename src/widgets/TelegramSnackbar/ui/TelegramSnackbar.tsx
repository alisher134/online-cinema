import { SendIcon, XIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { createRootPortal } from '@/shared/libs';
import { IconButton } from '@/shared/ui/IconButton';

import { TELEGRAM_SNACKBAR_ROOT_ID } from '../model/constants';
import { getTelegramSnackbarKey, setTelegramSnackBar } from '../model/storage';

import styles from './TelegramSnackbar.module.scss';

export const TelegramSnackbar = () => {
  const [isVisible, setIsVisible] = useState<boolean>(getTelegramSnackbarKey);

  const handleClick = () => {
    setIsVisible(false);
    setTelegramSnackBar(false);
  };

  const portalRef = useRef(
    document.getElementById(TELEGRAM_SNACKBAR_ROOT_ID) ||
      createRootPortal('div', { id: TELEGRAM_SNACKBAR_ROOT_ID }),
  );

  useEffect(() => {
    if (!isVisible) return;

    const portal = portalRef.current;
    document.querySelector('body')?.appendChild(portal);

    return () => {
      portal.remove();
    };
  }, [isVisible]);

  const link = 'https://t.me/alisherr134';

  return createPortal(
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.info}>
          <SendIcon size={20} />
          <p className={styles.message}>Telegram канал</p>
        </div>
        <IconButton
          icon={<XIcon className={styles.icon} />}
          onClick={handleClick}
          className={styles.button}
        />
      </div>
      <div className={styles.footer}>
        <a href={link} target="_blank" className={styles.link}>
          {link}
        </a>
      </div>
    </div>,
    portalRef.current,
  );
};
