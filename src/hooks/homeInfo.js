import { useState, useEffect } from 'react';
import axios from 'axios';


// Para pegar as informações da página inicial

export default function HomeInfo(){

    //Criado o state inicial 

    const [infoHome, setInfoHome] = useState({
        name: '',
        description: '',
        cover: '',
    })

    
    // Fazendo requisição

    const getInfo = async function ( ) {
        const url = 'https://api-frontend-test.brlogic.com/podcast/details.json'
        await axios.get(url)
            .then( response => {
            setInfoHome(response.data)
            })
    }


    // Fazer a requisição ser executada somente uma vez por renderização

    useEffect(( ) => {
        getInfo()
    }, [])

    return infoHome
}
