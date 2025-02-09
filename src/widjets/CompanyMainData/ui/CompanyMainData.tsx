import styled from "styled-components";
import {Avatar, Flex} from "@ui";
import {Edit} from "@icons";
import {size} from "@styles/size.ts";

export const CompanyMainData = () => {
    return (
        <MainBoard>
            <MainBoardHeader>
                <WrapperHead align={'center'} gap={'24px'}>
                    {
                        window.innerWidth > 480 && (
                            <Avatar height={window.innerWidth <= 992 ? 45 : 50} width={window.innerWidth <= 992 ? 45 : 50}>
                                <img src="/user_avatar.png" alt=""/>
                            </Avatar>
                        )
                    }
                    <HeadItem>
                        <span>Владелец</span>
                        <p>Артур</p>
                    </HeadItem>
                    <HeadItem>
                        <span>Email</span>
                        <p>brodrigues@gmail.com</p>
                    </HeadItem>
                    <HeadItem>
                        <span>Phone</span>
                        <p>617-952-4069</p>
                    </HeadItem>
                </WrapperHead>
                <MobileLogo>
                    {
                        window.innerWidth <= 480 && (
                            <Avatar height={window.innerWidth <= 992 ? 45 : 50} width={window.innerWidth <= 992 ? 45 : 50}>
                                <img src="/user_avatar.png" alt=""/>
                            </Avatar>
                        )
                    }
                    <button>
                        <Edit/>
                    </button>
                </MobileLogo>

            </MainBoardHeader>

            <Grid>
                <HeadItem>
                    <span>Инфо</span>
                    <p>Инфо</p>
                </HeadItem>
                <HeadItem>
                    <span>Инфо</span>
                    <p>Инфо</p>
                </HeadItem>
                <HeadItem>
                    <span>Инфо</span>
                    <p>Инфо</p>
                </HeadItem>
                <HeadItem>
                    <span>Инфо</span>
                    <p>Инфо</p>
                </HeadItem>
                <HeadItem>
                    <span>Инфо</span>
                    <p>Инфо</p>
                </HeadItem>
                <HeadItem>
                    <span>Инфо</span>
                    <p>Инфо</p>
                </HeadItem>
                <HeadItem>
                    <span>Инфо</span>
                    <p>Инфо</p>
                </HeadItem>
            </Grid>
        </MainBoard>
    )
}

const MobileLogo = styled.div`
    @media (${size.phone}) {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 220px);
    grid-template-rows: repeat(4, 1fr);
    gap: 25px;
    padding: 24px;

    @media (${size.notebook}) {
        padding: 10px;
    }

    @media (${size.phone}) {
        grid-template-columns: repeat(2, 120px);
    }
`

const WrapperHead = styled(Flex)`
    @media (${size.notebook}) {
        gap: 12px;
    }
`

const HeadItem = styled(Flex)`
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    
    span {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 14px;
        font-weight: 500;
    }

    p {
        color: ${({ theme }) => theme.colors.text};
        font-size: 16px;
        font-weight: 500;
    }

    @media (${size.notebook}) {
        gap: 3px;
        
        span {
            font-size: 13px;
        }
        p {
            font-size: 14px;
        }
    }
`

const MainBoard = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    @media (max-width: 800px) {
        grid-row: 2;
    }
`

const MainBoardHeader = styled(Flex)`
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    
    @media (${size.notebook}) {
        padding: 10px;
    }

    @media (${size.phone}) {
        flex-direction: column-reverse;
        align-items: flex-start;
    }
`