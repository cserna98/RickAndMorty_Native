import React from 'react';
import  { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { CharacterApi, getCharacterById } from '../api/CharactersApi'
import { API_HOST } from "../utils/Contants";
import CharacterList from '../components/CharacterList'


 function Characters() {

    const [characters, setCharacters] = useState([]);
    const [nextUrl, setNextUrl] = useState(null);
 

    useEffect(()=>{
        (async () => {
        loadCharacter();
          })();
    },[])

    const loadCharacter = async () => {
        console.log("SI ENTRO A LOAD")
        try {
            const response = await CharacterApi(nextUrl);
            setNextUrl(response.info.next)

            const characterList = []
            for await (const character of response.results) {
                characterDetailResponse = await getCharacterById(`${API_HOST}/character/${character.id}`);
                
                characterList.push({
                    id: characterDetailResponse.id,
                    name: characterDetailResponse.name,
                    gender: characterDetailResponse.gender,
                    type: characterDetailResponse.type,
                    imagen:characterDetailResponse.image,
                })
            }

            setCharacters([...characters, ...characterList]);

        } catch (error) {
            console.error(error);
        }
    }


    return ( 
        <SafeAreaView>
            <CharacterList
            characters={characters}
            loadCharacter={loadCharacter}
            isNext = {nextUrl}
            />
        </SafeAreaView>
     );
}

export default Characters;