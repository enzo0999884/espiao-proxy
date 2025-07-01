export default async function handler(req, res) {
  const numero = req.query.numero;

  if (!numero) {
    return res.status(400).json({ error: 'Número não informado' });
  }

  try {
    const response = await fetch(`https://whatsdetect.app/api/imagem.php?numero=${numero}`);
    const buffer = await response.arrayBuffer();

    res.setHeader('Content-Type', 'image/jpeg');
    res.send(Buffer.from(buffer));
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar imagem' });
  }
}
