import { useState, useEffect } from 'react';
import axios from 'axios';

export default function HomeInfo(){
    const [infoHome, setInfoHome] = useState({
        name: '',
        description: '',
        cover: '',
    })


    const getInfo = async function ( ) {
        const url = 'https://api-frontend-test.brlogic.com/podcast/details.json'
        await axios.get(url)
            .then( response => {
            setInfoHome(response.data)
            })
    }

    useEffect(( ) => {
        getInfo()
    }, [])

    return infoHome
}
