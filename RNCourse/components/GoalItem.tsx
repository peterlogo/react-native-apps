import { View, StyleSheet, Text, Pressable } from "react-native";

interface Props {
  id: string;
  text: string;
  onDelete: (id: string) => void;
}

export default function GoalItem(this: any, { text, onDelete, id }: Props) {
  return (
    <Pressable
      onPress={onDelete.bind(this, id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "#fff",
  },
  goalText: {
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
