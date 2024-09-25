export function ColorSwatch({ color, onClick }) {
  return (
    <div className="color-swatch" onClick={onClick}>
      <div className="color-box" style={{ backgroundColor: color }}></div>
      <div className="color-text">{color}</div>
    </div>
  );
}
