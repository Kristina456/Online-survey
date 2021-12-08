import { v4 as uuidv4 } from 'uuid';

const getSurvay = (errorCode = 0) => {
    let queryParams = '';
    if (errorCode === 500) {
        queryParams = '?error=' + errorCode;
    }
    return fetch(`/api/v1/survey${queryParams}`);
};

const sendSurvayAnswers = (survay, answers, errorCode = 0) => {
    let queryParams = '';
    if (errorCode === 422) {
        queryParams = '?error=' + errorCode;
    }
    return fetch(`/api/v1/survey/${survay.data.id}/answers${queryParams}`, {
        method: 'POST',
        handlers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mapToSurvayAnswersRequestBody(survay, answers)),
    });
};

const mapToSurvayAnswersRequestBody = (survay, answers) => {
    return {
        data: {
            type: 'surveyAnswers',
            id: uuidv4(),
            attributes: {
                answers: answers,
            },
            relationships: {
                survay: {
                    data: {
                        type: survay.data.type,
                        id: survay.data.id,
                    },
                },
            },
        },
    };
};

export { getSurvay, sendSurvayAnswers };
