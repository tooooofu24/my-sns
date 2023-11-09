import { Box, Container } from "@chakra-ui/react";

export function Header() {
  return (
    <Box
      width="100%"
      height={16}
      borderBottom="1px"
      borderBottomColor="gray.200"
      position="fixed"
      backgroundColor="white"
      zIndex={1}
    >
      <Container maxW="md" height="100%" display="flex" alignItems="center">
        千葉陶也 BLOG
      </Container>
    </Box>
  );
}
