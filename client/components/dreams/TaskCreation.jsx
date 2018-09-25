import React, {Component} from 'react'

import TahaLayer from './TahaLayer'

const ngaTaha = [
  'whānau',
  'wairua',
  'tinana',
  'hinengaro'
]

export const TaskCreation = props => {
  return (
    <section className='section'>
      <div className='container'>
        {ngaTaha.map(taha => {
          return (
            <TahaLayer
              key={taha}
              taha={taha}
            />
          )
        })}
      </div>
      <div className='is-divider'></div>
    </section>
  )
}

export default TaskCreation