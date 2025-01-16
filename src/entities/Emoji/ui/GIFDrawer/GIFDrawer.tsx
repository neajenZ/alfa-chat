import {Drawer, Flex} from "@ui";
import styled from "styled-components";
import {Search} from "@icons";
import {Input} from "../../../../app/shared/ui/Input.tsx";

interface IProps {
    onClose: () => void
}

export const GIFDrawer = ({ onClose }: IProps) => {

    return (
        <Drawer title={'GIF'} onClose={onClose}>
            <Input
                placeholder={'Поиск'}
                leftButtons={<button><Search/></button>}
                isMessage={false}
            />

            <Divider />

            <Grid>
                <img src="/gif.png" alt="sticker-pack"/>
                <img src="/gif.png" alt="sticker-pack"/>
                <img src="/gif.png" alt="sticker-pack"/>
                <img src="/gif.png" alt="sticker-pack"/>
                <img src="/gif.png" alt="sticker-pack"/>
                <img src="/gif.png" alt="sticker-pack"/>
                <img src="/gif.png" alt="sticker-pack"/>
                <img src="/gif.png" alt="sticker-pack"/>
            </Grid>
        </Drawer>
    )
}

const Grid = styled.div`
    display: grid;
    width: 100%;
    grid-auto-flow: dense;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    
    img {
        width: 100%;
    }
`

const Divider = styled.div`
    width: 100%;
    height: 8px;
    border-radius: 19px;
    background-color: #FAFAFA;
    margin: 30px 0;
`

const Item = styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundBlock};
    border-radius: 10px;
    padding: 16px;
`

const ItemHeader = styled(Flex)`
    margin-bottom: 8px;
    
    h4 {
        font-size: 16px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.text};
    }
    
    span {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 14px;
        font-weight: 500;
    }
`

const ItemButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    padding: 10px 30px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
`