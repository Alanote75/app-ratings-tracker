const { exec } = require("child_process");
const path = require("path");

export default function handler(req, res) {
  const scriptPath = path.join(process.cwd(), "scripts/updateData.js");

  exec(`node ${scriptPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Erreur d'exécution: ${stderr}`);
      return res.status(500).json({ error: stderr });
    }
    console.log(`✅ Mise à jour réussie: ${stdout}`);
    res.status(200).json({ message: "Mise à jour des notes réussie" });
  });
}
