import * as React from 'react'
import { load } from 'js-yaml'

import * as zh from '!raw-loader!./zh.yml'
import * as en from '!raw-loader!./en.yml'

interface LanguagePack {
  name: string
  language: string
}

const allPacks = ((...packString: string[]) =>
  packString.map(str => load(str) as LanguagePack))
  (en, zh)

const LANGUAGE_KEY = 'lang'

const searchAndSave = (language: string) => {
  const all = allPacks.map(({ language: lang }) => lang)
  if (!language
    || language.length < 2
    || !all.includes(language)) {
    language = all[0]
  }
  localStorage.setItem(LANGUAGE_KEY, language)
  return allPacks.find(({ language: lang }) => lang === language)
}

interface LanguageProviderStates {
  all: LanguagePack[]
  pack: LanguagePack
  set: (name: string) => void
}

const defaultValue: LanguageProviderStates = {
  all: [],
  pack: null,
  set: () => null
}

const languageContext = React.createContext(defaultValue)

export class LanguageProvider extends React.Component<{}, LanguageProviderStates> {
  constructor(props) {
    super(props)
    this.state = {
      all: allPacks,
      pack: searchAndSave(localStorage.getItem(LANGUAGE_KEY)),
      set: (name: string) => {
        this.setState({ pack: searchAndSave(name) })
      }
    }
  }
  render() {
    return (
      <languageContext.Provider value={this.state}>
        {this.props.children}
      </languageContext.Provider>
    )
  }
}

export interface WithLanguage {
  lang?: LanguageProviderStates
}

export function withLanguage<P>(C: React.ComponentType<P & WithLanguage>) {
  return (props: P) => {
    const { lang, ...withoutLanguage } = props as any
    return (
      <languageContext.Consumer>
        {states => <C {...withoutLanguage} lang={states} />}
      </languageContext.Consumer>
    )
  }
}
