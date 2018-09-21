
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dreams').del()
    .then(function () {
      // Inserts seed entries
      return knex('dreams').insert([
        {
          id: 1, 
          dreamer_id: 1,
          name: 'Learners License',
          description: 'I would like to get my learners drivers license so that I may drive the car to school with mum',
          type: 'personal'
        },
        {
          id: 2, 
          dreamer_id: 1,
          name: 'Part-time Job',
          description: 'I would like to get a part time job so that I can buy a new phone',
          type: 'personal'
        },
        {
          id: 3, 
          dreamer_id: 1,
          name: 'Improve Wellbeing',
          description: 'I want to work on improving my wellbeing to improve my focus at school',
          type: 'personal'
        }
      ]);
    });
};
