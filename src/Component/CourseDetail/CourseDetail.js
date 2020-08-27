import React from 'react';
import { CardDeck, Card, Button, Badge } from 'react-bootstrap';
import './CourseDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CourseDetail = (props) => {
    // console.log(props);
    const { name, image, desc, price } = props.courseDetail;

    return (

        <div className="course-details">

            <div className="img">
                <img src={image} alt="" />
            </div>

            <div className="description">
                <h4><b>{name}</b></h4>
                <h5><small>{desc}</small></h5>

                <h5 className="price">
                    <Badge pill variant="warning">Price</Badge>
                    <b> ${price}</b>
                </h5>

                <Button className="buy" variant="success"
                    onClick={() => props.handleAddCourse(props.courseDetail)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> Buy Now</Button>
            </div>



        </div>
        /* <CardDeck>
            <Card className="course-holder col-md-4 ">

                <Card.Img variant="top" src={image} />

                <Card.Body>
                    <Card.Title><h3><Badge variant="secondary">{name}</Badge></h3></Card.Title>
                    <Card.Text>{desc}</Card.Text>
                </Card.Body>


                <Card.Footer className="footer">
                    <h5><b>${price}</b></h5>

                    <Button className="buy" variant="success">
                        <FontAwesomeIcon icon={faShoppingCart} /> Buy Now</Button>

                </Card.Footer>

            </Card>

        </CardDeck> */


    );
};

export default CourseDetail;