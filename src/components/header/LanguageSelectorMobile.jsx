import React from "react";
import styled from "styled-components";

// Variables
import { colors } from "../../shared/styles";

// Styles
const LanguageSelectorMobileStyles = styled.div`
  .heading {
    font-size: 32px;
    font-weight: 900;
  }
`;

const LinkTranslate = styled.a`
  color: ${colors.black};
  cursor: pointer;
  display: inline-block;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.6px;
  line-height: 28px;
  margin-bottom: 1rem;
  padding-bottom: 4px;
  text-decoration: none;
  font-size: 32px;
  font-weight: 900;

  &:hover {
    color: ${colors.black} !important;
    text-decoration: none !important;
  }

  &:visited {
    color: ${colors.black} !important;
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
    color: ${colors.black};
    border-bottom: 4px solid ${colors.black};
  }
`;

const LanguageSelectorMobile = ({
  languages,
  languagesLabel,
  changeLocale,
  language,
  isOpen,
  setIsOpen,
}) => {
  return (
    <LanguageSelectorMobileStyles>
      <div>
        <p className="heading">{languagesLabel}:</p>
      </div>
      {Object.keys(languages).map((key, index) => {
        return (
          <div key={index}>
            <LinkTranslate
              onClick={() => {
                changeLocale(key);
                setIsOpen(!isOpen);
              }}
              className={language === key ? "active" : null}
            >
              {languages[key]}
            </LinkTranslate>
            <br />
          </div>
        );
      })}
    </LanguageSelectorMobileStyles>
  );
};

export default LanguageSelectorMobile;
