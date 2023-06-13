import { StyleSheet, TextInput, View, Button, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import addUser from './Storage'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

function isValidUser(name) {
    // alphenumricl
    return name.match(/^[0-9a-zA-Z]+$/);
  }

  export default function LoginScreen({navigation}) {
    const [title, setTitle] = React.useState('Debut');
    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
    const [valid, setValid] = React.useState(true);
    const [mismatch, setMismatch] = React.useState(true);
  
    function handleStart(){
      console.log("start");
      //valid string
      setValid(true);
      if(username == null){
        setValid(false);
      } else if(isValidUser(username) == null){
        setValid(false);
      } else{
        try{ 
          addUser(username, password).then((response) => {
            if(response == -1){
              console.log('incorrect');
              setMismatch(false);
            } else{ //new user or correct password
              console.log('correct');
              navigation.navigate('Projects',{
                title: '',
                tagOne:  '',
                tagTwo:  '',
                roleOne:  '',
                roleTwo: '',
                description:  ''
              });
            }
          });
        } catch(e){
          console.log(e);
        }
      }
    }
      return (
        <View style={styles.container}>
            <TextInput style = {styles.Title}
            onChangeText={setTitle}
            value={title}/>

            {/* <TouchableOpacity style={styles.buttonContainer}>
              <Button style = {styles.button}
              title = 'Continue with Penn inTouch'
              color = '#FFFFFF'
              />
            </TouchableOpacity> */}

            <Text style = {styles.email}>
              Email Address or Username
            </Text>

            <TouchableOpacity style={styles.emailContainer}>
              <TextInput style = {styles.input}
              onChangeText={setUsername}
              value={username}/>
            </TouchableOpacity>

            <Text style = {styles.password}>
              Password
            </Text>
            
            <TouchableOpacity style={styles.passwordContainer}>
              <TextInput style = {styles.input}
              onChangeText={setPassword}
              secureTextEntry={true}
              value={password}/>
            </TouchableOpacity>

            <Text style={styles.forgot}>
              Forgot your password? 
            </Text>

            <TouchableOpacity style={styles.loginContainer}>
              <Button style = {styles.login}
              title = 'Login'
              color = '#FFFFFF'
              onPress={(e) => handleStart(e)}
              />
            </TouchableOpacity>

  
            {(() =>{
              if(!valid){
                return (
                  <Text>
                    Usernames are alphanumeric strings. Please try again.
                  </Text>
                )
              }
            })()}

            {(() =>{
              if(!mismatch){
                return (
                  <Text>
                    Username and password do not match. Please try again.
                  </Text>
                )
              }
            })()}
            
        </View>
      );  
  }
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    Title: {
      fontStyle: 'normal',
      fontSize: 30,
      color: '#000',
      marginBottom: 10,
      fontWeight: 'bold',
      alignItems: 'center',
      position: 'absolute',
      top: 0
    },
    text: {
      fontStyle: 'normal',
      fontSize: 20,
      color: '#000',
    },
    email: {
      fontSize: 15,
      fontWeight: 'bold',
      position: 'absolute',
      top: 135,
      left: 40,
    },
    password: {
      fontSize: 15,
      fontWeight: 'bold',
      position: 'absolute',
      top: 230,
      left: 40,
    },
    description: {
      marginTop: 15,
      fontStyle: 'normal',
      fontSize: 15,
      color: '#51784F'
    },
    emailContainer:{
      backgroundColor: "#C4C4C4",
      borderRadius:0,
      paddingVertical: 2,
      borderWidth: 1,
      position: 'absolute',
      left: 40,
      top: 160,
      height: 40,
      width: 300,
    },
    passwordContainer:{
      backgroundColor: "#C4C4C4",
      borderRadius:0 ,
      borderWidth: 1,
      position: 'absolute',
      left: 40,
      top: 250,
      height: 40,
      width: 300,
    },
    input: {
      fontSize: 16,
      height: 30,
      fontStyle: 'normal',
      marginTop: 5,
      marginBottom: 5,
      textAlign: 'left',
    },
    button:{
      fontSize: 10,
    },
    buttonContainer: {
      elevation: 8,
      backgroundColor: "#C4C4C4",
      borderRadius: 20,
      paddingVertical: 3,
      paddingHorizontal: 8,
    },
    login:{
      fontSize: 15
    },
    loginContainer: {
      elevation: 8,
      backgroundColor: "#431FE4",
      borderRadius: 30,
      paddingVertical: 3,
      paddingHorizontal: 8,
      height: 50,
      width: 100,
      position: 'absolute',
      right: 40,
      top: 350,
    },
    forgot:{
      fontSize: 15,
      position: 'absolute',
      top: 330,
      left: 40
    }
  });
  