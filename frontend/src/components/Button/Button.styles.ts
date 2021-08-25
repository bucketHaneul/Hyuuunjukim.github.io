import styled from '@emotion/styled';
import { PALETTE } from '../../constants';
import { ButtonBackgroundType } from '../../types';

interface ContainerProps {
  backgroundType: ButtonBackgroundType;
  styles: object;
  color: string;
}

const backgroundStyle = {
  [ButtonBackgroundType.FILLED]: {
    color: PALETTE.WHITE,
  },
  [ButtonBackgroundType.OUTLINE]: {
    backgroundColor: 'transparent',
  },
  [ButtonBackgroundType.TEXT]: {
    backgroundColor: 'transparent',
    border: 'none',
  },
};

const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  width: fit-content;
  min-width: fit-content;
  background-color: ${({ color }) => color};
  border: 0.1rem solid ${({ color }) => color};
  color: ${({ color }) => color};
  font-size: 1.6rem;
  padding: 1rem 2rem;
  border-radius: 0.6rem;
  cursor: pointer;

  ${({ styles }) => `${styles ?? ''}`};
  ${({ backgroundType }) => backgroundStyle[backgroundType]};
`;

export { Container };
