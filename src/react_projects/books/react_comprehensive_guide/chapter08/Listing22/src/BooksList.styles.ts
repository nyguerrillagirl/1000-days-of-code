import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Table = styled.table`
  border-collapse: collapse;
`;

export const THead = styled.thead`
  border-bottom: 3px solid black;
`;

const BaseTd = styled.td`
  padding: 5px 10px;
`;

export const TD = styled(BaseTd)`
  border: 1px solid black;
`;

type TRProps = {
  highlight: boolean;
};

export const TR = styled.tr`
  &:nth-of-type(2n) {
    background-color: #ddd;
  }
  ${({ highlight }: TRProps) =>
    highlight &&
    css`
      &&& {
        background-color: yellow;
      }
    `}
`;
