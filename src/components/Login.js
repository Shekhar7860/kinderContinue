import React, { Component} from 'react'
import {View, Text, Image,TextInput, Alert, TouchableOpacity} from 'react-native'
import styles from "../styles/styles";
import { LoginManager,   AccessToken } from 'react-native-fbsdk';
export default class Login extends Component {

     constructor (props) {
    super (props)
    this.state = {
      email : "",
      password : "",
      loading: false
    }
  
  }
  componentDidMount = () => {
    this.setState({loading : true})
    setTimeout (() => this.setState({loading : false }), 2000)
  }
    goToPage = (page) => {
      if(this.state.email && this.state.password)
      {
         this.props.navigation.navigate(page)
      }
      else
      {
        if(!this.state.email  && !this.state.password ) {
             Alert.alert("please enter email & password both")
        }
       else  if(!this.state.email )
        {
            Alert.alert("please enter email")
        }
         else if(!this.state.password )
        {
            Alert.alert("please enter password")
        }
      }
       
    }
    LoginFacebook = () => {
      LoginManager.loginWithPermissions(['public_profile', 'email']).then(
        result => {
          if(result.isCancelled == false)
          {
          AccessToken.getCurrentAccessToken().then(
            (data) => {
                  this.getUserProfile(data.accessToken);
          });
         }
        },
        error => {
          console.log('Login fail with error: ' + error);
        }
      );
    }

    LoginGoogle = () => {
      Alert.alert("Logging With Google")
    }
render () { 
return (<View style={styles.container}>
    <Image  style={styles.imageWidth} source={require('../images/kinder.jpg')} ></Image>
   
    <TextInput value={this.state.email} onChangeText={(text)=>this.setState({ email:text})} style={styles.input} placeholder="Email"  placeholderTextColor = "black"></TextInput>
    <TextInput value={this.state.password} style={styles.input} onChangeText={(text)=>this.setState({ password:text})} placeholder="Password"  placeholderTextColor = "black" secureTextEntry={true}></TextInput>
     <TouchableOpacity style={styles.buttonBackground}>
        <Text onPress={this.goToPage.bind(this, 'Home')} style={styles.welcomeLoginText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.textStyle2}>OR</Text>
        <TouchableOpacity style={styles.buttonBackgroundfb}>
        <Text style={styles.textWhite} onPress={this.LoginFacebook.bind(this, 'Register')}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBackgroundgplus}>
        <Text style={styles.textWhite} onPress={this.LoginGoogle.bind(this, 'Register')}>Google</Text>
        </TouchableOpacity>
        </View>)} 
      
}