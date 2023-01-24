import React, { useState } from 'react';

import clsx from 'clsx';

import { AccordionItem } from '../../components';

import styles from './styles.module.scss';

const questionsAnswers = [
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

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
        const showDescription = index === activeIndex ? "show-description" : "";
        const ariaExpanded = index === activeIndex ? "true" : "false";
        return (
          <AccordionItem
            showDescription={showDescription}
            ariaExpanded={ariaExpanded}
            item={item}
            index={index}
            onClick={() => {
                setActiveIndex(index === activeIndex ? -1 : index);
            }}
          />
        );
    });

    return (
        <section className={styles.faq}>
            <div className="container">
                <div className={clsx(styles.title, 'section-title')}>
                    <h2 className="text-center">FAQ</h2>
                </div>
                {renderedQuestionsAnswers}
            </div>
        </section>
    );
}
