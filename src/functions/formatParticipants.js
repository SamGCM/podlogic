export default function convertString(participants){

    const string = participants.toString() // CONVERTE PARA STRING

    var regex = /,/ig

    var newString = string.replace(regex, ', ') // Adciona espaço após a virgula

    
    const ultCommaIndex = newString.lastIndexOf(',') // Pega a última virgula na frase

    var ultPart = newString.substr(ultCommaIndex) // Pega o resto da frase apartir da última virgula

    var replaceComma = newString.substr(ultCommaIndex).replace(',', ' e') // Substitui a , por e

    return newString.replace(ultPart, replaceComma) // Substitui a , por e na string inteira
    }