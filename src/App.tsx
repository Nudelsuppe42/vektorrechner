import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import {
  Card,
  Divider,
  Grid,
  GridCol,
  MantineProvider,
  SimpleGrid,
  Text,
} from "@mantine/core";
import useVector, { Axis } from "./hooks/useVector";
import { angleBetweenVectors, vectorProduct, vectorScalarProduct } from "./math";

import VectorDisplay from "./components/VectorDisplay";
import VectorInput from "./components/VectorInput";

export default function App() {
  const vector1 = useVector();
  const vector2 = useVector();

  return (
    <MantineProvider forceColorScheme="dark">
      <Grid w="80vw" p="xl">
        <GridCol span={6}>
          <h3>Vektor 1</h3>
          <VectorInput
            x={vector1.get(Axis.X)}
            y={vector1.get(Axis.Y)}
            z={vector1.get(Axis.Z)}
            onChange={(v) => vector1.setAll(v)}
          />
        </GridCol>
        <GridCol span={6}>
          <h3>Vektor 2</h3>
          <VectorInput
            x={vector2.get(Axis.X)}
            y={vector2.get(Axis.Y)}
            z={vector2.get(Axis.Z)}
            onChange={(v) => vector2.setAll(v)}
          />
        </GridCol>
      </Grid>
      <Divider />
      <SimpleGrid cols={2} p="xl">
        <Card withBorder>
          <Text fw="bold" fz="lg">
            Summe
          </Text>
          <VectorDisplay
            vector={{
              x: vector1.x + vector2.x,
              y: vector1.y + vector2.y,
              z: vector1.z + vector2.z,
            }}
          />
        </Card>
        <Card withBorder>
          <Text fw="bold" fz="lg">
            Differenz
          </Text>
          <VectorDisplay
            vector={{
              x: vector1.x - vector2.x,
              y: vector1.y - vector2.y,
              z: vector1.z - vector2.z,
            }}
          />
        </Card>
        <Card withBorder>
          <Text fw="bold" fz="lg">
            Vektorprodukt
          </Text>
          <VectorDisplay
            vector={{
              x: vectorProduct(
                vector1.getAll(),
                vector2.getAll(),
                "x"
              ) as number,
              y: vectorProduct(
                vector1.getAll(),
                vector2.getAll(),
                "y"
              ) as number,
              z: vectorProduct(
                vector1.getAll(),
                vector2.getAll(),
                "z"
              ) as number,
            }}
          />
        </Card>
        <Card withBorder>
          <Text fw="bold" fz="lg">
            Betrag
          </Text>
          <Text>
            Vektor 1:{" "}
            {Math.round(
              Math.sqrt(
                Math.pow(vector1.get("x"), 2) +
                  Math.pow(vector1.get("y"), 2) +
                  Math.pow(vector1.get("z"), 2)
              ) * 1000
            ) / 1000}{" "}
            ( √
            {Math.pow(vector1.get("x"), 2) +
              Math.pow(vector1.get("y"), 2) +
              Math.pow(vector1.get("z"), 2)}
            )
          </Text>
          <Text>
            Vektor 2:{" "}
            {Math.round(
              Math.sqrt(
                Math.pow(vector2.get("x"), 2) +
                  Math.pow(vector2.get("y"), 2) +
                  Math.pow(vector2.get("z"), 2)
              ) * 1000
            ) / 1000}{" "}
            ( √
            {Math.pow(vector2.get("x"), 2) +
              Math.pow(vector2.get("y"), 2) +
              Math.pow(vector2.get("z"), 2)}
            )
          </Text>
        </Card>
        <Card withBorder>
          <Text fw="bold" fz="lg">
            Skalarprodukt
          </Text>
          <Text>
            {Math.round(
              vectorScalarProduct(vector1.getAll(), vector2.getAll()) * 1000
            ) / 1000}
          </Text>
        </Card>
        <Card withBorder>
          <Text fw="bold" fz="lg">
            Winkel zwischen Vektoren
          </Text>
          <Text>
            {Math.round(
              angleBetweenVectors(vector1.getAll(), vector2.getAll()) * 1000
            ) / 1000}
            ° (
            {90-Math.round(
              angleBetweenVectors(vector1.getAll(), vector2.getAll()) * 1000
            ) / 1000}
            °)
          </Text>
        </Card>
      </SimpleGrid>
      <Text c="dimmed" pl="xl">... und das alles nur weil Bastian zu faul ist, einen Taschenrechner zu benutzen.</Text>
    </MantineProvider>
  );
}
