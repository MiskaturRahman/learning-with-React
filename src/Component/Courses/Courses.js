import React from 'react';
import fakeData from '../FakeData/fakeData';
import { useState } from 'react';
import './Courses.css';
import CourseDetail from '../CourseDetail/CourseDetail';
import { Badge } from 'react-bootstrap';
import Cart from '../Cart/Cart';
const Courses = () => {

    const courses = fakeData.slice(0, 12);
    const [showCourse, setShowCourse] = useState(courses);
    const [cart, setCart] = useState([]);
    // console.log(courses);

    const handleAddCourse = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }
    return (

        <div className="class-container">

            <div className="course-container">

                <h1><Badge variant="danger">
                    Our Products</Badge></h1>

                <h4><Badge pill variant="info">
                    Available Courses:  {showCourse.length}
                </Badge></h4>

                {
                    showCourse.map(product =>
                        <CourseDetail
                            handleAddCourse={handleAddCourse}
                            courseDetail={product}
                        >{product})
                        </CourseDetail>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>

    );
};

export default Courses;