import { Accordion } from '@/shared/ui/Accordion';

import { PROFILE_ACCORDION_DATA } from '../model/data';

import styles from './ProfilePrivacyAccordionList.module.scss';

export const ProfilePrivacyAccordionList = () => {
  return (
    <ul className={styles.list}>
      {PROFILE_ACCORDION_DATA.map((accordion) => (
        <Accordion key={accordion.id} title={accordion.title} className={styles.accordion}>
          {accordion.content}
        </Accordion>
      ))}
    </ul>
  );
};
