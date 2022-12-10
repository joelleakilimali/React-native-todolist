import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
  return (
    <Pressable
      onPress={props.onDeleteHandler.bind(this, props.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View>
        <View style={styles.textItem}>
          <Text style={styles.goalText}>{props.text} </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: "#5e0acc",
    borderRadius: 8,
    padding: 8,
    margin: 8,
  },
  goalText: {
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
