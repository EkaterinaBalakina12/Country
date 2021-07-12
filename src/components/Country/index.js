import React from 'react';
import './index.css';

const Country = (props) => {
    
    let info = props.value.value
 
    return (
        <div className="fon">   
            <p className="info">
                <b>Столица:</b> {info.capital}
            </p>
            <p className="info">
                <b>Регион:</b> {info.region}
            </p>
            <p className="info">
                <b>Субрегион:</b> {info.subregion}
            </p>
            <p className="info">
                <b>Площадь страны:</b> {info.area} км²
            </p>
            <p className="info">
                <b>Население страны:</b> {info.population} человек
            </p>
            <p className="info">
                <b>Валюта страны:</b> {info.currencies[0].name} 
            </p>
            <p className="info">
                <b>Официальный язык страны:</b> {info.languages[0].name}
            </p>
            <p className="info">
                <b>Флаг страны:</b> 
            </p>
            <img alt='flag' src={info.flag}/>
        </div>
    );
}

export default Country;