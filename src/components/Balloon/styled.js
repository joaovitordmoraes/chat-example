import styled from 'styled-components';

export const BalloonContainer = styled.div`
  background-color: var(--color-white);
  display: inline-block;
  padding: 20px;
  min-width: 200px;
  max-width: 400px;
  border-radius: 20px;
  position: relative;
`;

export const BalloonText = styled.p`
  font-size: var(--size-regular);
  line-height: 1.2;
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