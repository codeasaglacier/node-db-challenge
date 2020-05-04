exports.seed = async function(knex) {
  await knex( "resources" ).insert( [
    { name: "broom", description: "sweepy stick" },
    { name: "crock pot", description: "me cook you long time" },
    { name: "computer", description: "rock with electricity inside" }
  ] )
};