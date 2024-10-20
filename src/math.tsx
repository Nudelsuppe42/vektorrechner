import { Vector } from "./hooks/useVector";

export const vectorProduct = (
  vectorA: Vector,
  vectorB: Vector,
  axis?: "x" | "y" | "z"
) => {
  const res = {
    x: vectorA.y * vectorB.z - vectorA.z * vectorB.y,
    y: vectorA.z * vectorB.x - vectorA.x * vectorB.z,
    z: vectorA.x * vectorB.y - vectorA.y * vectorB.x,
  };
  if (axis) {
    return res[axis];
  } else {
    return res;
  }
};

export const vectorScalarProduct = (vectorA: Vector, vectorB: Vector) => {
  return vectorA.x * vectorB.x + vectorA.y * vectorB.y + vectorA.z * vectorB.z;
};

export const vectorLength = (vector: Vector) => {
  return Math.sqrt(vector.x ** 2 + vector.y ** 2 + vector.z ** 2);
};

export const angleBetweenVectors = (vectorA: Vector, vectorB: Vector) => {
  return Math.acos(
    vectorScalarProduct(vectorA, vectorB) /
      (vectorLength(vectorA) * vectorLength(vectorB))
  )/2/Math.PI*360;
};
