import React from 'react'
import CloudLayer from './CloudLayer'

const roles = [
  'personal',
  'collaborator',
  'contributor',
  'public'
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

function CloudView (props) {
  return (
    <div className='cloudview'>
      {roles.map(dreamerRole => (
        <CloudLayer
          key={dreamerRole}
          dreamerRole={dreamerRole}
          dreams={testDreams}
        />
      ))}
    </div>
  )
}

export default CloudView
