import clsx from 'clsx';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { type ReactNode, useRef, useState } from 'react';

import styles from './Accordion.module.scss';

type AccordionProps = {
  className?: string;
  title: string;
  children: ReactNode;
};

export const Accordion = ({ className, title, children }: AccordionProps) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const renderTrigger = isShow ? (
    <MinusIcon className={styles.icon} />
  ) : (
    <PlusIcon className={styles.icon} />
  );

  return (
    <div className={clsx(styles.accordion, className)}>
      <button className={styles.button} onClick={() => setIsShow((prev) => !prev)}>
        <h4 className={styles.title}>{title}</h4>

        {renderTrigger}
      </button>

      <div
        className={clsx(styles['wrapper-content'], { [styles.opened]: isShow })}
        style={{ height: isShow ? contentRef?.current?.scrollHeight : 0 }}
      >
        <div ref={contentRef} className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};
