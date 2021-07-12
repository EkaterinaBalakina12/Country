import React, {useState} from 'react';
import Country from '../Country';
import {Container, Row, Col} from 'react-bootstrap';
import './index.css';

const InfoCountry = (props) => {
    
    const [status,setStatus] = useState(false)

    const info = (props)=>{
        
        return (
            setStatus((e) => {
                if (status) {
                    setStatus(false)
                } else {
                    setStatus(true)
                } 
            })
        )
    }
     
    return (
        <>
            <Container>
                <Row  style={{display:'flex'}}>
                    <Col className="col-1">
                        <p className="nameCountry" onClick={()=>{info(props)}}>{props.value.name}</p>
                    </Col>
                    <Col className="col-2"> 
                        {(status) && (<Country value={props}/>)}
                    </Col> 
                </Row>
            </Container>
        </>
    );
}

export default InfoCountry;