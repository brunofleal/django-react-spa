import React, { useEffect, useState } from 'react';
import { Box, Checkbox, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { baseURL, endpoints } from '../../shared/constants/endpoints';

interface TodoItem {
  id: number;
  name: string;
  done: boolean;
}

const SampleApiPage = () => {
  const [data, setData] = useState<TodoItem[]>([]);

  useEffect(() => {
    fetch(baseURL + endpoints.TODO.GET.ALL).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    }).then(data => {
      setData(data);
    }).catch(err => {
      console.log({ err });
    });

  }, []);

  return (<
    Grid alignContent={'center'} gap={6} padding={3}>
    <GridItem>
      <Text
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize='6xl'
        fontWeight='extrabold'
      >
        Sample Api
      </Text>
    </GridItem>
    <GridItem>
      <Stack>
        {
          data.map((entry: TodoItem) => {
            return (<Box key={entry.name + entry.id}>
              <Text
                bgGradient='linear(to-l, green, red)'
                bgClip='text'
                fontSize='1xl'
                fontWeight='extrabold'
              >
                - ({entry.id}) {entry.name}
              </Text>
              <Checkbox isChecked={entry.done} isDisabled={true} />
            </Box>);
          })
        }
      </Stack>
    </GridItem>
  </Grid>
  );
};

export default SampleApiPage;