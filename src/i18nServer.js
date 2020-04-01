import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-node-fs-backend'
import { LanguageDetector } from 'i18next-express-middleware'
import Axios from 'axios'

const defaultLang = 'en'
i18n.use(Backend)
    .use(LanguageDetector)
    .init({
        react: {
            useSuspense: false,
        },
        debug: false,
        lng: defaultLang,
        fallbackLng: 'en',
        whitelist: ['en', 'id'],
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: 'public/locales/{{lng}}/{{ns}}.json',
            ajax: Axios,
        },
    })
export default i18n
