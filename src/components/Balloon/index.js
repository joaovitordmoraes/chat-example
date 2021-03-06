import * as S from './styled';

function Balloon({ message, sender }) {
  return (
    <S.BalloonWrapper className={`-message-${sender}`}>
      <S.BalloonContainer>
        <S.BalloonText>{message}</S.BalloonText>
      </S.BalloonContainer>
    </S.BalloonWrapper>
  );
}

export default Balloon;