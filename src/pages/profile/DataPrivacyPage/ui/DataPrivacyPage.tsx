import { Accordion } from '@/shared/ui/Accordion';

import styles from './DataPrivacyPage.module.scss';

export const DataPrivacyPage = () => {
  const PROFILE_ACCORDION_DATA = [
    {
      id: 1,
      title: 'What is personal data at Online Cinema',
      content:
        'In addition to this Privacy Policy, we provide data and privacy information embedded in our products and certain features that ask to use your personal information. This product-specific information is accompanied by our Data & Privacy Icon.',
    },
    {
      id: 2,
      title: 'What is personal data at Online Cinema',
      content:
        'In addition to this Privacy Policy, we provide data and privacy information embedded in our products and certain features that ask to use your personal information. This product-specific information is accompanied by our Data & Privacy Icon.',
    },
    {
      id: 3,
      title: 'What is personal data at Online Cinema',
      content:
        'In addition to this Privacy Policy, we provide data and privacy information embedded in our products and certain features that ask to use your personal information. This product-specific information is accompanied by our Data & Privacy Icon.',
    },
    {
      id: 4,
      title: 'What is personal data at Online Cinema',
      content:
        'In addition to this Privacy Policy, we provide data and privacy information embedded in our products and certain features that ask to use your personal information. This product-specific information is accompanied by our Data & Privacy Icon.',
    },
    {
      id: 5,
      title: 'What is personal data at Online Cinema',
      content:
        'In addition to this Privacy Policy, we provide data and privacy information embedded in our products and certain features that ask to use your personal information. This product-specific information is accompanied by our Data & Privacy Icon.',
    },
    {
      id: 6,
      title: 'What is personal data at Online Cinema',
      content:
        'In addition to this Privacy Policy, we provide data and privacy information embedded in our products and certain features that ask to use your personal information. This product-specific information is accompanied by our Data & Privacy Icon.',
    },
    {
      id: 7,
      title: 'What is personal data at Online Cinema',
      content:
        'In addition to this Privacy Policy, we provide data and privacy information embedded in our products and certain features that ask to use your personal information. This product-specific information is accompanied by our Data & Privacy Icon.',
    },
  ];

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
