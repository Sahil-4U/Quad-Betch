import React, { useState} from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import {useNavigate } from 'react-router-dom';

function Booking({movie}) {
    const navigate=useNavigate();
    // console.log(movie);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const storeData=()=>{
        const obj={
            ...formData,
            movieName:movie[0].show?.name,
            movieDetails:movie[0].show?.summary
        }
        localStorage.setItem('userDetails',JSON.stringify(obj));
        alert('data is saved');
        navigate('/')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        storeData();
    };

    return (
        <Container className='mt-5'>
            <Form onSubmit={handleSubmit} >

                <Row className="mb-3">

                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData?.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData?.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </Form.Group>
                </Row>
                {
                    movie && movie.map((data) => {
                        return (
                            <>
                                <Form.Group controlId="movieName">
                                    <Form.Label>Movie Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="movieName"
                                        value={data.show.name}
                                        
                                        disabled
                                    />
                                </Form.Group>

                                <Form.Group controlId="movieDetails">
                                    <Form.Label>Movie Details</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="movieDetails"
                                        value={"summary : "+" = "+data.show.summary}
                                       
                                        disabled
                                    />
                                </Form.Group>
                            </>
                        )
                    })
                }


                <Container className='text-center m-4'>
                    <Button variant="outline-primary" type="submit" size='lg'>
                        Submit
                    </Button>
                </Container>
            </Form>
        </Container>
    )
}

export default Booking