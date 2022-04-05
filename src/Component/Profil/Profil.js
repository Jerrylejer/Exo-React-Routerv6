import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// recuperation des datas à partir d'une API

function Profil() {
    const [data, setData] = useState({});

    const params = useParams();
    // console.log(params);

    useEffect(() => {
        let payload = {
            token: process.env.REACT_APP_APIKEY,
            data: {
                name: 'nameFirst',
                email: 'internetEmail',
                phone: 'phoneHome',
                _repeat: 10,
            },
        };
        axios({
            method: 'post',
            url: 'https://app.fakejson.com/q',
            data: payload,
        })
            .then((resp) => {
                console.log(resp.data);
                setData(resp.data[params.id]);
            })
            .catch(() => {
                console.log("C'est pas bon du tout !");
            });
    }, [params.id]);

    const { name, email, phone } = data;

    return (
        <ul className='list-group list-group-flush rounded'>
            <li className='list-group-item'>
                <strong>Nom:{name}</strong>
            </li>
            <li className='list-group-item'>
                <strong>Email:{email}</strong>
            </li>
            <li className='list-group-item'>
                <strong>Téléphone:{phone}</strong>
            </li>
        </ul>
    );
}

export default Profil;
