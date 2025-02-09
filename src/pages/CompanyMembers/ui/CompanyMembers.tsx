import {Avatar, Button, Flex, Table} from "@ui";
import styled from "styled-components";
import {SettingsTable} from "@icons";
import {useState} from "react";
import {AddMember} from "./AddMember.tsx";
import {EditMember} from "@pages/CompanyMembers/ui/EditMember.tsx";
import {size} from "@styles/size.ts";

const Member = () => {
    return (
        <Flex gap={'10px'} align={'center'}>
            <Avatar height={window.innerWidth <= 992 ? 45 : 60} width={window.innerWidth <= 992 ? 45 : 60}><img src="/user_avatar.png" alt="Avatar"/></Avatar>
            <User direction={'column'} align={'flex-start'} gap={'4px'}>
                <p>Maghzym Aiash</p>
                <span>@wqgzuw * Последняя активность 21.12.2024 </span>
            </User>
        </Flex>
    )
}

export const CompanyMembers = () => {
    const [isEditUser, setEditUser] = useState(false)
    const [isAddMember, setAddMember] = useState(false)

    return (
        <MainBoard>
            <Header>
                <h5>Участники</h5>
                <Button size={'small'} onClick={() => setAddMember(true)} text={'Добавить'} />
                { isAddMember && <AddMember onClose={() => setAddMember(false)} /> }
            </Header>
            <Table
                data={[{ name: 'Hello' }, { name: 'Hello' }, { name: 'Hello' }, { name: 'Hello' }, { name: 'Hello' }]}
                columns={[ { dataIndex: 'name', title: 'Имя', render: Member } ]}
                actions={() => (
                    <Flex gap={'20px'} align={'center'} justify={'flex-end'}>
                        <ShowButton>Посмотреть группы {window.innerWidth >= 796 && '(5)'}</ShowButton>
                        <Role>Администратор</Role>

                        <button onClick={() => setEditUser(true)}>
                            <SettingsTable />
                        </button>
                    </Flex>
                )}
            />
            {
                isEditUser && <EditMember onClose={() => setEditUser(false)} />
            }
        </MainBoard>
    )
}

const Header = styled(Flex)`
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    
    button {
        width: 25%;
    }
    
    h5 {
        color: ${({ theme }) => theme.colors.text};
        font-size: 20px;
        font-weight: 600;
    }
    
`

const MainBoard = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    padding: 20px;

    @media (${size.notebook}) {
        padding: 10px;
    }
`

const ShowButton = styled.button`
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    padding: 10px 16px;
    font-size: 14px;
    font-weight: 600;
    border: 1px solid ${({ theme }) => theme.colors.primary};

    @media (${size.notebook}) {
        padding: 8px 12px;
        font-size: 13px;
    }

    @media (${size.phone}) {
        display: none;
    }
`

const Role = styled.div`
    color: ${({ theme }) => theme.colors.primary};
    padding: 10px 16px;
    font-size: 14px;
    font-weight: 600;

    @media (${size.notebook}) {
        font-size: 13px;
        padding: 8px 12px;
    }

    @media (${size.phone}) {
        display: none;
    }
`

const User = styled(Flex)`
    p {
        color: ${({ theme }) => theme.colors.text};
        font-size: 16px;
        font-weight: 500;
    }
    span {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 14px;
        font-weight: 500;
    }
    
    @media (${size.notebook}) {
        text-align: left;
        p {
            font-size: 14px;
        }

        span {
            font-size: 13px;
        }
    }
`
