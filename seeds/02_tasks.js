exports.seed = async function(knex) {
  await knex( "tasks" ).insert( [
    { description: "put things away", notes: "pick up your ...stuff", project_id: 1, completed: false },
    { description: "sweep", notes: "pick up your ...stuff", project_id: 1, completed: false },
    { description: "put food in crock pot", notes: "you need to eat", project_id: 2, completed: true  },
    { description: "refer to projects if needed", notes: "code your ...stuff", project_id:3, completed: true  }
  ] )
};
