import React from "react"
import { Box, HStack, Text } from "native-base"
import { WorkoutSnapshot } from "../../models"

interface IProps {
  workout: WorkoutSnapshot
}

export const Workout = ({ workout }: IProps) => {
  const getRandomColor = () => {
    return (
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")"
    )
  }

  return (
    <Box
      w="85%"
      h={100}
      bg={getRandomColor()}
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
  )
}
