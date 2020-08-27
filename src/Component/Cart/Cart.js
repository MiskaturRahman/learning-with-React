import React from 'react';
import { Badge, Button, Card } from 'react-bootstrap';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((total, prd) => total + prd.price, 0)

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    const handleClick = (click) => {
        alert("Redirecting to payment gateway...")
    }

    return (
        <div className="cart">
            <Card style={{ width: '20rem', height: '20rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body style={{ border: '2px solid grey', borderRadius: '5px', boxShadow: '5px 10px 30px rgb(32, 31, 31)' }}>
                    <Card.Title style={{ textAlign: 'center' }}> <h1><Badge variant="primary">
                        Your Cart</Badge></h1></Card.Title>

                    <Card.Text>
                        <table className="table">
                            <tr>
                                <th>Course added:</th>
                                <th>{cart.length}</th>
                            </tr>

                            <tr>
                                <td>Total:</td>
                                <td>{formatNumber(total)}</td>
                            </tr>
                        </table>
                    </Card.Text>

                    <Button onClick={handleClick} style={{ marginTop: '3rem' }} variant="danger" size="lg">
                        Proceed to checkout...
                </Button>
                </Card.Body>
            </Card>





        </div>
    );
};

export default Cart;