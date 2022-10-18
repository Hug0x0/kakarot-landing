import {Link, Text, useColorMode} from "@chakra-ui/react";

interface Props {
    children: any;
}
const BigLink = ({children}: Props) => {
    const { colorMode } = useColorMode();

  return (
      <Link transition="all .2s ease-in" _hover={{textDecoration: "none", color: "brand.500"}} px={4} py={2}>
          <Text fontWeight={800} fontSize="lg" letterSpacing={-1}>
              {children}
          </Text>
      </Link>
  )
}

export default BigLink
