import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView,StyleSheet,StatusBar} from 'react-native';
import Navigation from "./src/navigation/NavigationTab"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer >
        <Navigation/>
      </NavigationContainer>
   </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight, // Asegura que el contenido se muestre debajo de la barra de estado
  },
});