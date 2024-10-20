import { Stack, Text } from '@mantine/core';

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
      </Stack>
    );
};

export default VectorDisplay;