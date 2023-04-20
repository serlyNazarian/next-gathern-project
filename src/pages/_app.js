import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@/styles/fonts.css";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n/i18n";
// import LanguageSwitcher from "@/components/languageSwitch/LanguageSwitcher";

export default function App({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Layout>
        <Component {...pageProps} />
        {/* <LanguageSwitcher /> */}
      </Layout>
    </I18nextProvider>
  );
}
