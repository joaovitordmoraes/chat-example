import styled from 'styled-components';
import EmptyStar from '../../images/star-empty.svg';
import FullStar from '../../images/star-full.svg';

export const BalloonContainer = styled.div`
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-width: 250px;
  max-width: 400px;
  border-radius: 20px;
  position: relative;

  > p,
  > input {
    font-size: var(--size-regular);
    line-height: 1.2;
  }

  > input {
    border: none;
    outline: none;
  }

  .stars {
    position: relative;
    display: inline-block;

    &:not(:checked) {
      
      > input {
        position: absolute;
        left: -99999px;
      }

      > label {
        background-image: url(${EmptyStar});
        background-repeat: no-repeat;
        background-size: contain;
        width: 30px;
        height: 30px;
        text-indent: -99999px;
        cursor: pointer;
        transition: background-image 150ms linear;
        float: right;

        &:hover,
        &:hover ~ label {
          background-image: url(${FullStar});
          transition: background-image 150ms linear;
        }
        
        &:not(:first-child) {
          padding-right: 10px;
        }
      }
    }

    > input:checked {
      & ~ label {
        background-image: url(${FullStar});
      }
    }

  }

  .errors {
    margin-top: 15px;
    margin-bottom: 5px;
  }

  .error {
    margin-top: 15px;
  }

  span {
    color: var(--color-error);
    font-weight: 700;
    display: flex;
    align-items: flex-end;

    img {
      width: 12px;
      margin-right: 5px;
    }
  }

  > button {
    height: 35px;
    border-radius: 50px;
    border: none;
    background-color: var(--color-success);
    transition: background-color 150ms linear;
    font-size: var(--size-regular);
    text-transform: uppercase;
    font-weight: 700;
    color: var(--color-white);
    margin-top: 20px;
    outline: none;
    cursor: pointer;

    &:hover {
      background-color: var(--color-success-hover);
      transition: background-color 150ms linear;
    }

    &:disabled {
      background-color: var(--color-gray);
      transition: background-color 150ms linear;
      cursor: not-allowed;
    }
  }
`;

export const BalloonWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;

  &.-message-bot {
    justify-content: flex-start;

    > ${BalloonContainer} {
      border-top-left-radius: 0px;

      &::before {
        content: '';
        position: absolute;
        border-top: 5px solid var(--color-white);
        border-left: 5px solid transparent;
        border-right: 5px solid var(--color-white);
        border-bottom: 5px solid transparent;
        top: 0;
        left: 0;
        transform: translateX(-100%);
      }
    }
  }

  &.-message-user {
    justify-content: flex-end;

    > ${BalloonContainer} {
      border-top-right-radius: 0px;

      &::after {
        content: '';
        position: absolute;
        border-top: 5px solid var(--color-white);
        border-left: 5px solid var(--color-white);
        border-right: 5px solid transparent;
        border-bottom: 5px solid transparent;
        top: 0;
        right: 0;
        transform: translateX(100%);
      }
    }
  }
`;