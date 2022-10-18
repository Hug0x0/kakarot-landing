import type { NextPage } from 'next';
import {Flex, HStack, Link, Text, useColorMode, VStack} from "@chakra-ui/react";
import BigLink from "../components/BigLink";
const Home: NextPage = () => {
    const { colorMode } = useColorMode();

  return (
    <Flex direction="column" h="full" align="center">
        {/* Main Part */}
        <Flex maxW={1080} direction="column" w="full" h="full" justify="center" align="center" px={8}>
            <Text color={colorMode === "light" ? "black" : "white"} fontSize="100px" letterSpacing={-4} lineHeight={1} fontWeight={800}>Kakarot</Text>
            <Text color={colorMode === "light" ? "black" : "white"} fontSize="2xl" fontWeight="bold">ZK-EVM on top of StarkNet.</Text>
            <VStack mt={12} mb={100} color={colorMode === "light" ? "gray.500" : "white"} fontSize="20px" align="start" fontWeight={400} lineHeight={1.6}>
                <Text><b>Kakarot</b> is an Ethereum Virtual Machine written in Cairo. It means it can be deployed on <b>StarkNet</b>, a layer 2 scaling solution for Ethereum, and run an EVM bytecode program. </Text>
                <Text>Hence, <b>Kakarot</b> can be used to run Ethereum smart contracts on StarkNet. <b>Kakarot</b> is the super sayajin ZK-EVM !</Text>
                <Text>Why ? Because: It's over 9000!!!!!</Text>
            </VStack>
            <HStack>
                <BigLink>Twitter</BigLink>
                <BigLink>Github</BigLink>
                <BigLink>Telegram</BigLink>
            </HStack>
        </Flex>
        {/* Footer */}
        <Flex py={4} px={8} direction="row" w="full" justify="end" fontSize="sm" color="blackAlpha.600">
            <Text>Copyright ©</Text>
            <Text ml={1}>{new Date().getFullYear()} - </Text>
            <Text ml={1}>Sayajin Labs. All rights reserved</Text>
        </Flex>
    </Flex>
  )
}

export default Home
