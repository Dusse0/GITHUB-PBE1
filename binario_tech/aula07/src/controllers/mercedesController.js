const caminhao = [
    {
        id: 1,
        modelo: "Actros",
        placa: "ABC1D23",
        vin: "WDB123456789"
    },
    {
        id: 2,
        modelo: "Atego",
        placa: "DEF4G56",
        vin: "WDB987654321"
    }
];

const listar = (req, res) => {
    res.status(200).json(caminhao);
};

const buscarPorId = (req, res) => {
    const id = Number(req.params.id);

    const encontrado = caminhao.find(c => c.id === id);

    if (!encontrado) {
        return res.status(404).json({
            mensagem: "Caminhão não encontrado"
        });
    }

    res.status(200).json(encontrado);
};

const cadastrar = (req, res) => {
    const novoCaminhao = {
        id: caminhao.length + 1,
        ...req.body
    };

    caminhao.push(novoCaminhao);

    res.status(201).json(novoCaminhao);
};

module.exports = {
    listar,
    buscarPorId,
    cadastrar
};
