import { Button, FlatList, Image, StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible, setmodalIsVisible] = useState(false);
  const [listOfGoal, setlistOfGoal] = useState([]);

  const onAddGoalHandler = (entererdGoalText) => {
    setlistOfGoal((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: entererdGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };
  const deleteGoalHandler = (id) => {
    let newlistGoal = listOfGoal.filter((goal) => {
      return goal.id !== id;
    });
    setlistOfGoal(newlistGoal);
  };
  const endAddGoalHandler = () => {
    setmodalIsVisible(false);
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContenaire}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={() => {
            setmodalIsVisible(true);
          }}
        />
        <View>
          <GoalInput
            addGoalHandler={onAddGoalHandler}
            visible={modalIsVisible}
            cancelGoal={endAddGoalHandler}
          />
        </View>

        <View style={styles.goalContainer}>
          <FlatList
            data={listOfGoal}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteHandler={deleteGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
            alwaysBounceVertical={false}
          ></FlatList>
        </View>
        <View>
          <Image
            style={styles.imageNote}
            source={{
              uri: "https://irp.cdn-website.com/fc4de732/dms3rep/multi/1+4.gif",
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContenaire: {
    flex: 1,
    paddingTop: 50,
    marginHorizontal: 16,
  },

  goalContainer: {
    flex: 5,
  },
  imageNote: {
    borderStartColor: "yellow",
    width: "100%",
    height: 300,
    marginBottom: 90,
  },
});
