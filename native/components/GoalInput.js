import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your event name!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      ></TextInput>
      <Button title="Add Event" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
});
