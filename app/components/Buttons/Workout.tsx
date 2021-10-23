import React from "react"
import { Box, HStack, Pressable, Text } from "native-base"
import { WorkoutSnapshot } from "../../models"

interface IProps {
  workout: WorkoutSnapshot
  onPress: any
}

export const Workout = ({ workout, onPress }: IProps) => {
  return (
    <Pressable onPress={onPress}>
      <Box
        w="85%"
        h={100}
        bg={"primary.300"}
        rounded={"3xl"}
        shadow={3}
        px={5}
        alignItems="center"
        justifyContent="center"
      >
        <HStack>
          <Box>
            <Text fontSize={"lg"} bold>
              {workout.name.toUpperCase()}
            </Text>
            <Text fontSize={"sm"}>Around {workout.duration} minutes</Text>
          </Box>
          <Box flex={1} h={"100%"}>
            <Text pt={"auto"} alignSelf={"flex-end"}>
              {workout.difficulty.toUpperCase()}
            </Text>
          </Box>
        </HStack>
      </Box>
    </Pressable>
  )
}
