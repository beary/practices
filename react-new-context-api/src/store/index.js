import React from 'react'

const globalDataContext = React.createContext()

export class GlobalProvider extends React.Component {
  state = {
    name: 'Tom',
    number: 0,
    userFuncs: {
      setName: name => this.setState({ name })
    },
    numberFuncs: {
      addNumber: () => this.setState({ number: this.state.number + 1 })
    }
  }
  render() {
    return (
      <globalDataContext.Provider value={this.state}>
        {this.props.children}
      </globalDataContext.Provider>
    )
  }
}

export const GlobalConsumer = globalDataContext.Consumer
