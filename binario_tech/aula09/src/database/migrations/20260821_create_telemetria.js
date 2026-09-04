exports.up = function(knex) {
  return knex.schema.createTable('telemetria', (table) => {
    table.increments('id').primary();
    
    // Removido o 's' extra de veiculos_id -> veiculo_id
    table.integer('veiculo_id').unsigned().notNullable(); 
    table.float('velocidade').notNullable();
    table.float('temperatura_motor').notNullable();
    table.timestamp('capturado_em').defaultTo(knex.fn.now());

    // Definição da Foreign Key com o mesmo nome da coluna acima
    table.foreign('veiculo_id').references('id').inTable('veiculos').onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('telemetria');
};
