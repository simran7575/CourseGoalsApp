import React from 'react';
import {View, Text, StyleSheet, Image, Platform, TouchableOpacity} from 'react-native';

const WelcomeScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image source={require("../assets/background.png")} style={styles.image}/>
            <Image source={require("../assets/appIcon.gif")} style={styles.icon}/>
            <View style={styles.textContainer}>
            <Text style={styles.text}>WELCOME</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
        
                    <Text style={styles.buttonText}>GET STARTED</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>

    )
}

const styles= StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
  },
    

  imageContainer:{
     width:'100%',
     height:'70%',
    alignItems:"center",


  },
  image:{
      width:"100%",
      height:"100%",
      borderRadius:20,
  },
  icon:{
      width:170,
      height:170,
      position:"absolute",
      top:'30%'


  },
  textContainer:{
    position:"absolute",
    top:"80%"
  },
  text:{
      color:"white",
      fontSize:40,
      fontWeight:"bold",  
  },
  buttonContainer:{
      marginVertical:40,
      width:"100%",
      height:"30%",
      borderWidth:2,
      borderColor:"blue",
      justifyContent:"center",
      alignItems:"center"
  },
  button:{

  }
})

export default WelcomeScreen;