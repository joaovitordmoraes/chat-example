import { motion } from 'framer-motion';
import * as S from './styled';

function Balloon({ children, from, animationTransition, animationVariants }) {
  return (
    <S.BalloonWrapper 
      className={`-message-${from}`}
      as={motion.section}
      transition={animationTransition}
      variants={animationVariants}
      initial="hidden"
      animate="show"
    >
      <S.BalloonContainer>
        {children}
      </S.BalloonContainer>
    </S.BalloonWrapper>
  );
}

export default Balloon;