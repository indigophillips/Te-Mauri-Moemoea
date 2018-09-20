import React from 'react'
import CloudLayer from './CloudView'

const roles = [
  'personal',
  'collaborator',
  'contributor',
  'public'
]

function CloudView ( props ) {
  return (
    <div>
      {roles.map(dreamerRole => <CloudLayer dreamerRole={dreamerRole}/>)}
    </div>
  )
}

export default CloudView
