import { rest } from 'msw';
import survay500 from './responses/survey-500.json';
import answers200 from './responses/survey-200.json';
import answers422 from './responses/answers-422.json';
import answers201 from './responses/answers-201.json';

export const handlers = [
    rest.get('/api/v1/survey', (req, res, ctx) => {
        const error = req.url.searchParams.get('error');
        if (error && error === '500') {
            return res(ctx.status(500), ctx.json(survay500));
        }
        return res(ctx.status(200), ctx.json(answers200));
    }),

    rest.post('/api/v1/survey/:id/answers', (req, res, ctx) => {
        const error = req.url.searchParams.get('error');
        if (error && error === '422') {
            return res(ctx.status(422), ctx.json(answers422));
        }
        return res(ctx.status(201), ctx.json(answers201));
    }),
];
