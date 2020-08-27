import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './Jumbotron.css';

const jumbotron = () => {
    return (
        <div>
            <Jumbotron className="jumbo">
                <h1>Hello, Welcome to PUDEMY!</h1>
                <p>
                    <b>The world's largest selection of courses</b><br />
                        Choose from 150,000 online video courses with new additions published every month.

                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </div>
    );
};

export default jumbotron;