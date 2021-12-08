import React from 'react';
import './TextQuestion.scss';
import classNames from 'classnames';

export default function RatingQuestion({ question, onAnswer }) {
    const { label, required, questionId } = question;
    const className = classNames('text-question', 'flex-column');

    const onChange = (e) => {
        onAnswer({
            questionId: questionId,
            answer: e.target.value,
        });
    };

    return (
        <div className={className}>
            <label htmlFor="question">{label}</label>
            <input
                className="text-question__input"
                type="text"
                name="question"
                id={questionId}
                required={required}
                onChange={onChange}
            />
        </div>
    );
}
