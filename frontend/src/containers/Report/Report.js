import React, { useState } from 'react';

import clsx from 'clsx';

import { AccordionItem } from '../../components';

import styles from './styles.module.scss';

const reports = [
    {
      question: "How many team members can I invite?",
      answer:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      question: "What is the maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      question: "How do I reset my password?",
      answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
    },
    {
      question: "Can I cancel my subscription?",
      answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
    },
    {
      question: "Do you provide additional support?",
      answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
    },
];

export const Report = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const renderedReports = reports.map((item, index) => {
        const showDescription = index === activeIndex ? "show-description" : "";
        const ariaExpanded = index === activeIndex ? "true" : "false";
        return (
          <AccordionItem
            key={index}
            showDescription={showDescription}
            ariaExpanded={ariaExpanded}
            item={item}
            onClick={() => {
              setActiveIndex(index === activeIndex ? -1 : index);
            }}
          />
        );
    });

    return (
        <section className={styles.report}>
            <div className="container">
                <div className={clsx(styles.title, 'section-title')}>
                    <h2 className="text-center">Audited Report</h2>
                </div>
                {renderedReports}
            </div>
        </section>
    );
}
