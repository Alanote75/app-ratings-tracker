const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "../public/data.json");

// Fonction de mise à jour
function updateData(newAndroidRating, newIOSRating) {
  let data = { history: [] };

  // Charger l'historique existant
  if (fs.existsSync(dataFilePath)) {
    data = JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
  }

  // Ajouter une nouvelle entrée avec la date du jour
  const newDataPoint = {
    date: new Date().toISOString().split("T")[0],
    android: newAndroidRating,
    ios: newIOSRating
  };

  data.history.push(newDataPoint);

  // Sauvegarde des données mises à jour
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  console.log("✅ Données mises à jour :", newDataPoint);
}

// Exécuter la mise à jour avec des valeurs aléatoires (TEST)
updateData(Math.random() * 5, Math.random() * 5);
