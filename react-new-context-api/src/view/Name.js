import React from 'react'
import { GlobalConsumer } from '../store'

export class Name extends React.Component {
  state = {
    newName: ''
  }
  render() {
    return (
      <GlobalConsumer>
        {({ userFuncs }) => (
          <div>
            <GlobalConsumer>
              {({ name }) => <div>{name}</div>}
            </GlobalConsumer>
            <input onInput={e => this.setState({ newName: e.currentTarget.value })} />
            <button onClick={() => userFuncs.setName(this.state.newName)}>set name</button>
          </div>
        )}
      </GlobalConsumer>
    )
  }
}
