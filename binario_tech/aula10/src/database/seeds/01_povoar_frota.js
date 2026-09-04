exports.seed = async function(knex) {
  // Limpa o banco apenas no primeiro arquivo para evitar duplicação
  await knex('telemetria').del();
  await knex('veiculos').del();

  const [v1] = await knex('veiculos').insert({
    placa: 'VOL-1010',
    montadora: 'Volvo',
    modelo: 'FH 540'
  });

  const [v2] = await knex('veiculos').insert({
    placa: 'SCA-2020',
    montadora: 'Scania',
    modelo: 'R500'
  });

  const veiculo1Id = typeof v1 === 'object' ? v1.id : v1;
  const veiculo2Id = typeof v2 === 'object' ? v2.id : v2;

  await knex('telemetria').insert([
    { veiculo_id: veiculo1Id, velocidade: 80.0, temperatura_motor: 88.5 },
    { veiculo_id: veiculo1Id, velocidade: 85.2, temperatura_motor: 90.1 },
    { veiculo_id: veiculo2Id, velocidade: 92.0, temperatura_motor: 94.8 }
  ]);
};
