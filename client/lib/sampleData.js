export const user = {
  id: 1,
  gender: 'female',
  iwi: 'Ngāti Tūwharetoa',
  kaitiaki:	'kahu',
  email:	'georgie1002y@gmail.com',
  first_name:	'Georgina',
  last_name:	'Mikaere'
}

export const personalDreams = [
  {
    name: 'Get my learners drivers license',
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
    name: 'Get a part-time job',
  },
  {
    name: 'Work on my well being'
  }
]

export const whanauDreams = [
  {
    name: 'Improve Whanau Communication'
  },
  {
    name: 'Take a trip to the Gold Coast'
  }
]

export const contributorDreams = [
  {
    name: 'Build a computer'
  }
]

export const publicDreams = [
  {
    name: 'Build a computer'
  }
]

export const whanau = [
  {
    id: 1,
    name: '',
    description: '',
    member_ids: [
      2,
      3
    ]
  }
]

export const whanau_members = [
  {
    id: 2,
    fist_name: '',
    last_name: ''
  },
  {
    id: 3,
    fist_name: '',
    last_name: ''
  }
]
