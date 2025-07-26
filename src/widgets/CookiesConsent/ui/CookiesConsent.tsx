import { CookieIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { getJSONFromLS, setToLS } from '@/shared/helpers/local-storage';
import { createRootPortal } from '@/shared/libs';
import { Button } from '@/shared/ui/Button';

import { COOKIES_CONSENT_LS_KEY, COOKIES_CONSENT_PORTAL_ID } from '../model/constants';

import styles from './CookiesConsent.module.scss';

export const CookiesConsent = () => {
  const [isAgreed, setIsAgreed] = useState<boolean>(getJSONFromLS(COOKIES_CONSENT_LS_KEY));

  const portalRef = useRef(
    document.getElementById(COOKIES_CONSENT_PORTAL_ID) ||
      createRootPortal('div', { id: COOKIES_CONSENT_PORTAL_ID }),
  );

  useEffect(() => {
    if (!isAgreed) {
      const portal = portalRef.current;
      document.querySelector('body')?.appendChild(portal);

      return () => {
        portal.remove();
      };
    }
  }, [isAgreed]);

  const handleClick = () => {
    setIsAgreed(true);
    setToLS(COOKIES_CONSENT_LS_KEY, true);
  };

  return createPortal(
    <div className={styles.wrapper}>
      <div className={styles['cookie-wrapper']}>
        <div className={styles.info}>
          <CookieIcon className={styles.icon} />

          <p className={styles.text}>
            This site uses cookies to ensure you get the best user experience.
          </p>
        </div>

        <Button size="sm" variant="outline" onClick={handleClick}>
          Accept
        </Button>
      </div>
    </div>,

    portalRef.current,
  );
};
