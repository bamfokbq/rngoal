import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from 'react-native';
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
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          onChangeText={goalInputHandler}
          placeholder='Enter Course Goal...'
          style={styles.input}
          value={enteredGoal}
        />
        <View style={styles.actions}>
          <View style={styles.button}>
            <Button title='Cancel' color='#FD5D5D' onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title='ADD GOAL' color='#AD8B73' />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#EBD8C3',
  },
  input: {
    borderColor: '#F7F5F2',
    borderRadius: 5,
    borderWidth: 1,
    padding: 8,
    width: '100%',
    color: '#A97155',
    backgroundColor: '#F7F5F2',
  },
  actions: {
    flexDirection: 'row',
    marginTop: 10,
  },

  button: {
    // width: 100,
    marginHorizontal: 8,
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
