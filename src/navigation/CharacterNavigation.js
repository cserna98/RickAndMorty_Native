import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Characters from '../screen/Characters'
import  CharacterScreen  from "../screen/CharacterInfo";
 
export default  function CharacterNavigation() {

    const Stack = createStackNavigator();
    
    return (  
        <Stack.Navigator>

        <Stack.Screen
            name="Characters"
            component={Characters}
            options={{ title: "", headerTransparent: true }}
        />
            <Stack.Screen
                name="CharacterInfo"
                component={CharacterScreen}
                options={{ title: "", headerTransparent: true }}
        />
        </Stack.Navigator>
    );
}

