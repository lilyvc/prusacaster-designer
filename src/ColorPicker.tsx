import React, { useState, ChangeEventHandler } from 'react';

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange }) => {
  const [currentColor, setCurrentColor] = useState<string>(color);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newColor = event.target.value;
    setCurrentColor(newColor);
    onChange(newColor);
    // logColor(newColor);
  };

  const logColor = (color: string) => {
    console.log(color);
  }

  return (
    <input type="color" value={currentColor} onChange={handleChange} />
  );
};

export default ColorPicker;
