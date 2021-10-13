exports.up = function(knex) {
    return knex.schema.createTable('petshopp',function(table){
        table.increments("id").primary();
        table.string("animal").notNullable();
        table.string("tamanho").notNullable();
        table.string("dono").unique().notNullable();
        table.string("servico").notNullable();
        table.string("data").notNullable();
        table.string("periodo").notNullable();
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('petshop')
  };
  