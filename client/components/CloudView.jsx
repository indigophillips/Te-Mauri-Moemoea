import React from 'react'
import CloudLayer from './CloudLayer'

const roles = [
  'personal',
  'collaborator',
  'contributor',
  'public'
]

function CloudView ( props ) {
  return (
    <div>
      {roles.map(dreamerRole => (
        <CloudLayer 
        key={dreamerRole} 
        dreamerRole={dreamerRole} 
        dreams={[]}
        />
      ))}
    </div>
  )
}

export default CloudView
