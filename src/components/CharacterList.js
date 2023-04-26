import React from "react";
import { StyleSheet,  FlatList,ActivityIndicator } from "react-native";
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {

    const {characters, loadCharacter,isNext} = props;

    const laodMore = () => {
      if(isNext){
        loadCharacter();
      }
        
      };

    return ( 
        <FlatList
        data={characters}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor = {(character) => String(character.id)}
        renderItem= {({item})=> <CharacterCard character={item}/>}
        contentContainerStyle={styles.flatListContentContainer}
        onEndReached={isNext&&laodMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent = {
            <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
        />
        }
        />
        
    );
}

const styles = StyleSheet.create({
    flatListContentContainer: {
      paddingHorizontal: 5,
      marginTop: Platform.OS === "android" ? 30 : 0,
    },
    spinner: {
      marginTop: 20,
      marginBottom: Platform.OS === "android" ? 90 : 60,
    },
  });

