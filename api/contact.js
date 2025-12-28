export default async function handler(req, res) {
  if (req.method === "POST") {
    const access_key = process.env.WEB3FORMS_KEY;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...req.body, access_key })
      });

      const result = await response.json();
      res.status(result.success ? 200 : 400).json(result);
    } catch (error) {
      res.status(500).json({ success: false });
    }
  } else {
    res.status(405).json({ success: false });
  }
}
