import { StyleSheet, View, Text } from 'react-native';

export default function GoalItem() {
  return (
    <View style={styles.goalContent}>
      <Text style={styles.goalItem}>Goal 1</Text>
      <Text style={styles.goalItem}>Goal 2</Text>
      <Text style={styles.goalItem}>Goal 3</Text>
      <Text style={styles.goalItem}>Goal 4</Text>
      <Text style={styles.goalItem}>Goal 5</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalContent: {},
  goalItem: {
    backgroundColor: '#7027A0',
    padding: 10,
    color: '#fff',
    borderRadius: 5,
    marginBottom: 10,
  },
});
