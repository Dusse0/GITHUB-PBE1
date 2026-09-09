const verificarJson = (req, res, next) => {
  if (
    req.method === 'POST' &&
    req.get('Content-Type') !== 'application/json'
  ) {
    return res.status(400).json({
      status: "ERRO_CONTENT_TYPE",
      mensagem: "A requisição POST deve possuir Content-Type: application/json."
    });
  }

  next();
};

module.exports = verificarJson;
