import styled from "styled-components";
import {size} from "@styles/size.ts";

export const SubTitleSide = styled.h5`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;

    @media (${size.laptop}) {
        font-size: 17px;
    }
`