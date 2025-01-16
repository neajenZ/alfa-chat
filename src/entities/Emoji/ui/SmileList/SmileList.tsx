import styled from "styled-components";

interface IProps {
    data: {
        recently: string[],
        all: string[]
    }
}

export const SmileList = ({ data }: IProps) => {
    return (
        <>
            <Item>
                <h4>Недавние</h4>
                <Grid>
                    {
                        data.recently.map((i) => (
                            <p>{i}</p>
                        ))
                    }
                </Grid>
            </Item>
            <Item>
                <h4>Все смайлы</h4>
                <Grid>
                    {
                        data.all.map((i) => (
                            <p>{i}</p>
                        ))
                    }
                    <p>😁</p>
                    <p>😁</p>
                    <p>😁</p>
                    <p>😁</p>
                    <p>😁</p>
                    <p>🥲</p>
                    <p>😁</p>
                    <p>😁</p>
                    <p>😁</p>
                    <p>😁</p>
                    <p>😁</p>
                    <p>😁</p>
                    <p>😁</p>
                    <p>😁</p>
                    <p>🥲</p>
                    <p>😁</p>
                    <p>🥲</p>
                    <p>😁</p>
                    <p>🥲</p>
                </Grid>
            </Item>
        </>
    )
}

const Item = styled.div`
    h4 {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 4px;
    }
`


const Grid = styled.div`
    display: grid;
    width: 100%;
    grid-auto-flow: dense;
    grid-template-columns: repeat(8, 1fr);
    gap: 9px;
`

