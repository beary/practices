import React from 'react'
import { GlobalConsumer } from '../store'

export class Home extends React.Component {
  render() {
    return (
      <GlobalConsumer>
        {({ number, name, numberFuncs }) => (
          <div>
            <p>{name}:{number}</p>
            <button onClick={numberFuncs.addNumber}>add</button>
          </div>
        )}
      </GlobalConsumer>
    )
  }
}
