import {Drawer, Flex} from "@ui";
import styled from "styled-components";
import {Search} from "@icons";
import {Input} from "../../../../app/shared/ui/Input.tsx";

interface IProps {
    onClose: () => void
}

export const StickerDrawer = ({ onClose }: IProps) => {

    return (
        <Drawer title={'Стикеры'} onClose={onClose}>
            <Input
                placeholder={'Поиск'}
                leftButtons={<button><Search/></button>}
                isMessage={false}
            />

            <Divider />

            <Flex gap={'10px'} direction={'column'}>
                <Item>
                    <ItemHeader align={'center'} justify={'space-between'}>
                        <Flex direction={'column'} align={'flex-start'} gap={'4px'}>
                            <h4>Duck</h4>
                            <span>12 стикеров</span>
                        </Flex>
                        <ItemButton>
                            Добавить
                        </ItemButton>
                    </ItemHeader>
                    <Flex gap={'6px'}>
                        <img src="/sticker.png" alt="sticker-pack"/>
                        <img src="/sticker.png" alt="sticker-pack"/>
                        <img src="/sticker.png" alt="sticker-pack"/>
                        <img src="/sticker.png" alt="sticker-pack"/>
                        <img src="/sticker.png" alt="sticker-pack"/>
                    </Flex>
                </Item>

                <Item>
                    <ItemHeader align={'center'} justify={'space-between'}>
                        <Flex direction={'column'} align={'flex-start'} gap={'4px'}>
                            <h4>Duck</h4>
                            <span>25 стикеров</span>
                        </Flex>
                        <ItemButton>
                            Добавить
                        </ItemButton>
                    </ItemHeader>
                    <Flex gap={'6px'}>
                        <img src="/sticker.png" alt="sticker-pack"/>
                        <img src="/sticker.png" alt="sticker-pack"/>
                        <img src="/sticker.png" alt="sticker-pack"/>
                        <img src="/sticker.png" alt="sticker-pack"/>
                        <img src="/sticker.png" alt="sticker-pack"/>
                    </Flex>
                </Item>
            </Flex>
        </Drawer>
    )
}

const InputBody = styled.div`
    position: relative;
    
    input {
        background: ${({ theme }) => theme.colors.backgroundBlock};
        color: ${({ theme }) => theme.colors.text};
        padding: 15px 16px 15px 40px;
        border-radius: 10px;
        outline: none;
        border: none;
        font-size: 16px;
        font-weight: 500;
        width: 100%;
        
        &::placeholder {
            color: #6D7487;
        }
    }
    
     button {
         position: absolute;
         top: 50%;
         left: 15px;
         transform: translateY(-50%);
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