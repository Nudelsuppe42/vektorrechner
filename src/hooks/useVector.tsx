import { useState } from "react";

export type Vector = {x: number, y: number, z: number};

export enum Axis {
  X = "x",
  Y = "y",
  Z = "z",
}

const useVector = (initialVector: Vector = {x:0,y:0,z:0}) => {
  const [vector, setVector] = useState<Vector>(initialVector);

  const set = (axis: "x"|"y"|"z", value: number) => {
    setVector((prevVector) => {
      return {
        ...prevVector,
        [axis]: value,
      };
    });
  };

  const get = (axis: "x" | "y" | "z"): number => {
    return vector[axis];
  };

  const setAll = (newVector: Vector) => {
    setVector(newVector);
  };

  const getAll = (): Vector => {
    return vector;
  };

  return {
    vector,
    set,
    get,
    setAll,
    getAll,
    x: vector.x,
    y: vector.y,
    z: vector.z,
    
  };
};

export default useVector;
