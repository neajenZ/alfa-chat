import styled from "styled-components";
import {LeftArrow} from "@icons";
import {Flex} from "./Flex.tsx";
import {useState} from "react";
import {size} from "@styles/size.ts";

interface IItem {
    value: string,
    label: string
}

interface IProps {
    data: IItem[],
    onSelect: (item: IItem) => void,
    defaultValue?: IItem
}

export const Select = ({ onSelect, defaultValue, data }: IProps) => {
    const [isOpenMenu, setOpen] = useState(false)

    const handleSelect = (value: IItem) => {
        onSelect(value)
        setOpen(false)
    }

    return (
        <Relative>
            <Body onClick={() => setOpen(!isOpenMenu)}>
                <span>{(defaultValue && defaultValue.label) || data[0].label}</span>
                <LeftArrow style={{ transform: `rotate(${isOpenMenu ? 90 : -90}deg)` }} />
            </Body>
            {
                isOpenMenu && (
                    <MenuBody>
                        {
                            data.map((i) => (
                                <MenuItem onClick={() => handleSelect(i)} key={i.value}>{i.label}</MenuItem>
                            ))
                        }
                    </MenuBody>
                )
            }
        </Relative>

    )
}

const Relative = styled.div`
    position: relative;
    width: 100%;
`

const MenuItem = styled.div`
    cursor: pointer;
    padding: 4px 0;
    width: 100%;
`

const MenuBody = styled(Flex)`
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 110%;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.backgroundBlock};
    padding: 15px 16px;
    border-radius: 8px;
    width: 100%;
`

const Body = styled(Flex)`
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.backgroundBlock};
    padding: 15px 16px;
    border-radius: 8px;
    width: 100%;

    @media (${size.notebook}) {
        padding: 10px;
    }
`