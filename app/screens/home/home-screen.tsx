import React, { FC } from "react"
import { observer } from "mobx-react-lite"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { HeaderTitle } from "../../components"
import { ScrollView, VStack } from "native-base"
import { Workout } from "../../components/Buttons/Workout"

export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = observer(() => {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  return (
    <HeaderTitle title={"Workout"}>
      <ScrollView>
        <VStack space={4} alignItems="center" pt={4}>
          <Workout name={"Aphrodite"} duration={"5-6 min"} difficulty={"advanced"} />
          <Workout name={"Aphrodite"} duration={"5-6 min"} difficulty={"Beginner"} />
          <Workout name={"Aphrodite"} duration={"5-6 min"} difficulty={"Medium"} />
          <Workout name={"Aphrodite"} duration={"5-6 min"} difficulty={"Beginner"} />
          <Workout name={"Aphrodite"} duration={"5-6 min"} difficulty={"Medium"} />
        </VStack>
      </ScrollView>
    </HeaderTitle>
  )
})
