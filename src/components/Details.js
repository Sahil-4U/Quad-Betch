import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';


function Details() {
    const url = "https://api.tvmaze.com/search/shows?q=all";
    const [data, setData] = useState([]);

    const fetchInfo = () => {
        return axios.get(url).then((response) => {
            console.log(response.data);
            setData(response.data)
        });
    }

    useEffect(() => {
        fetchInfo();
    }, [])

    return (
        <div>
            <Container className='text-center m-3' >
                <h1 ><Badge bg="info" className='shadow'>Movies List</Badge></h1>
            </Container>
            <Container>
                <Row>

                    {
                        data && data.map((movies) => {
                            return (

                                <Col key={movies.show.id}>
                                    <Card style={{ width: '18rem' }}  className='m-3 shadow'>
                                        <Card.Img variant="top" src={movies.show.image.original} style={{height:'18rem'}}/>
                                        <Card.Body>
                                            <Card.Title >{movies.show.name}</Card.Title>
                                            <Card.Text>
                                            <Badge bg="warning">Status :</Badge>{' '}{movies.show.status}
                                            </Card.Text>
                                            <Button variant="outline-danger" size='lg' >Buy Ticket</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Details