import styled from "styled-components";
import {Avatar, Flex} from "@ui";
import {Edit} from "@icons";

export const CompanyMainData = () => {
    return (
        <MainBoard>
            <MainBoardHeader>
                <Flex align={'center'} gap={'24px'}>
                    <Avatar><img src="/user_avatar.png" alt=""/></Avatar>
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
                </Flex>
                <button>
                    <Edit />
                </button>
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

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 220px);
    grid-template-rows: repeat(4, 1fr);
    gap: 25px;
    padding: 24px;
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
`

const MainBoard = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
`

const MainBoardHeader = styled(Flex)`
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`