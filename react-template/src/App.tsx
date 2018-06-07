import * as React from 'react'
import { LanguageProvider, withLanguage, WithLanguage } from './lang'
import './App.less'

const SomeView = (props: { name: string, children: React.ReactNode } & WithLanguage) =>
  <div>
    <div>{props.lang.pack.name}</div>
    <div>[{props.children}]</div>
  </div>

class UpdateLang extends React.Component<{} & WithLanguage> {
  render() {
    return (
      <select onChange={e => {
        this.props.lang.set(e.target.value)
      }}>
        {this.props.lang.all.map(p => (
          <option
            key={p.language}
            value={p.language}
          >
            {p.name}
          </option>
        ))}
      </select>
    )
  }
}

const UpdateLangView = withLanguage(UpdateLang)

const LangView = withLanguage(SomeView)

class App extends React.Component {
  render() {
    return (
      <LanguageProvider>
        <div className="App">
          <LangView name="xx">
            ff
          </LangView>
          <UpdateLangView />
        </div>
      </LanguageProvider>
    )
  }
}

export default App
