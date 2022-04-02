import { StyleSheet, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function GoalInput() {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredGoal);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={goalInputHandler}
        placeholder='Enter Course Goal...'
        style={styles.input}
      />
      <Button onPress={addGoalHandler} title='ADD GOAL' color='#7027A0' />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    marginRight: 10,
    borderColor: '#7027A0',
    borderRadius: 5,
    borderWidth: 1,
    padding: 6,
    width: '70%',
  },
});
