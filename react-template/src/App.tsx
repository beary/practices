import * as React from 'react'
import { LanguageProvider, withLanguage, WithLanguage } from './lang'
import './App.less'

interface Ps {
  name: string
}

class SomeView extends React.Component<WithLanguage> {
  render() {
    return (
      <div>
        <div>{this.props.lang.pack.name}</div>
        <div>[{this.props.children}]</div>
      </div>
    )
  }
}

const LangView = withLanguage(SomeView)

class App extends React.Component {
  render() {
    return (
      <LanguageProvider>
        <div className="App">
          <LangView>
            ff
          </LangView>
        </div>
      </LanguageProvider>
    )
  }
}

export default App
