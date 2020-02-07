import React, { Component, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import GoalItem from './components/GoalItem.js';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoal, setCourseGoal] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  };

  const onButtonPress = () => {
    setCourseGoal(currentGoals => [...currentGoals, { id: Math.random.toString(), value: enteredGoal }]);
    // console.log(enteredGoal);
  };

  return (
    <View style={styles.setupBaseViewStyle} >
      <Text style={{ color: 'white', alignSelf: 'center' }}> TODO App </Text>
      <View style={{ padding: 40, alignItems: 'center', flexDirection: 'row' }} >
        <TextInput placeholder="Enter Something" style={styles.niceInputStyle} onChangeText={goalInputHandler} value={enteredGoal} />

        <TouchableOpacity onPress={onButtonPress}>
          <View style={styles.customButtonViewStyle}>
            <Text style={{ color: 'white' }}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={itemData => <GoalItem title={itemData.item.value} />} />


    </View>

  );
}

const styles = StyleSheet.create({

  setupBaseViewStyle: {
    padding: 40,
    backgroundColor: 'teal',
    flex: 1,
    justifyContent: 'center',
  },

  niceInputStyle: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    margin: 10,
    width: "80%"
  },

  customButtonViewStyle: {
    borderRadius: 15,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 70
  }


});