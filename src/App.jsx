import { useState, useEffect } from "react";
import { ColorPalette } from "./ColorPalette";
import { GenerateButton } from "./GenerateButton";
import { Notification } from "./Notification";
import axios from "axios";

function App() {
  const [colors, setColors] = useState([]);
  const [notification, setNotification] = useState(null);

  const generateNewPalette = () => {
    // console.log("Generating New Palette");
    axios({
      method: "post",
      url: "http://colormind.io/api/",
      data: JSON.stringify({ model: "default" }),
      headers: {
        "Content-Type": "text/plain",
      },
    })
      .then((response) => {
        const newColors = response.data.result.map((rgb) => `rgb(${rgb.join(",")})`);
        console.log(newColors);
        setColors(newColors);
      })
      .catch((error) => {
        console.error("Error fetching color palette:", error);
        setNotification("Failed to generate new palette. Please try again.");
      });
  };

  useEffect(() => {
    generateNewPalette();
  }, []);

  const handleColorCopy = (color) => {
    navigator.clipboard.writeText(color);
    setNotification(`Copied ${color} to Clipboard`);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div>
      <ColorPalette colors={colors} onColorClick={handleColorCopy} />
      <GenerateButton onClick={generateNewPalette} />
      {notification && <Notification message={notification} />}
    </div>
  );
}

export default App;
