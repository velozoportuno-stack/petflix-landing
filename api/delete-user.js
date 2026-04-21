export default function handler(req, res) {
  // Meta envia POST ou GET
  if (req.method === "GET") {
    return res.status(200).send("Meta Data Deletion Endpoint ativo");
  }

  if (req.method === "POST") {
    // payload da Meta (user_id / signed_request)
    const { signed_request } = req.body || {};

    // aqui você normalmente validaria o signed_request
    // para projetos simples, apenas retorna confirmação

    const response = {
      url: "https://SEU_DOMINIO.com/api/delete-user",
      confirmation_code: "DELETE_" + Date.now()
    };

    return res.status(200).json(response);
  }

  return res.status(405).send("Method not allowed");
}
