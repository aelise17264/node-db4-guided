
exports.up = function(knex) {
  return knex.schema.createTable('tracks', tbl => {
      tbl.increments();
      tbl.string('name').notNullable().unique();
   })
  .createTable('cohorts', tbl => {
    tbl.increments();
    tbl.string('name').notNullable().unique();
    tbl.integer('track_id').unsigned()
    .references('id')
    .inTable('tracks')
//can also say .references('tracks.id')
    .onDelete('RESTRICT') //CASCADE, SET NULL
    .onUpdate('CASCADE')//if any changes in the table being referenced it will change it in this table
    
})
.createTable('students', tbl => {
    tbl.increments();
    tbl.string('name').notNullable().index()
})

.createTable("cohort_students", tbl => {
    tbl.increments();
    tbl.date("joined_on").notNullable();
    tbl.date("until");
    tbl.integer("cohort_id")
        .unsigned()
        .references("id")
        .inTable("cohorts")
        .onDelete("RESTRICT") 
        .onUpdate("CASCADE");
    tbl.integer("student_id")
        .unsigned()
        .references("id")
        .inTable("students")
        .onDelete("RESTRICT") 
        .onUpdate("CASCADE");
  
})
  

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cohort_students')
  return knex.schema.dropTableIfExists('students')
  return knex.schema.dropTableIfExists('cohorts')
  return knex.schema.dropTableIfExists('tracks')
};
