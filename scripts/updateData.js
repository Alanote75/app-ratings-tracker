const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "../public/data.json");

// Fonction de mise à jour des notes
function updateData() {
  let data = { history: [] };

  if (fs.existsSync(dataFilePath)) {
    data = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));
  }

  const newEntry = {
    date: new Date().toISOString(),
    ratings: {
      android: Math.random() * 5, // Simulation des nouvelles notes Android
      ios: Math.random() * 5 // Simulation des nouvelles notes iOS
    }
  };

  data.history.push(newEntry);
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  console.log("✅ Données mises à jour :", newEntry);
}

// Exécuter la mise à jour
updateData();
