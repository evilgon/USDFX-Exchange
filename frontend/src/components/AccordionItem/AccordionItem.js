import React from 'react';

import './styles.scss';

export const AccordionItem = ({
    showDescription,
    item,
    onClick,
  }) => (
    <div className="faq__question" key={item.question}>
        <div className="faq__question-header">
            <button
                className={`faq__question-button ${showDescription}`}
                onClick={onClick}
            >
                {item.question}
            </button>
        </div>
        <div
          className={`faq__desc ${showDescription}`}
        >
            <p>
                {item.answer}
            </p>
        </div>
    </div>
);