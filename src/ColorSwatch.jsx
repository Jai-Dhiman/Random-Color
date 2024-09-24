export function ColorSwatch({ color, onClick }) {
  return (
    <div className="color-swatch" style={{ backgroundColor: color }} onClick={onClick}>
      {color}
    </div>
  );
}
