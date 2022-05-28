import React, {useState} from 'react';
import {Text, View , StyleSheet, TouchableOpacity} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';



const GoalItem = props => {
    return(
    <View style={styles.container}>
      
        <TouchableOpacity style={[styles.textContainer,{backgroundColor:props.newcolor}]} onPress={props.delete.bind(this,props.identity)}>
        <Text style={styles.text}>{props.item}</Text>
        </TouchableOpacity>

    </View>
)
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      width:"100%",
      justifyContent:"center",
 
  },
  text:{
      color:"white",
      fontSize:15,

  },
  textContainer:{
      width:"100%",
      height:50,
      justifyContent:"center",
      alignItems:"center",
      borderRadius:4,
      marginVertical:5,
     
  }
})

export default GoalItem;