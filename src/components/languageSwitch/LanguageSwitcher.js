import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    router.push(router.pathname, router.asPath, { locale: lng });
  };

  return (
    <div>
      <div onClick={() => changeLanguage("en")}>English</div>
      <div onClick={() => changeLanguage("ar")}>Arabic</div>
    </div>
  );
};

export default LanguageSwitcher;
