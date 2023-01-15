import React from 'react';
import { Grid, Heading, Link as ChakraLink, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <Stack spacing={3}>
      <Grid
        w='100%' h='200px'
        justifyContent={'center'} alignContent={'center'}
        bgGradient='linear(to-r, green.100, red.300)'
      >
        <Heading size={'4xl'} color={'Menu'}>
          Pages
        </Heading>
      </Grid>
      <Grid gap={3} padding={3}>
        <Link to='sample-static'>
          <ChakraLink>Static Sample</ChakraLink>
        </Link>
        <Link to='sample-api'>
          <ChakraLink>API Sample</ChakraLink>
        </Link>
      </Grid>

      <Heading size="xl" variant="underline">...</Heading>
    </Stack >
  );

};

export default MainPage;