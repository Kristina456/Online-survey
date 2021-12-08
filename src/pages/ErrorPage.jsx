import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Button } from '../components/button';
import { Card } from '../components/card';
import './ErrorPage.scss';

export default function ErrorPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const buttonText = 'Return home';

    const showErrors = () => {
        return location.state.errors.map((e, index) => {
            return (
                <div key={index}>
                    {e.title && <h1>{e.title}</h1>}
                    <div>
                        <div>
                            {e.source && <strong>{e.source.pointer}</strong>}
                        </div>
                        <p>{e.detail}</p>
                    </div>
                </div>
            );
        });
    };

    const returnHome = () => {
        navigate('/');
    };

    const showUnexpectedError = () => {
        return (
            <div>
                <h1>Unexpected error happend</h1>
            </div>
        );
    };

    return (
        <Card>
            <div className="error-page">
                <div>{location.state && showErrors()}</div>
                <div>{!location.state && showUnexpectedError()}</div>
                <div className="error-page__btn">
                    <Button onClick={returnHome} value={buttonText} />
                </div>
            </div>
        </Card>
    );
}
