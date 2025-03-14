import { exec } from "child_process";

export default function handler(req, res) {
  exec("node scripts/updateData.js", (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Erreur: ${error.message}`);
      return res.status(500).json({ error: error.message });
    }
    console.log(`✅ Mise à jour des notes: ${stdout}`);
    res.status(200).json({ message: "Mise à jour effectuée !" });
  });
}
