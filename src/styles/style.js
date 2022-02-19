import styled from "styled-components";

const _white = "#fffffe";
const _black = "#16161a";
const _primary = "#7f5af0";
const _secondary = "#a786df";
const _tertiary = "#72757e";
const _green = "#2cb67d";
const _grey = "#94a1b2";
const _purple = "#6b47dc";
const _neutral = "#232e35";
const _red = "#ef4565";
const _subtitle2 = "600 0.75rem/normal Nunito;";
const _headline_headline1 = "800 2rem/normal Nunito;";
const _headline_headline2 = "700 1.375rem/normal Nunito;";
const _subtitle_subtitle1 = "600 1.125rem/normal Nunito;";
const _body1_regular = "400 1rem/1.5rem Nunito;";
const _body1_bold = "700 1rem/1.5rem Nunito;";
const _body2_regular = "400 0.875rem/normal Nunito;";
const _body2_bold = "700 0.875rem/normal Nunito;";
const _button_button = "600 1rem/normal Nunito;";
const _caption_caption = "400 0.6875rem/normal Nunito";

export const LoadingStyled = styled.div`
  background-color: ${_primary};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginStyled = styled.div`
  background-color: ${_black};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    font: ${_headline_headline1};
    color: ${_white};
  }
  img {
    width: 80px;
    height: 80px;
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${_red};
    width: 90%;
    border-radius: 8px;
    text-align: center;

    p {
      font: ${_button_button};
      color: white;
    }
    .iconGoogleLogin {
      height: 2em;
      margin-right: 5px;
      filter: invert(78%) sepia(94%) saturate(22%) hue-rotate(307deg)
        brightness(107%) contrast(106%);
    }
  }
  .correoElectronico {
    margin-top: 20px;
    width: 90%;
    border-top: 1px solid white;
    color: white;
    p {
      margin-left: 10px;
    }
  }
  .inputText {
    width: 90%;
    height: 40px;
    border-radius: 8px;
    box-sizing: border-box;
    padding-left: 10px;    
  }
  .forgottenPassword {
    margin-top: 25px;
    a {
      color: ${_green};
    }
  }
  .createAccount {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${_white};
    margin-top: 15px;
    a {
      color: ${_green};
      text-decoration: none;
      margin-left: 5px;      
    }
  }
`;
