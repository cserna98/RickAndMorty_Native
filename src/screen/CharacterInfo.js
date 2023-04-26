import React, { useState, useEffect } from "react";
import { ScrollView} from "react-native";
import Header from '../components/Characterinfo/Header'
import { getCharacterById } from '../api/CharactersApi'
import {API_HOST} from '../utils/Contants'

export default function CharacterInfo(props) {

  const {
    navigation,
    route: {params},
  } = props;

  const [character, setCharacter] = useState(null);
  const [id, setId] = useState();


    
  useEffect(() => {

    const fetchData = async (id) => {
      try {
        const url = `${API_HOST}/character/${id}`;
     
        const response = await getCharacterById(url);
        setCharacter(response);
        console.log(response)
      } catch (error) {
        console.log("no funcione me devuelvo yeiii");
        navigation.goBack();
      }
    };
    if (params) {
      fetchData(params.id);
    }
  }, [params]);

  if (!character) return null;

  return ( 
    <ScrollView>
      <Header
      name={character.name}
      gender={character.gender}
      image={character.image}
      type={character.types}
      />
    </ScrollView>
  );
}

