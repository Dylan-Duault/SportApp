import React, { FC, useEffect } from "react"
import { observer } from "mobx-react-lite"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { HeaderTitle } from "../../components"
import { ScrollView, VStack } from "native-base"
import { Workout } from "../../components/Buttons/Workout"
import { useStores, WorkoutSnapshot } from "../../models"
import { useNavigation } from "@react-navigation/native"

export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = observer(() => {
  const navigation = useNavigation()

  const { workoutStore } = useStores()
  const { workouts } = workoutStore

  useEffect(() => {
    async function fetchData() {
      await workoutStore.getWorkouts()
    }

    fetchData()
    __DEV__ && console.tron.log(workouts)
  }, [])

  const selectWorkout = async (workout: WorkoutSnapshot) => {
    await workoutStore.setCurrentWorkout(workout)

    navigation.navigate("workout")
  }

  return (
    <HeaderTitle title={"Choose your workout !"}>
      <ScrollView>
        <VStack space={4} alignItems="center" pt={4}>
          {workouts.map((workout) => (
            <Workout
              key={workout.id}
              workout={workout}
              onPress={() => {
                selectWorkout(workout)
              }}
            />
          ))}
        </VStack>
      </ScrollView>
    </HeaderTitle>
  )
})
