import React, { Component} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from "../styles/styles";
import MapView from 'react-native-maps'
import { throwStatement } from '@babel/types';
export default class Welcome extends Component {
    constructor (props) {
        super (props)
        this.state = {
          email : "",
          password : "",
          loading: false
        }
       
      }
      componentDidMount = () => {
         // this.setState({loading : })
      }
    goToPage = (page) => {
        this.props.navigation.navigate(page)
    }
render () { 
return (<View>
    <Image  style={styles.imageWidth} source={require('../images/kinder.jpg')} ></Image>
    <Text style={styles.textStyle}>for creative kids</Text>
    <Text style={styles.welcomeTextStyle}>Welcome To Your School Finding APP</Text>
     <TouchableOpacity style={styles.buttonBackground}>
        <Text  onPress={this.goToPage.bind(this, 'Login')} style={styles.welcomeLoginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBackgroundSignUp}>
        <Text onPress={this.goToPage.bind(this, 'Register')}>Sign Up</Text>
        </TouchableOpacity></View>)} 
      
}