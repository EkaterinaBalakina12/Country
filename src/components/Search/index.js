import React, {useState} from 'react';
import {Button, Form, Container, Row, Col} from 'react-bootstrap';
import InfoCountry from '../InfoCountry';
import '../Search/Search.css';

function Search() {

        const [query,setQuery] = useState('')
        const [country,setCountry] = useState([])

        const send = (query) => {

            let url = `https://restcountries.eu/rest/v2/name/${query}`;
            // let urll = `https://restcountries.eu/#api-endpoints-name`;       
                if (query !== '') {
                    fetch(url)
                    .then(response => response.json())
                    .then(result => {
                        if (result.status !== 404) {
                                setCountry(result)
                                console.log(result)
                        } else {
                            alert('Ничего не найдено!')
                        }    
                    })
                    .catch(error => console.log("error", error));
                } else {
                    alert('Поле ввода пустое!')
                }
        }

        const getCountry = ()=>{    
            return country.map((item)=>{
                return (<InfoCountry value={item} />)
            })
        }

    return (
        <div >
            <Container>
                <Row>
                    <Col className="search">
                        <Form.Control className="input" type="text" onChange={(e) => { setQuery(e.target.value) }} placeholder="Enter country" /> 
                        <Button type="submit" onClick={()=>{send(query)}}>Search</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {getCountry()}   
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Search;