import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, Linking } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

      <Image
      style={styles.img}
      source={require('./src/assets/logo_amazon.webp')}
      />

      <View style={styles.form}>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.email}
        placeholder='email@email.com'
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.senha}
        secureTextEntry={true}
        placeholder='******'
      />


      <TouchableOpacity>
        <Text style={styles.link} onPress={() => Linking.openURL('https://www.amazon.com.br/ap/signin')}> 
          Esqueci a senha  
        </Text>
      </TouchableOpacity>

      </View>

      <TouchableOpacity style={styles.btn}>
        <Text onPress={() => Linking.openURL('https://www.amazon.com.br')}>Entrar </Text>
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
    backgroundColor: '#333c4c'
  },
  form: {
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  img: {
    width: 120,
    height: 120,
    margin: 8,
    marginBottom: 50
  },
  text: {
    fontSize: 40,
    fontWeight: '500',
    marginBottom: 8,
    color: 'white'
  },
  email: {
    width: 150,
    height: 25,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(204,234,255,0.5)',
    padding: 5,
    marginTop: 2,
    marginBottom: 20
  },
  senha: {
    width: 150,
    height: 25,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(204,234,255,0.5)',
    padding: 5,
    marginTop: 2,
    marginBottom: 1,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  }, 
  btn: {
    borderColor: 'black',
    width: 80,
    height: 25,
    borderWidth: 1,
    marginTop:10,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#ffb200'
  },
  link: {
    fontSize: 10,
    color: '#007FFF',
    marginBottom: 20,
  }

});
