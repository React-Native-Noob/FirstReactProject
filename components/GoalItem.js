import React from "react";
import { View,Text,StyleSheet } from "react-native";

const GoalItem = props => {
    return(
        <View style={styles.customView}>
          <Text>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    customView: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'gray',
        marginVertical: 5,
        borderRadius: 15,
    alignItems:'center'
      }
});


export default GoalItem;