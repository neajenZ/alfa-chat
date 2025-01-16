import styled from "styled-components";
import {Flex} from "@ui";
import {File, GIF, Recently, Search, Smile} from "@icons";
import { SmileList } from './SmileList/SmileList.tsx'
import { StickerList } from './StickerList/StickerList.tsx'
import { GIFList } from './GIFList/GIFList.tsx'
import {useState} from "react";

const emoji = {
    recently: ['😁','😁','😁','😁','😁','😁','😁','😁'],
    all: ['😁','😁','😁','😁','😁','😁','😁','😁', '😁','😁','😁','😁','😁','😁','😁','😁'],
}

const stickers = {
    favorites: ['/sticker.png','/sticker.png','/sticker.png','/sticker.png'],
    all: ['/sticker.png','/sticker.png','/sticker.png','/sticker.png','/sticker.png','/sticker.png','/sticker.png','/sticker.png'],
}

const gifs = ['/gif.png', '/gif.png', '/gif.png', '/gif.png', '/gif.png', '/gif.png', '/gif.png', '/gif.png', '/gif.png']

interface IProps {
    onSearchGif?: () => void,
    onSearchSticker?: () => void,
}

export const Emoji = ({ onSearchGif, onSearchSticker }: IProps) => {
    const [currentOpen, setCurrentOpen] = useState<'smile' | 'sticker' | 'gif'>('smile')

    const handleSearch = () => {
        if (currentOpen === 'gif' && onSearchGif) onSearchGif()
        if (currentOpen === 'sticker' && onSearchSticker) onSearchSticker()
    }

    return (
        <Body>
            <Flex gap={'10px'} direction={'column'}>
                { currentOpen !== 'gif' && (
                    <Flex>
                        <Recently />
                    </Flex>
                )}
                {
                    currentOpen === 'gif' ? <GIFList data={gifs} /> :
                        currentOpen === 'smile' ? <SmileList data={emoji} /> :
                            <StickerList data={stickers} />
                }
                <Footer width={'100%'} justify={'center'} align={'center'} gap={'10px'}>
                    <button onClick={handleSearch} style={{ marginRight: 'auto' }}>
                        <Search />
                    </button>
                    <button>
                        <Smile onClick={() => setCurrentOpen('smile')} width={18} height={18} />
                    </button>
                    <button onClick={() => setCurrentOpen('sticker')}>
                        <File width={18} height={18} />
                    </button>
                    <button onClick={() => setCurrentOpen('gif')}>
                        <GIF />
                    </button>
                </Footer>
            </Flex>
        </Body>
    )
}

const Body = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    padding: 10px;
    border-radius: 10px;
    width: 256px;
    position: absolute;
    bottom: 100%;
    left: 0;
`



const Footer = styled(Flex)`
    padding-top: 10px;
    border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
`

