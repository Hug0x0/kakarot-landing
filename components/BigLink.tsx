import {Link, Text, useColorMode} from "@chakra-ui/react";

interface Props {
    children: any;
    href: string;
}
const BigLink = ({children, href}: Props) => {
    const { colorMode } = useColorMode();

  return (
      <Link isExternal href={href} transition="all .2s ease-in" _hover={{textDecoration: "none", color: "brand.500", textShadow: "0 0 80px rgb(192 219 255 / 75%), 0 0 32px rgb(93 84 255 / 30%)"}} px={4} py={2}>
          <Text fontWeight={800} fontSize="lg" letterSpacing={-1}>
              {children}
          </Text>
      </Link>
  )
}

export default BigLink
