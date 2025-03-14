export default async function handler(req, res) {
  const { product_id } = req.query;
  const apiKey = process.env.SERPAPI_KEY;

  if (!product_id || !apiKey) {
    return res.status(400).json({ error: "Missing product_id or API key" });
  }

  const url = `https://serpapi.com/search.json?engine=google_play_product&gl=fr&store=apps&product_id=${product_id}&api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erreur de récupération des données" });
  }
}
