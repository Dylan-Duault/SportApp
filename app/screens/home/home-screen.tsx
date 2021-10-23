import React, { FC, useEffect } from "react"
import { observer } from "mobx-react-lite"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { HeaderTitle } from "../../components"
import { ScrollView, VStack } from "native-base"
import { Workout } from "../../components/Buttons/Workout"
import { useStores } from "../../models"

export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = observer(() => {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  const { workoutStore } = useStores()
  const { workouts } = workoutStore

  useEffect(() => {
    async function fetchData() {
      await workoutStore.getWorkouts()
    }

    fetchData()
    __DEV__ && console.tron.log(workouts)
  }, [])

  return (
    <HeaderTitle title={"Workout"}>
      <ScrollView>
        <VStack space={4} alignItems="center" pt={4}>
          {workouts.map((workout) => (
            <Workout key={workout.id} workout={workout} />
          ))}
        </VStack>
      </ScrollView>
    </HeaderTitle>
  )
})
