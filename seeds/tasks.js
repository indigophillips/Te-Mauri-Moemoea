
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1, 
          dream_id: 3,
          author_id: 1,
          taha: 'Hinengaro',
          name: 'Disconnect',
          description: 'Turn off my phone and other devices 1 hour before bed to get a good sleep for 1 week'
        },
        {
          id: 2, 
          dream_id: 3,
          author_id: 1,
          taha: 'Wairua',
          name: 'Meditate',
          description: 'Turn off my phone and other devices 1 hour before bed to get a good sleep for 1 week'
        },
        {
          id: 3, 
          dream_id: 3,
          author_id: 1,
          taha: 'Tiana',
          name: 'Go for a run',
          description: 'Go for a run for 30 minutes a day for 1 week'
        },
        {
          id: 4, 
          dream_id: 1,
          author_id: 1,
          taha: 'Whanau',
          name: 'Ask parents for ID',
          description: 'Find my passport or birth certificate to show before the test'
        },
        {
          id: 5, 
          dream_id: 1,
          author_id: 1,
          taha: 'Hinengaro',
          name: 'Study for test',
          description: 'Go to the road code website and take the example tests'
        },
        {
          id: 6, 
          dream_id: 1,
          author_id: 1,
          taha: 'Hinengaro',
          name: 'Schedule test',
          description: 'Call the licensing center to make an appointment'
        },
        {
          id: 7, 
          dream_id: 1,
          author_id: 1,
          taha: 'Whanau',
          name: 'Be a passenger',
          description: 'Ask mum to drive me around to show me what its like to drive'
        },
        {
          id: 8, 
          dream_id: 2,
          author_id: 1,
          taha: 'Hinengaro',
          name: 'Scout Jobs',
          description: 'AFind out what jobs suit me and my skills'
        },
        {
          id: 9, 
          dream_id: 2,
          author_id: 1,
          taha: 'Write CV',
          name: 'Scout Jobs',
          description: 'Complete writing my CV'
        },
        {
          id: 10, 
          dream_id: 2,
          author_id: 1,
          taha: 'Whanau',
          name: 'Speak to Dad',
          description: 'Talk to Dad to see if there are any part time positions at his work'
        }
      ]);
    });
};
