exports.seed = async function(knex) {
  await knex( "projects" ).insert( [
    { name: "clean house", description: "pick up your ...stuff", completed: false },
    { name: "make dinner", description: "you need to eat", completed: true },
    { name: "finish sprit challenge", description: "code your ...stuff", completed: true }
  ] )
};
