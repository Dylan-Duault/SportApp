import React from "react"
import { observer } from "mobx-react-lite"

// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"

import { HeaderTitle } from "../../components"
import { Box, ScrollView } from "native-base"
import { useStores } from "../../models"

export const WorkoutScreen = observer(function WorkoutScreen() {
  const { workoutStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  return (
    <HeaderTitle title={workoutStore.currentWorkout.name}>
      <ScrollView>
        <Box bg={"white"}>Hello !</Box>
      </ScrollView>
    </HeaderTitle>
  )
})
