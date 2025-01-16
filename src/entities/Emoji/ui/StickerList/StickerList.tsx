import styled from "styled-components";

interface IProps {
    data: {
        favorites: string[],
        all: string[]
    }
}

export const StickerList = ({ data }: IProps) => {
    return (
        <>
            <Item>
                <h4>Избранные</h4>
                <Grid>
                    {
                        data.favorites.map((i) => (
                            <img src={i} alt={'sticker'}/>
                        ))
                    }
                </Grid>
            </Item>
            <Item>
                <h4>Something</h4>
                <Grid>
                    {
                        data.all.map((i) => (
                            <img src={i} alt={'sticker'} />
                        ))
                    }
                </Grid>
            </Item>
        </>
    )
}

const Item = styled.div`
    h4 {
        color: ${({ theme }) => theme.colors.text};
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 4px;
    }
`


const Grid = styled.div`
    display: grid;
    width: 100%;
    grid-auto-flow: dense;
    grid-template-columns: repeat(4, 1fr);
    gap: 9px;
    
    img {
        width: 100%;
    }
`

