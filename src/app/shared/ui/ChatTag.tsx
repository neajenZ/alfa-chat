import styled from "styled-components";

export const ChatTag = styled.span`
  font-size: 14px;
    font-weight: 500;
  color: ${({ theme }) => theme.colors.text} !important;
  background: ${({ theme }) => theme.colors.backgroundBlock};
  padding: 6px 10px;
  border-radius: 5px;
    text-shadow: 0.2px 0.2px 1px rgba(0, 0, 0, 0.1);
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
`;
