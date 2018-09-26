import React, {Component} from 'react'

import ExpandedTaskCreator from './TaskCreators/Selected'

import {
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from 'react-accessible-accordion';

export class TahaLayer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle (open) {
    this.setState({
      open
    })
  }

  render () {
    return (
      <AccordionItem>
        <AccordionItemTitle>
          <h5 className='title is-5'>{this.props.taha}</h5>
        </AccordionItemTitle>
        <AccordionItemBody>
          <ExpandedTaskCreator 
            taha={this.props.taha} 
          />
        </AccordionItemBody>
      </AccordionItem>
    )
  }
}

export default TahaLayer
