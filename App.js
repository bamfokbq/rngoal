import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { useState } from 'react';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredGoal);
  };

  return (
    <View style={styles.container}>
      <View style={styles.goalInput}>
        <GoalInput />
      </View>
      <View style={styles.goalList}>
        <GoalItem />
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 40,
  },
  goalInput: {
    paddingBottom: 30,
    borderBottomColor: '#7027A0',
    borderBottomWidth: 1,
  },
  goalList: {
    marginTop: 20,
  },
});
