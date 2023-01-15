import React from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';

const SampleStaticPage = () => {

  return (
    <Grid alignContent={'center'} gap={6} padding={3}>
      <GridItem>
        <Text
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontSize='6xl'
          fontWeight='extrabold'
        >
          This is a sample static page
        </Text>
      </GridItem>
      <GridItem>
        <Text
          color={'black'}
          fontSize='1xl'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu arcu ut nisi rutrum porta a ut mi. Aenean vel congue ex. Nulla a mauris vitae nisl ullamcorper volutpat eget at odio. Maecenas vehicula urna non felis vestibulum, in facilisis nisl pharetra. Pellentesque sed purus sed felis tristique molestie vel quis arcu. Curabitur vitae mi felis. Nullam metus nulla, dictum at pretium vitae, luctus sed elit. Suspendisse euismod tempus tincidunt. Phasellus vulputate massa eu semper dictum. Pellentesque a arcu et nibh ultrices vehicula. Fusce luctus at neque a rutrum. In lacus quam, egestas vel magna vitae, gravida placerat ligula. Nulla porttitor velit placerat massa tincidunt, at vehicula mi lacinia. Nullam vel fermentum risus. Curabitur accumsan, justo nec egestas dignissim, sem massa convallis eros, quis porta urna sem eget purus. Mauris odio velit, varius nec eros et, fringilla gravida risus.        </Text>
      </GridItem>
    </Grid>);
};

export default SampleStaticPage;