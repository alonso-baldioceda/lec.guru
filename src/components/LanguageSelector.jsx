import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import ClassNames from "classnames";

// Styles
const LinkTranslate = styled.a`
  border-bottom: 2px solid transparent;
  color: var(--black);
  cursor: pointer;
  display: initial;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.6px;
  line-height: 28px;
  margin-bottom: 0.5rem;
  margin-right: 0.75rem;
  padding-bottom: 4px;
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid var(--terracotta);
    color: var(--white) !important;
    text-decoration: none !important;
  }

  &:visited {
    color: var(--white) !important;
    text-decoration: none;
  }

  @media (min-width: 1200px) {
    margin-right: 1.25rem;

    &:hover {
      color: var(--black) !important;
    }

    &:visited {
      color: var(--black) !important;
    }

    &:focus {
      outline: none;
    }
  }

  &.active {
    border-bottom: 2px solid var(--terracotta);
  }
`;

const LanguageSelector = ({ languagesList }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(0);
  const [open, setOpen] = useState(false);
  //   const context = useContext(GlobalContext);
  //   const { language, setLanguage, open } = context;

  const [, setValues] = useState({
    language: "en",
  });

  const changeLocale = (key) => {
    i18n.changeLanguage(key);
    setValues((oldValues) => ({
      ...oldValues,
      language: key,
    }));
  };

  return (
    <div className="languagues">
      {Object.keys(languagesList).map((key, index) => {
        return (
          <LinkTranslate
            key={key}
            onClick={() => {
              changeLocale(key);
              open !== undefined &&
                setLanguage !== undefined &&
                setLanguage(index);
            }}
            className={ClassNames("lang", {
              active: language === index,
            })}
          >
            {languagesList[key]}
          </LinkTranslate>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
