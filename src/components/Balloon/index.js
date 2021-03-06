import * as S from './styled';

function Balloon({ children, from }) {
  return (
    <S.BalloonWrapper className={`-message-${from}`}>
      <S.BalloonContainer>
        {children}
      </S.BalloonContainer>
    </S.BalloonWrapper>
  );
}

export default Balloon;