import { Accordion } from '@/shared/ui/Accordion';

import { PROFILE_ACCORDION_DATA } from '../model/dataPrivacyData';

import styles from './DataPrivacyPage.module.scss';

const DataPrivacyPage = () => {
  return (
    <section className={styles['data-privacy']}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Data Privacy</h2>

        <ul className={styles.list}>
          {PROFILE_ACCORDION_DATA.map((accordion) => (
            <Accordion key={accordion.id} title={accordion.title} className={styles.accordion}>
              {accordion.content}
            </Accordion>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DataPrivacyPage;
