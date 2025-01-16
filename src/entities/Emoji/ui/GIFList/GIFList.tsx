import styled from "styled-components";

interface IProps {
    data: string[]
}

export const GIFList = ({ data }: IProps) => {
    return (
        <Grid>
            {
                data.map((i) => (
                    <img src={i} alt={'gif'}/>
                ))
            }
        </Grid>
    )
}

const Grid = styled.div`
    display: grid;
    width: 100%;
    grid-auto-flow: dense;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
`

