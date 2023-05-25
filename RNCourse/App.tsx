import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [courseGoals, setCourseGoals] = useState<
    { text: string; id: string }[]
  >([]);

  function startAddGoalHandler() {
    setIsVisible(true);
  }

  function stopAddGoalHandler() {
    setIsVisible(false);
  }

  function addGoalHandler(text: string) {
    setCourseGoals((prev) => [...prev, { text, id: Date.now().toString() }]);
    stopAddGoalHandler();
  }

  function deleteGoalHandler(id: string) {
    setCourseGoals((prev) => prev.filter((goal) => goal.id !== id));
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#a065ec"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        visible={isVisible}
        onPress={addGoalHandler}
        onCancel={stopAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onDelete={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 5,
  },
});
