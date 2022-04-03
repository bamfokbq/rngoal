import { StyleSheet, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={goalInputHandler}
        placeholder='Enter Course Goal...'
        style={styles.input}
        value={enteredGoal}
      />
      <Button onPress={addGoalHandler} title='ADD GOAL' color='#AD8B73' />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 30,
    borderBottomColor: '#AD8B73',
    borderBottomWidth: 1,
  },
  input: {
    marginRight: 10,
    borderColor: '#CEAB93',
    borderRadius: 5,
    borderWidth: 1,
    padding: 6,
    width: '70%',
  },
});
