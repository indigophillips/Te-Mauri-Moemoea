import React from 'react'
import CloudLayer from './CloudLayer'
import NewDreamCloud from './NewDreamCloud'

const roles = [
  'personal',
  'collaborator',
  'contributor',
  'public',
  'random'
]

const testDreams = [
  {
    id: 1,
    name: 'Get my learners drivers license',
    description: 'I would like to get my learners drivers license so that I may drive the car to school with mum'
  },
  {
    id: 2,
    name: 'Find a part time job',
    description: 'I would like to get a part time job so that I can buy a new phone'
  }
]

const CloudView = (props) => {
  return (
    <div className='cloudView level'>
      {roles.map(dreamerRole => (
        <CloudLayer
          key={dreamerRole}
          dreamerRole={dreamerRole}
          dreams={testDreams}
        />
      ))}
      <NewDreamCloud />
    </div>
  )
}

export default CloudView
