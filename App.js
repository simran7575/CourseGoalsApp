import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform, TouchableOpacity, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import WelcomeScreen from './screens/WelcomeScreen';


export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [courseGoal, setCourseGoal] = useState([]);

  const randomColor = () =>{

    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

  const addGoalInput = (goal) => {
    setIsModalVisible(!isModalVisible);
     var newcolor = randomColor()
    setCourseGoal(currentGoal => [...currentGoal, {key: Math.random().toString(), value: goal, newcolor:newcolor}])

  }

  const deleteItem = (identity) => {
    setCourseGoal(currentGoal =>{
      return currentGoal.filter(goal=>{return goal.key !== identity})
    })
  }
  return (
  //   <View style={styles.container}>
  //  <WelcomeScreen/>
  //  </View>
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.courseGoalButton}
        onPress={() => setIsModalVisible(!isModalVisible)}>
          <Text style={styles.buttontext}>
            ADD COURSE GOAL
          </Text>
      </TouchableOpacity>
      <View style={styles.list}>
      <FlatList 
      data={courseGoal}
      keyExtractor={(item,index)=> item.key}
      renderItem = {itemData => (
        <GoalItem identity={itemData.item.key} item= {itemData.item.value} newcolor={itemData.item.newcolor} delete={deleteItem}/>
      )}
      /> 
      </View>
       <GoalInput 
       setIsModalVisible={setIsModalVisible} 
       visible={isModalVisible} 
       addGoalInput={addGoalInput}/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 30 : 0,
    alignItems:"center",
    backgroundColor:"black",

  },
  courseGoalButton: {
    backgroundColor: "#823d15",
    height: "100%",
    borderRadius: 10,
    justifyContent:"center",
    width: "80%",
    height: 50,
    marginTop:30
  },
  buttontext: {
    textAlign: "center",
    color: "white",
    fontSize: 18
  },
  list:{
    width:'100%',
    marginVertical:30,
    padding:20
    
  }
});
