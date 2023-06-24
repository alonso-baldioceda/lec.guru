import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import ClassNames from "classnames";

// Variables
import { colors } from "../../shared/styles";

// Styles
const LanguageSelectorDesktopStyles = styled.div`
  border-left: 2px solid ${colors.white};
  margin-left: 22px;
  padding-left: 22px;
`;

const LinkTranslate = styled.a`
  border-bottom: 2px solid transparent;
  color: ${colors.white};
  cursor: pointer;
  display: initial;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.6px;
  line-height: 28px;
  margin-bottom: 0.5rem;
  padding-bottom: 4px;
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid ${colors.white};
    color: ${colors.marinoLighter} !important;
    text-decoration: none !important;
  }

  &:visited {
    color: ${colors.white} !important;
    text-decoration: none;
  }

  @media (min-width: 992px) {
    margin-right: 22px;

    &:hover {
      color: ${colors.marinoLighter} !important;
    }

    &:visited {
      color: ${colors.marinoLighter} !important;
    }

    &:focus {
      outline: none;
    }
  }

  &.active {
    border-bottom: 2px solid ${colors.rouge};
  }
`;

const LanguageSelectorDesktop = ({ languagesList }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(0);
  const [open, _] = useState(false);

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
    <LanguageSelectorDesktopStyles>
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
    </LanguageSelectorDesktopStyles>
  );
};

export default LanguageSelectorDesktop;
