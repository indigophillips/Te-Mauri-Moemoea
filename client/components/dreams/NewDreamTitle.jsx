import React, {Fragment} from 'react'

// const addWhanau = () => {

// }

const NewDreamTitle = (props) => {
  // const id = 
  return (
    <Fragment>
      {/* <Link to='/user/:id'></Link> */}
      <label>Dream Name</label>
      <input onClick={props.handleChange} placeholder='Dream Name'
        value='dreamName' name='dreamName' id='dreamName'>
      </input>
      <label>Who can help me?</label>
      {/* <button onClick={this.addWhanau}>+</button> */}
    </Fragment>
  )
}

export default NewDreamTitle
