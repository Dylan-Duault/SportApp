import React from "react"
import { Box, Text } from "native-base"

interface IProps {
  children?: React.ReactNode
  title: string
}

export const HeaderTitle = ({ children, title }: IProps) => {
  return (
    <Box
      safeAreaTop={true}
      bg="primary.900"
      rounded="md"
      alignSelf="center"
      width={"100%"}
      height={"95%"}
    >
      <Text fontWeight={"bold"} textAlign={"center"} fontSize={"xl"} color={"white"}>
        {title}
      </Text>
      <Box w={"100%"} height={"100%"} backgroundColor={"white"} mt={3} borderTopRadius={32}>
        {children}
      </Box>
    </Box>
  )
}
