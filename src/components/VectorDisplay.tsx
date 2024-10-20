import { Flex, Stack, Text } from '@mantine/core';

import React from 'react';

interface VectorDisplayProps {
    vector: {x:number, y:number, z:number};
}

const VectorDisplay: React.FC<VectorDisplayProps> = ({ vector }) => {
    return (
      <Stack gap="0">
        <Text p={0}>X: {vector.x}</Text>
        <Text p={0}>Y: {vector.y}</Text>
        <Text p={0}>Z: {vector.z}</Text>
        <Flex >
          <Text pt={3} c="dimmed">
            |V| :{" "}
            {Math.round(
              Math.sqrt(vector.x ** 2 + vector.y ** 2 + vector.z ** 2) * 1000
            ) / 1000}{" "}
            ( √{vector.x ** 2 + vector.y ** 2 + vector.z ** 2})
          </Text>
        </Flex>
      </Stack>
    );
};

export default VectorDisplay;