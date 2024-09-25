import { ColorSwatch } from "./ColorSwatch";

export function ColorPalette({ colors, onColorClick }) {
  if (!colors || colors.length === 0) {
    return console.log("Loading Color Palette...");
  }

  return (
    <div className="color-palette">
      {colors.map((color, index) => (
        <ColorSwatch key={index} color={color} onClick={() => onColorClick(color)} />
      ))}
    </div>
  );
}
