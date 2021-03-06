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
export const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${_black};
  height: 100vh;
  h3 {
    font: ${_subtitle_subtitle1};
    color: ${_white};
    text-align: center;
    margin: 12px 30px;
  }
  .opciones {
    width: 100%;
    margin-top: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 50px;
    .row1 {
      display: flex;
      width: 100%;
      justify-content: center;
    }
    .row2 {
      display: flex;
      width: 100%;
      justify-content: space-around;
    }
    .row3 {
      display: flex;
      width: 100%;
      justify-content: space-around;
    }
    .item {
      display: flex;
      margin: 5px;
      flex-direction: column;
      align-items: center;
      width: 96px;
      height: 128px;
      img {
        height: 64px;
        width: 64px;
        margin: 5px;
      }
      .progressRound {
        border-radius: 100%;
        height: 74px;
        width: 74px;
        margin: 10px;
        background-color: ${_black};
      }
      .fill {
        
        --fg: ${_green};
        --bg: #DDDDDD;
        --pgPercentage: var(--value);

        border-radius: 50%;

        background: radial-gradient(
            closest-side,
            white 80%,
            transparent 0 99.9%,
            white 0
          ),
          conic-gradient(var(--fg) calc(var(--pgPercentage) * 1%), var(--bg) 0);
      }
      p {
        color: ${_white};
        font: ${_body1_bold};
        margin-top: 7px;
        margin-bottom: 0px;
      }
    }
  }
`;
export const NavBarStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  bottom: 0;
  position: sticky;
  background-color: ${_neutral};
  height: fit-content;

  .navBarIcon {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${_white};
    img {
      width: 24px;
      height: 24px;
      filter: invert(78%) sepia(94%) saturate(22%) hue-rotate(307deg)
        brightness(107%) contrast(106%);
      margin-top: 5px;
    }

    :hover {
      color: ${_green};
      filter: invert(52%) sepia(95%) saturate(331%) hue-rotate(103deg)
        brightness(95%) contrast(88%);
    }
    margin: 5px 1px 0px 0px;
  }
`;
