import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native'

export default SignUp = () => {
  
    const [username, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

  showAlert = viewId => Alert.alert('Alert', viewId)

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.topRightButton}
        onPress={() => showAlert('close')}>
        <Text style={styles.topRightButton}>Close</Text>
      </TouchableOpacity>

      <Image 
        style={styles.logo}
        source={require('../assets/Logo.png')} />
      <Text style={styles.appName} >Money Manager</Text>

      <View style={styles.inputContainer}>
        <Image 
            style={styles.inputIcon}
            source={require('../assets/user.png')} 
        />
        <TextInput
          style={styles.inputs}
          placeholder="Name"
          keyboardType="default"
          underlineColorAndroid="transparent"
          onChangeText={username => setName({ name })}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{ uri: 'https://img.icons8.com/ios-filled/512/circled-envelope.png' }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          keyboardType="default"
          underlineColorAndroid="transparent"
          onChangeText={email => setEmail({ email })}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{ uri: 'https://img.icons8.com/ios-glyphs/512/key.png' }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={password => setPassword({ password })}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{ uri: 'https://img.icons8.com/ios-glyphs/512/key.png' }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Comfirm Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
        />
      </View>


      <TouchableOpacity
        style={[ styles.loginButton]}
        onPress={() => showAlert('login')}>
        <Text style={styles.loginText}>SignIn</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => showAlert('sign up')}>
        <Text>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EBEBEB',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 290,
    height: 50,
    alignSelf: 'center',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 7,
  },
  appName: {
    alignSelf: 'center',
    fontSize:30,
    height: 55,
    marginBottom: 15,
  },
  topRightButton:{
    height: 20,
    textAlign:'right',
    right: 10,

  },
  inputs: {
    height: 55,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 25,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  loginButton: {
    alignSelf: 'center',
    backgroundColor: '#779DFF',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 25,
    width: 200,
    borderRadius: 30,
  },
  loginText: {
    color: 'white',
  },
  logo: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    margin: 10,
    justifyContent: 'center',
    borderRadius: 10,
  },
})
