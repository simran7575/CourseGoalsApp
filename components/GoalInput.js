import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Image, KeyboardAvoidingView, TextInput, Button} from 'react-native';

const GoalInput = props => {
    const [currentGoal, setCurrentGoal] = useState("")

    const cancelInput = () =>{
        props.setIsModalVisible(!props.visible);
        setCurrentGoal("");
    }

    const addGoal = () => {
        props.setIsModalVisible(!props.visible);
        props.addGoalInput(currentGoal);
        setCurrentGoal("")
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <KeyboardAvoidingView style={styles.modalContainer}>

                <Image style={styles.goalImage} source={require("../assets/goal.png")} />
                <TextInput style={styles.inputContainer} placeholder="Course Goal" onChangeText={text => setCurrentGoal(text)} value={currentGoal} />
                <View style={styles.button}>
                    <View style={styles.cancelButton}>
                        <Button color="#e80993" title='Cancel' onPress={cancelInput} />
                    </View>
                    <View style={styles.addButton}>
                        <Button color='#4f10a1' title='Add'onPress={addGoal}/>
                    </View>
                </View>

            </KeyboardAvoidingView>

        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        flexDirection: "row",
        width: "50%",
        justifyContent: "space-around"
    },
    goalImage: {
        width: 130,
        height: 130,
        margin: 20
    },
    inputContainer: {
        width: '70%',
        height: 50,
        backgroundColor: "#cfb8e6",
        borderRadius: 5,
        padding: 10,
        marginBottom: 15
    },
    cancelButton: {
        width: "40%",
    },

    addButton: {
        width: "40%"
    },

})
export default GoalInput;

