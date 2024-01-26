import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image
      style={styles.FGimg}
      source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />

      <Text style={styles.text}>Hello World! </Text>

      <TextInput
        style={styles.input}
        defaultValue='Exemplo de input'
      />

      <TouchableOpacity style={styles.btn}>
        <Text>exemplo de botao</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 50,
    fontWeight: '500'
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    padding: 10
  },
  FGimg: {
    width: 100,
    height: 100,
  },
  btn: {
    borderColor: 'black',
    width: '60%',
    height: 40,
    borderWidth: 1,
    marginTop:10,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 5
  }

});
