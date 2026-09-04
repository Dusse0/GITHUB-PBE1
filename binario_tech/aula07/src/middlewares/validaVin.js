const validaVin = (req, res, next) => {
    const { vin } = req.body;

    if (!vin) {
        return res.status(400).json({
            mensagem: "VIN é obrigatório"
        });
    }

    if (typeof vin !== "string" || vin.length !== 12) {
        return res.status(400).json({
            mensagem: "VIN deve possuir exatamente 12 caracteres"
        });
    }

    next();
};

module.exports = validaVin;
