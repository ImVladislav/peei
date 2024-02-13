// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';

// i18n
//   // .use(initReactI18next)
//   .use(LanguageDetector)
//   .init({
//     debug: true,
//     supportedLngs: ['en', 'uk'],
//     fallbackLng: "en",
//     detection: {
//       order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
//       caches: ['cookie']
//     },
//     resources: {
//       en: {
//         translation: {
//           SafetyRules: "Safety Rules",
//           // aboutUs: "About Us",
//           // activities: "Activities",
//           // news: "News",
//           // support: "Support",
//           // contacts: "Contacts"
//           // Додайте інші переклади за потреби
//         },
//       },
//       uk: {
//         translation: {
//           SafetyRules: "Сафеті Рулеріс",
//           // aboutUs: "Про нас",
//           // activities: "Напрямки діяльності",
//           // news: "Новини",
//           // support: "Підтримати",
//           // contacts: "Контакти"
//           // Додайте інші переклади за потреби
//         },
//       },
//     },
//     // lng: "uk", // мова за замовчуванням
//     // interpolation: {
//     //   escapeValue: false, // не екрануйте рядки, якщо вони містять HTML
//     // },
//   });

// export default i18n;

import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default,
}));
