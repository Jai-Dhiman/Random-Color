import { ColorSwatch } from "./ColorSwatch";

export function ColorPalette({ colors, onColorClick }) {
  return (
    <div className="color-palette">
      {colors.map((color, index) => (
        <ColorSwatch key={index} color={color} onClick={() => onColorClick(color)} />
      ))}
    </div>
  );
}
