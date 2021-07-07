
exports.up = async function(knex) {
  await knex.schema.createTable( "projects", ( table ) => {
    table.increments( "id" )
    table.text( "name" ).notNull().unique()
    table.text( "description" )
    table.boolean( "completed" ).notNull().defaultTo( "false" )
  } )

  await knex.schema.createTable( "tasks", ( table ) => {
    table.increments( "id" )
    table.text( "description" ).notNull().unique()
    table.text( "notes" )
    table.integer( "project_id" ).notNull()
    table.boolean( "completed" ).notNull().defaultTo( "false" )
  } )

  await knex.schema.createTable( "resources", ( table ) => {
    table.increments( "id" )
    table.text( "name" ).notNull().unique()
    table.text( "description" )
  } )

  await knex.schema.createTable( "project_resources", ( table ) => {
    table.integer( "project_id" ).notNull()
    table.integer( "resource_id" ).notNull()
  } )
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists( "project_resources" )

  await knex.schema.dropTableIfExists( "projects" )

  await knex.schema.dropTableIfExists( "tasks" )

  await knex.schema.dropTableIfExists( "resources" )
};
