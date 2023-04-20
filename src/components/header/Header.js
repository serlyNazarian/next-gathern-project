import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./header.module.css";
import LoginButton from "../buttons/LoginButton";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../languageSwitch/LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();

  return (
    <nav className={styles.navRowWrapper}>
      <div className={styles.navRowInnerWrapper}>
        <Link href="/">
          <Image
            className="logo"
            src="/images/logo-placeholder.png"
            alt="client"
            width={150}
            height={50}
          />
        </Link>
        <ul className={styles.navRowUl}>
          <li>
            <Link className={styles.headerLink} href="/">
              {t("WORD_CHARLETS")}
            </Link>
          </li>
          <li>
            <Link className={styles.headerLink} href="/">
              {t("WORD_APARTMENTS")}
            </Link>
          </li>
          <li>
            <Link className={styles.headerLink} href="/">
              {t("WORD_FARMS")}
            </Link>
          </li>
          <li>
            <Link className={styles.headerLink} href="/">
              {t("WORD_CAMPS")}
            </Link>
          </li>
          <li>
            <Link className={styles.headerLink} href="/">
              {t("WORD_OFFERS")}
            </Link>
          </li>
        </ul>
        <LoginButton />
        <div>
          <div>{t("WORD_BROWSE")}</div>
          {/* <Link href="/">Arabic</Link> */}
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Header;
