export const user = {
  id: 1,
  gender: 'female',
  iwi: 'Ngāti Tūwharetoa',
  kaitiaki: 'kahu',
  email: 'georgie1002y@gmail.com',
  first_name: 'Georgina',
  last_name: 'Mikaere'
}

export const personalDreams = [
  {
    id: 1,
    name: 'Get my learners drivers license',
    scope: 'personal',
    description: 'I would like to get my learners drivers license so that I may drive the car to school with mum',
    tasks: [
      {
        name: 'Ask mum/dad for my ID',
        description: 'Find my passport or birth certificate to show before the test',
        taha: 'whānau',
        done: true,
        due_date: 'none'
      },
      {
        name: 'Study for test',
        description: 'Go to the road code website and take the example tests',
        taha: 'hinengaro',
        done: false,
        due_date: 'none'
      },
      {
        name: 'Be a passenger',
        description: 'Ask mum to drive me around to show me what its like to drive',
        taha: 'whānau',
        done: false,
        due_date: 'none'
      }
    ]
  },
  {
    id: 2,
    name: 'Find a part time job',
    description: 'I would like to get a part time job so that I can buy a new phone',
    tasks: [
      {
        name: 'Figure out what jobs there are',
        description: 'Find out what jobs suit me and my skills',
        taha: 'hinengaro',
        done: false,
        due_date: 'none'
      },
      {
        name: 'Write my C.V',
        description: 'Complete writing my C.V',
        taha: 'hinengaro',
        done: true,
        due_date: 'none'
      },
      {
        name: 'Speak to Dad',
        description: 'Talk to Dad to see if there are any part time jobs at his work',
        taha: 'whānau',
        done: false,
        due_date: 'none'
      }
    ]
  },
  {
    id: 3,
    name: 'Improve my wellbeing',
    description: 'I want to work on improving my wellbeing to improve my focus at school',
    tasks: [
      {
        name: 'Go for a run',
        description: 'Go for a run for 30 minutes a day for 1 week',
        taha: 'tinana',
        done: false,
        due_date: '10/10/2018'
      },
      {
        taha: 'whānau',
        done: false
      },
      {
        taha: 'whānau',
        done: true
      },
      {
        taha: 'whānau',
        done: true
      },
      {
        name: 'Disconnect',
        description: 'Turn off my phone and other devices 1 hour before bed to get a good sleep for 1 week',
        taha: 'hinengaro',
        done: false,
        due_date: '10/10/2018'
      },
      {
        name: 'Meditate',
        description: 'Meditate for 10 minutes a day to de-stress for 1 week',
        taha: 'wairua',
        done: false,
        due_date: '10/10/2018'
      }
    ]
  }
]

export const whanauDreams = [
  {
    id: 4,
    name: 'Take a family trip to the Gold Coast',
    scope: 'whanau',
    description: 'Our whānau would like to take a trip to the Gold Coast for 2 weeks',
    tasks: [
      {
        name: 'Pick a date',
        taha: 'whānau',
        description: 'Choose a date which suits everyone',
        done: true,
        due_date: '1/11/2018'
      },
      {
        name: 'Passports',
        taha: 'hinengaro',
        description: 'Ensure everyones passports are current',
        done: false,
        due_date: 'none'
      },
      {
        name: 'Accomodation',
        taha: 'whānau',
        description: 'Book suitable accomodation',
        done: false,
        due_date: 'none'
      },
      {
        taha: 'tinana',
        done: true
      }
    ]
  }
]

export const contributorDreams = [
  {
    id: 5,
    name: 'School Mural',
    scope: 'contributor',
    description: 'Help to create a mural on the new building at school',
    tasks: [
      {
        name: 'Painting the mural',
        taha: 'whānau',
        description: 'Contribute to the painting of the school mural',
        done: false,
        due_date: '23/12/2018'
      },
      {
        taha: 'tinana',
        done: true
      },
      {
        taha: 'hinengaro',
        done: false
      },
      {
        taha: 'hinengaro',
        done: true
      }
    ]
  }
]

export const publicDreams = [
  {
    id: 6,
    name: 'Make the world a better place',
    scope: 'public',
    description: 'Spread happiness one smile at a time',
    tasks: [
      {
        name: 'Painting the mural',
        taha: 'whānau',
        description: 'Contribute to the painting of the school mural',
        done: false,
        due_date: '23/12/2018'
      }
    ]
  },
  {
    id: 7,
    name: 'Build a Computer',
    scope: 'public',
    description: 'I would like to know how to build a computer',
    tasks: [
      {
        name: 'Painting the mural',
        taha: 'wairua',
        description: 'Contribute to the painting of the school mural',
        done: true,
        due_date: '23/12/2018'
      },
      {
        name: 'Painting the mural',
        taha: 'wairua',
        description: 'Contribute to the painting of the school mural',
        done: false,
        due_date: '23/12/2018'
      },
      {
        name: 'Painting the mural',
        taha: 'wairua',
        description: 'Contribute to the painting of the school mural',
        done: true,
        due_date: '23/12/2018'
      }
    ]
  },
  {
    id: 8,
    name: 'Improve my maths abilities',
    scope: 'public',
    description: 'I would like to pair up with someone to become better at maths',
    tasks: [
      {
        name: 'Painting the mural',
        taha: 'whānau',
        description: 'Contribute to the painting of the school mural',
        done: false,
        due_date: '23/12/2018'
      },
      {
        taha: 'hinengaro',
        done: true
      },
      {
        taha: 'whānau',
        done: true
      },
      {
        taha: 'wairua',
        done: true
      }
    ]
  }
]


// unused below
export const whanau = [
  {
    id: 1,
    name: 'Mikaere-Akarana Whanau',
    description: 'The Mikaere-Akarana Whanau',
    member_ids: [
      2,
      3
    ]
  }
]
// eslint-disable-next-line
export const whanau_members = [
  {
    id: 2,
    fist_name: 'Hori',
    last_name: 'Akarana'
  },
  {
    id: 3,
    fist_name: 'Eden',
    last_name: 'Mikaere'
  }
]
