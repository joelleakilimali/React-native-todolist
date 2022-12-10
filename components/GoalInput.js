import { useState } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

const GoalInput = (props) => {
  const [entererdGoalText, setentererdGoalText] = useState("");
  const [goalList, setgoalList] = useState([]);

  const goadlInputHandle = (enteredText) => {
    setentererdGoalText(enteredText);
  };
  const addGoalHandler = () => {
    props.sendHandler(entererdGoalText);
    setentererdGoalText("");
  };
  const onAddGoalHandler = () => {
    props.addGoalHandler(entererdGoalText);
    setentererdGoalText("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputcontenaire}>
        <Image
          style={styles.image}
          source={require("../assets/Images/goal.png")}
        />
        <TextInput
          placeholder="Your course Goal here!"
          style={styles.textIput}
          onChangeText={goadlInputHandle}
          value={entererdGoalText}
        />
        <View style={styles.buttonContenaire}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={onAddGoalHandler}
              color="#b120f0"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.cancelGoal} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
const styles = StyleSheet.create({
  textIput: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    padding: 16,
    marginRight: 8,
    borderRadius: 6,
    width: "100%",
    color: "#120438",
  },
  image: {
    width: 100,

    height: 100,
  },
  inputcontenaire: {
    flex: 1,
    backgroundColor: "#311b6b",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: 16,
  },
  buttonContenaire: {
    marginTop: 40,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
