import { NumberInput } from "@mantine/core";
import React from "react";

interface VectorInputProps {
  x: number;
  y: number;
  z: number;
  onChange: (vector: { x: number; y: number; z: number }) => void;
}

const VectorInput: React.FC<VectorInputProps> = ({ x, y, z, onChange }) => {
  const handleChange = (axis: "x" | "y" | "z", value: number) => {
    onChange({
      x: axis === "x" ? value : x,
      y: axis === "y" ? value : y,
      z: axis === "z" ? value : z,
    });
  };

  return (
    <div>
      <NumberInput
        value={x}
        allowNegative
        allowDecimal
        onChange={(value) => handleChange("x", parseFloat(value + "") || 0)}
        radius={0}
        maw={200}
      />
      <NumberInput
        value={y}
        allowNegative
        allowDecimal
        onChange={(value) => handleChange("y", parseFloat(value + "") || 0)}
        radius={0}
        maw={200}
      />
      <NumberInput
        value={z}
        allowNegative
        allowDecimal
        onChange={(value) => handleChange("z", parseFloat(value + "") || 0)}
        radius={0}
        maw={200}
      />
    </div>
  );
};

export default VectorInput;
