import {Button} from "@ui";
import {LeftArrow} from "@icons";
import styled from "styled-components";

export const EditWallpapersChat = () => {
    return (
        <>
            <ButtonWrapper>
                <Button text={'Выбрать из галереи'} variant={'menu'} color={'#2B81C8'} rightIcon={<Rotate><LeftArrow /></Rotate>} />
            </ButtonWrapper>

            <GridContainer>
                <img src={'/wallpaper.png'} alt={'Wallpaper'}/>
                <img src={'/wallpaper.png'} alt={'Wallpaper'}/>
                <img src={'/wallpaper.png'} alt={'Wallpaper'}/>
                <img src={'/wallpaper.png'} alt={'Wallpaper'}/>
                <img src={'/wallpaper.png'} alt={'Wallpaper'}/>
                <img src={'/wallpaper.png'} alt={'Wallpaper'}/>
            </GridContainer>
        </>
    )
}

const ButtonWrapper = styled.div`
    margin: 30px 0;
    button {
        justify-content: space-between;
        background-color: ${({ theme }) => theme.colors.backgroundBlock};
        padding: 15px 16px;
        
        svg {
            height: 16px;
        }
        
        path {
            stroke: ${({ theme }) => theme.colors.textSecondary};
        }
    }
`

const GridContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundBlock};
    border-radius: 10px;
    display: grid;
    padding: 10px;
    grid-template-columns: repeat(3, 1fr);
    gap: 9px;
    flex-grow: 1;    
    overflow-y: auto;
    img {
        width: 100%;
    }
`

const Rotate = styled.div`
    font-size: 0;
    svg {
        transform: rotate(180deg);
    }
`