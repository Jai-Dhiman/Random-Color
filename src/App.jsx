import { useState, useEffect } from "react";
import { ColorPalette } from "./ColorPalette";
import { GenerateButton } from "./GenerateButton";
import { Notification } from "./Notification";

function App() {
  const [colors, setColors] = useState([]);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    generateNewPalette;
  }, []);

  const generateNewPalette = () => {
    const newColors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"];
    setColors(newColors);
  };

  const handleColorCopy = (color) => {
    navigator.clipboard.writeText(color);
    setNotification(`Copied ${color} to Clipboard`);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div>
      <ColorPalette colors={colors} onColorClick={handleColorCopy} />
      <GenerateButton onClick={generateNewPalette} />
      <Notification message={notification} />
    </div>
  );
}

export default App;
