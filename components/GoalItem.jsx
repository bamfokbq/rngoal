import { StyleSheet, View, Text, Button, Pressable } from 'react-native';
import { useState } from 'react';

export default function GoalItem({ value, onDeleteItem, id }) {
  const [goalCompleted, setGoalCompleted] = useState(false);

  return (
    <Pressable
      android_ripple={{ color: '#ddd' }}
      onPress={!goalCompleted ? onDeleteItem.bind(this, id) : null}>
      <View style={styles.wrapper}>
        <Button
          title='✔'
          color={goalCompleted ? '#C1F4C5' : '#019267'}
          onPress={() => setGoalCompleted(!goalCompleted)}
        />
        <Text style={goalCompleted ? styles.goalCompleted : styles.goalItem}>
          {value}
        </Text>
        <Button
          title='📑'
          color='#FF1818'
          onPress={!goalCompleted ? onDeleteItem.bind(this, id) : null}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#AD8B73',
    padding: 10,
    color: '#fff',
    borderRadius: 5,
    width: '75%',
    marginVertical: 10,
  },
  goalCompleted: {
    backgroundColor: '#DFDFDE',
    padding: 10,
    color: '#fff',
    borderRadius: 5,
    width: '75%',
    marginVertical: 10,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
