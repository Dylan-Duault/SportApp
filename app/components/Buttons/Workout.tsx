import React from "react"
import { Box, HStack, Text } from "native-base"

interface IProps {
  children?: React.ReactNode
  name: string
  duration: string
  difficulty: string
  bg?: string
  image?: string
}

export const Workout = ({ bg, name, duration, difficulty }: IProps) => {
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
      bg={bg ?? getRandomColor()}
      rounded={"3xl"}
      shadow={3}
      px={5}
      alignItems="center"
      justifyContent="center"
    >
      <HStack>
        <Box>
          <Text fontSize={"lg"} bold>
            {name.toUpperCase()}
          </Text>
          <Text fontSize={"sm"}>{duration.toUpperCase()}</Text>
        </Box>
        <Box flex={1} h={"100%"}>
          <Text pt={"auto"} alignSelf={"flex-end"}>
            {difficulty.toUpperCase()}
          </Text>
        </Box>
      </HStack>
    </Box>
  )
}
