import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const BannerWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-color: ${themeGet('color.1', '#ffffff')};

  @media only screen and (max-width: 991px) {
    > div {
      max-width: 100%;
    }
  }

  .glide,
  .glide__track,
  .glide__slides {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: all;
  }

  .glide__slide {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.7;
    }
  }

  .glide__bullets {
    position: absolute;
    bottom: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .glide__bullet {
    width: 12px;
    height: 12px;
    background-color: ${themeGet('color.1', '#ffffff')};
    transition: width 0.3s ease;
  }

  .glide__bullet--active {
    /* width: 25px;
    border-radius: 8px;
    background-color: ${themeGet('color.1', '#ffffff')}; */
  }

  > div {
    position: relative;
    min-height: 100vh;
  }

  &:after {
    display: block;
    content: '';
    width: 100%;
    height: 60%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
    pointer-events: none;
    z-index: 0;
  }
`;

export const BannerImage = styled.div`
   background-image: url(${(prop) => prop.url});
   width: 100%;
   height: 100%;
   background-size: cover;
   background-repeat: no-repeat;
   background-blend-mode: overlay;
   opacity: 0.8;
`;
export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 650px;
  padding: 28px 30px 30px;
  position: absolute;
  top: 60%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 1;

  @media only screen and (min-width: 569px) and (max-width: 991px) {
    width: 414px;
  }

  @media only screen and (max-width: 480px) {
    width: calc(100% - 30px);
    padding: 15px;

    > p {
      /* display: none; */
    }
  }

  > div {
    @media only screen and (min-width: 481px) {
      margin-top: 30px;
    }
  }

  h2 {
    margin-bottom: 10px;
    text-align: center;
    color: ${themeGet('color.1', '#ffffff')};
    font-size: 44px;
    font-weight: bolder;
    letter-spacing: 4px;
  }

  p{
    text-align: center;
    color: ${themeGet('color.1', '#ffffff')};
    font-size: 24px;
    margin-bottom: 30px;
  }

  button[type='submit'].ant-btn {
    min-width: 150px;
    padding: 5px 10px;
    color: ${themeGet('color.1', '#ffffff')};
    background-color: ${themeGet('text.4', '#89b43e')};
    border-radius: 5;
    border: 0;
    box-shadow: none;
    font-size: 15px;
    font-weight: 700;
    text-shadow: none;

    @media only screen and (max-width: 991px) {
      min-width: 100%;
      border-radius: 0 0 3px 3px;
    }

    @media only screen and (max-width: 480px) {
      height: 47px;
    }

    &::after {
      display: none;
    }

    &:hover {
      opacity: 0.85;
    }
  }
`;



export const ComponentWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;

  .target {
    right: 10px;
    left: auto;

    @media only screen and (max-width: 480px) {
      right: 25px;
    }
  }

  /* map auto complete style */
  .map_autocomplete {
    width: 100%;
    position: relative;

    &::after {
      content: '';
      width: 1px;
      height: 20px;
      display: inline-block;
      position: absolute;
      top: calc(50% - 10px);
      right: auto;
      left: auto;
      background-color: ${themeGet('border.3', '#E6E6E6')};
    }

    @media only screen and (max-width: 991px) {
      &::after {
        top: auto;
        bottom: 0;
        height: 1px;
        width: calc(100% - 40px);
        left: 20px;
      }
    }

    @media only screen and (max-width: 480px) {
      &::after {
        width: calc(100% - 30px);
        left: 15px;
      }
    }

    input {
      border: 0;
      font-size: 15px;
      font-weight: 400;
      border-radius: 0;
      height: 60px;
      padding: 0 30px 0 40px;
      background: transparent;
      color: ${themeGet('text.0', '#2C2C2C')};

      @media only screen and (max-width: 480px) {
        height: 47px;
        padding: 0 30px 0 36px;
      }

      &:hover,
      &:focus {
        outline: none;
        box-shadow: none;
      }

      &::placeholder {
        color: ${themeGet('text.0', '#2C2C2C')};
      }
    }
  }

  /* date picker style */
  .date_picker {
    min-width: calc(250px - 14px);
    width: calc(100% - 14px);
    margin: 0 0 0 14px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 991px) {
      justify-content: flex-start;
      height: 60px;
    }

    @media only screen and (max-width: 480px) {
      height: 47px;
    }

    .DayPicker__withBorder {
      box-shadow: 0 15px 46px -10px rgba(26, 26, 29, 0.3);
    }

    .DateRangePicker {
      display: block;
      width: 100%;

      .DateRangePickerInput {
        border: 0;
        padding-right: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: transparent;

        .DateRangePickerInput_clearDates,
        .DateRangePickerInput_clearDates {
          &.DateRangePickerInput_clearDates__small {
            display: none;
          }
        }

        .DateInput {
          width: 100%;
          padding: 0 15px 0 30px;
          background: transparent;

          @media only screen and (min-width: 569px) and (max-width: 991px) {
            padding: 0 25px 0 30px;
          }

          @media only screen and (max-width: 568px) {
            padding: 0 15px 0 25px;
          }

          .DateInput_fang {
            display: none;
          }

          .DateInput_input {
            padding: 0;
            font-weight: 400;
            color: ${themeGet('text.0', '#2C2C2C')};
            background: transparent;

            &.DateInput_input__focused {
              border-color: transparent;
            }

            &::placeholder {
              color: ${themeGet('text.0', '#2C2C2C')};
            }
          }
        }

        .DateRangePickerInput_arrow {
          & + .DateInput {
            input {
              text-align: right;
            }
          }
        }
      }

      .DateRangePicker_picker {
        margin-top: -12px;
        z-index: 2;

        @media only screen and (max-width: 991px) {
          top: 47px !important;
        }

        @media only screen and (max-width: 320px) {
          left: -29px !important;
          .DayPicker,
          .DayPicker > div > div,
          .DayPicker > div > div .DayPicker_transitionContainer {
            width: 294px !important;
          }

          .DayPicker {
            .DayPicker_weekHeader {
              padding: 0 !important;
            }

            .CalendarMonth {
              padding: 0 !important;
            }
          }
        }
      }
    }
  }

  /* view with popup component style */
  .view_with__popup {
    max-width: 100%;
    position: relative;

    &::before {
      content: '';
      width: 1px;
      height: 20px;
      display: inline-block;
      position: absolute;
      top: calc(50% - 10px);
      right: auto;
      left: 0;
      z-index: 1;
      background-color: ${themeGet('border.3', '#E6E6E6')};

      @media only screen and (max-width: 991px) {
        top: 0;
        bottom: auto;
        height: 1px;
        width: calc(100% - 40px);
        left: 20px;
      }

      @media only screen and (max-width: 480px) {
        width: calc(100% - 30px);
        left: 15px;
      }
    }

    /* popu handler style */
    .popup_handler {
      width: calc(100% - 14px);
      margin-left: 14px;

      button.ant-btn {
        min-width: auto;
        width: 100%;
        height: 60px;
        border: 0;
        padding: 0 30px;
        border-radius: 0;
        box-shadow: none;
        font-weight: 400;
        font-size: 15px;
        color: ${themeGet('text.0', '#2C2C2C')};
        background-color: ${themeGet('color.2', '#F7F7F7')};

        @media only screen and (max-width: 991px) {
          text-align: left;
          padding: 0 25px 0 30px;
        }

        @media only screen and (max-width: 480px) {
          height: 47px;
          padding: 0 20px 0 25px;
        }

        &::after {
          display: none;
        }
      }
    }

   

    &.active {
      .popup_container {
        margin-top: 0;
        padding: 22px;
        box-shadow: 0 15px 46px -10px rgba(26, 26, 29, 0.3);

        @media only screen and (max-width: 991px) {
          margin-top: 0;
        }

        @media only screen and (max-width: 480px) {
          min-width: auto;
        }
      }
    }
  }

  /* icon style */
  > svg {
    position: absolute;
    z-index: 1;
    top: auto;
    &.map-marker,
    &.calendar,
    &.user-friends {
      left: 15px;
      right: auto;
      fill: ${themeGet('primary.0', '#008489')};
    }

    &.calendar {
      @media only screen and (max-width: 480px) {
        width: 14px;
        height: 14px;
      }
    }

    &.user-friends {
      width: 17px;
      height: 17px;
      @media only screen and (max-width: 480px) {
        width: 16px;
        height: 16px;
      }
    }

    &.caret-down {
      right: 12px;
      left: auto;
      fill: ${themeGet('text.1', '#909090')};

      @media only screen and (max-width: 991px) {
        right: 20px;
      }

      @media only screen and (max-width: 991px) {
        right: 15px;
      }
    }
  }
`;




export default BannerWrapper;
