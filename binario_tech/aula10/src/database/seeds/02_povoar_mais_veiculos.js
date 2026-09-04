exports.seed = async function(knex) {
  // SEM knex().del() AQUI! Mantém os registros do arquivo 01 intactos.

  const [v3] = await knex('veiculos').insert({
    placa: 'MBB-7070',
    montadora: 'Mercedes-Benz',
    modelo: 'M340'
  });

  const [v4] = await knex('veiculos').insert({
    placa: 'DAF-1030',
    montadora: 'DAF',
    modelo: 'D850'
  });

  const veiculo3Id = typeof v3 === 'object' ? v3.id : v3;
  const veiculo4Id = typeof v4 === 'object' ? v4.id : v4;

  await knex('telemetria').insert([
    { veiculo_id: veiculo3Id, velocidade: 70.0, temperatura_motor: 84.0 },
    { veiculo_id: veiculo4Id, velocidade: 65.0, temperatura_motor: 82.0 },
    { veiculo_id: veiculo4Id, velocidade: 92.0, temperatura_motor: 97.5 } // Alerta > 95°C
  ]);
};
