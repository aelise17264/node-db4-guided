
exports.seed = function(knex) {
//dont need the reset since we have a cleanup file
      // Inserts seed entries
const tracks = [
  {
    name: 'web'// id: 1
  },{
    name: 'data science'//id: 2
  },{
    name: 'AI'//id: 3
  }
]

      return knex('tracks').insert(tracks);
    
};
