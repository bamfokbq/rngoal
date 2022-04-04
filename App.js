import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { useState } from 'react';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);

  function startAddModalHandler() {
    setIsAddModal(true);
  }

  function endGoalHandler() {
    setIsAddModal(false);
  }

  const addGoalHandler = (enteredGoal) => {
    enteredGoal.length > 0 &&
      setCourseGoals((currentGoals) => [
        ...currentGoals,
        { id: Math.random().toString(), value: enteredGoal },
      ]);

    endGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Button
        title='ADD NEW GOAL'
        color='#AD8B73'
        onPress={startAddModalHandler}
      />
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={isAddModal}
        onCancel={endGoalHandler}
      />
      <View>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                value={itemData.item.value}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginVertical: 80,
  },
});
