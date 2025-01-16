import styled from "styled-components";

interface IProps {
    color?: string;
}

export const ChatType = styled.span<IProps>`
  font-size: 12px;
    font-weight: 500;
  color: #fff;
    text-shadow: 0.2px 0.2px 1px rgba(0, 0, 0, 0.1);
    
  background: ${({ color }) => color || '#5856D6'};
  padding: 4px 6px;
  border-radius: 5px;
`;
