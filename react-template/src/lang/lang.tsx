import * as React from 'react'
import { load } from 'js-yaml'

import zh from '!raw-loader!zh.yml'
import en from '!raw-loader!en.yml'

interface LanguagePack {
  name: string
}

const allPacks = ((...packString: string[]) =>
  packString.map(str => load(str) as LanguagePack))
  (zh, en)

export const LANGUAGE_KEY = 'lang'

const defaultSetting = localStorage.getItem(LANGUAGE_KEY) || navigator.language

const languageContext = React.createContext('')
