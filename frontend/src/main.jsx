import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import i18n from "i18next";
import ICU from 'i18next-icu';
import {initReactI18next} from "react-i18next";
import { withTolgee, Tolgee, I18nextPlugin, FormatSimple } from '@tolgee/i18next';

const defaultLanguage = localStorage.getItem("i18nextLng") || "en";

const tolgee = Tolgee()
  .use(I18nextPlugin())
.use(FormatSimple())
.init({
  apiUrl: import.meta.env.REACT_APP_TOLGEE_API_URL,
  apiKey: import.meta.env.REACT_APP_TOLGEE_API_KEY,
  ui: import.meta.env.REACT_APP_TOLGEE_API_KEY
    ? require('@tolgee/ui').UI
    : undefined,
    defaultLanguage,
});

withTolgee(i18n, tolgee)
.use(ICU)
.use(initReactI18next)
.init({
  supportedLngs: ['en', 'cs'],
  fallbackLng: defaultLanguage,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense
  tolgee={tolgee}
  fallback="Loading..." // loading fallback
>
    <App />
    </Suspense>
  </React.StrictMode>,
)
