import React from 'react'

import TahaLayer from './TahaLayer'

import {
  Accordion
} from 'react-accessible-accordion';

const ngaTaha = [
  'whānau',
  'wairua',
  'hinengaro',
  'tinana'
]

export const TaskCreation = props => {
  return (
    <Accordion>
      {ngaTaha.map(taha => (
        <TahaLayer
          key={taha}
          taha={taha}
        />
      ))}
    </Accordion>
  )
}

export default TaskCreation
