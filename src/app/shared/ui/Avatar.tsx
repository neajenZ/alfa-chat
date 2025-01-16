import styled from "styled-components";

interface IProps {
    width?: number,
    height?: number
}

export const Avatar = styled.a<IProps>`
    line-height: 0;		/* remove line-height */ 
	display: inline-block;	/* circle wraps image */
	border-radius: 50%;	/* relative value */
    height: ${({ height = 50 }) => height}px;
    width: ${({ width = 50 }) => width}px;
    img {
	    border-radius: 50%;	
        width: 100%;
        height: 100%;
    }
`