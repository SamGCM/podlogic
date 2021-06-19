import axios from 'axios';
import { useState, useEffect } from 'react';


// Hooks para pegar informações de todos os episódios e importalos para views


export function Episode1Info (){

    //Criado o state inicial 

    const [infoEpisodes, setInfoEpisodes] = useState({
        id: '',
        name: '',
        description: '',
        duration: '',
        participants: '',
        episodeNumber: '',
        cover: '',
        audio: ''
        })

    const getInfo = async function ( ) {
    const url = 'https://api-frontend-test.brlogic.com/podcast/episodes/365/details.json'

    // Fazendo requisição
    await axios.get(url)
        .then( response => {
            setInfoEpisodes(response.data)
        })
    }

    // Fazer a requisição ser executada somente uma vez por renderização
    useEffect(( ) => {
    getInfo()
    }, [])

    return infoEpisodes
    
}




export function Episode2Info (){
    const [infoEpisodes, setInfoEpisodes] = useState({
        id: '',
        name: '',
        description: '',
        duration: '',
        participants: '',
        episodeNumber: '',
        cover: '',
        audio: ''
        })

    const getInfo = async function ( ) {
    const url = "https://api-frontend-test.brlogic.com/podcast/episodes/429/details.json"
    await axios.get(url)
        .then( response => {
            setInfoEpisodes(response.data)
        })
    }

    useEffect(( ) => {
    getInfo()
    }, [])

    return infoEpisodes
    
}





export function Episode3Info (){
    const [infoEpisodes, setInfoEpisodes] = useState({
        id: '',
        name: '',
        description: '',
        duration: '',
        participants: '',
        episodeNumber: '',
        cover: '',
        audio: ''
        })

    const getInfo = async function ( ) {
    const url = "https://api-frontend-test.brlogic.com/podcast/episodes/687/details.json"
    await axios.get(url)
        .then( response => {
            setInfoEpisodes(response.data)
        })
    }

    useEffect(( ) => {
    getInfo()
    }, [])

    return infoEpisodes
    
}






export function Episode4Info (){
    const [infoEpisodes, setInfoEpisodes] = useState({
        id: '',
        name: '',
        description: '',
        duration: '',
        participants: '',
        episodeNumber: '',
        cover: '',
        audio: ''
        })

    const getInfo = async function ( ) {
    const url = "https://api-frontend-test.brlogic.com/podcast/episodes/982/details.json"
    await axios.get(url)
        .then( response => {
            setInfoEpisodes(response.data)
        })
    }

    useEffect(( ) => {
    getInfo()
    }, [])

    return infoEpisodes
    
}






export function Episode5Info (){
    const [infoEpisodes, setInfoEpisodes] = useState({
        id: '',
        name: '',
        description: '',
        duration: '',
        participants: '',
        episodeNumber: '',
        cover: '',
        audio: ''
        })

    const getInfo = async function ( ) {
    const url = "https://api-frontend-test.brlogic.com/podcast/episodes/1059/details.json"
    await axios.get(url)
        .then( response => {
            setInfoEpisodes(response.data)
        })
    }

    useEffect(( ) => {
    getInfo()
    }, [])

    return infoEpisodes
    
}






export function Episode6Info (){
    const [infoEpisodes, setInfoEpisodes] = useState({
        id: '',
        name: '',
        description: '',
        duration: '',
        participants: '',
        episodeNumber: '',
        cover: '',
        audio: ''
        })

    const getInfo = async function ( ) {
    const url = "https://api-frontend-test.brlogic.com/podcast/episodes/2361/details.json"
    await axios.get(url)
        .then( response => {
            setInfoEpisodes(response.data)
        })
    }

    useEffect(( ) => {
    getInfo()
    }, [])

    return infoEpisodes
    
}

