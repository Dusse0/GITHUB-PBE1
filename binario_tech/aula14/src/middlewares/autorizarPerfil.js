const autorizarPerfil = (perfisPermitidos) => {
  return (req, res, next) => {
    if (!req.usuario || !perfisPermitidos.includes(req.usuario.perfil)) {
      return res.status(403).json({
        status: "ERRO",
        mensagem: "Acesso negado. Perfil sem permissão."
      });
    }

    next();
  };
};

module.exports = autorizarPerfil;
