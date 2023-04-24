import React, { useState, useEffect } from "react";
import { View , Text} from "react-native";
import { getCharacterById } from '../api/CharactersApi'

function CharacterInfo(props) {

  const {
    navigation,
    route: { params },
  } = props;

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getCharacterById(params.id);
        setCharacter(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  return ( 
    <View>
      <Text>Holi mundo soy un personaje</Text>
    </View>
  );
}

export default CharacterInfo;