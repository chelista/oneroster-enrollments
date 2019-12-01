exports.up = function(knex) {
  return knex.schema.
      createTable('school', table => {
        table.increments('id').primary();
        table.string('creation_id', 16);
        table.string('name', 32);
      }).
      createTable('class', table => {
        table.increments('id').primary();
        table.integer('school_id').
            unsigned().
            references('id').
            inTable('school').
            onDelete('RESTRICT').
            index();
        table.string('creation_id', 16);
        table.string('name', 32);
      }).
      createTable('user', table => {
        table.increments('id').primary();
        table.string('creation_id', 16);
        table.string('username', 16);
        table.string('password', 16);
        table.string('first_name', 24);
        table.string('last_name', 24);
        table.enum('type', ['student', 'teacher']);
      });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('user').
      dropTableIfExists('class').
      dropTableIfExists('school');
};
