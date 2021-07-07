module.exports = {
  development: {
    client: "sqlite3",

    useNullAsDefault: true,

    connection: {
      filename: "./data/projects.db3"
    },

    migrations: {
      filename: "./data/migrations"
    },

    seeds: {
      filename: "./data/seeds"
    },

    pool: {
      afterCreate: ( conn, done ) => {
        conn.run( "PRAGMA foreign_keys = ON", done )
      }
    }
  }
}