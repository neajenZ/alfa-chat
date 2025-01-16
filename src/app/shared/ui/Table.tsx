import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import {Input} from "./Input.tsx";
import {LeftArrow, Search} from "@icons";
import ReactPaginate from "react-paginate";

interface TableColumn<T> {
    title: string;
    dataIndex: keyof T;
    render?: (value: any, record: T) => React.ReactNode;
}

interface TableProps<T> {
    data: T[];
    columns: TableColumn<T>[];
    actions?: (record: T) => React.ReactNode; // Дополнительные кнопки действий
    placeholder?: string;
}

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
`;

const SearchInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  margin-bottom: 16px;
  outline: none;
  font-size: 14px;

  &:focus {
    border-color: #007bff;
  }
`;

const TableBody = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
`;

const TableCell = styled.td`
  padding: 12px 8px;
`;

const ActionCell = styled(TableCell)`
  text-align: right;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const PaginationButton = styled.button`
  padding: 8px 12px;
  margin: 0 4px;
  border: 1px solid #dcdcdc;
  background-color: #ffffff;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const Table = <T extends Record<string, any>>({
                                                        data,
                                                        columns,
                                                        actions,
                                                        placeholder = "Поиск...",
                                                    }: TableProps<T>) => {
    const [search, setSearch] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 5;

    const filteredData = data.filter((item) =>
        Object.values(item).some((value) =>
            String(value).toLowerCase().includes(search.toLowerCase())
        )
    );

    const paginatedData = filteredData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const totalPages = Math.ceil(filteredData.length / pageSize);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setCurrentPage(1);
    };

    return (
        <TableContainer>
            <Input
                leftButtons={<Search />}
                placeholder={placeholder}
                value={search}
                isMessage={false}
                onChange={handleSearchChange}
            />
            <TableBody>
                <tbody>
                {paginatedData.map((record, index) => (
                    <tr key={index}>
                        {columns.map((col) => (
                            <TableCell key={String(col.dataIndex)}>
                                {col.render
                                    ? col.render(record[col.dataIndex], record)
                                    : record[col.dataIndex]}
                            </TableCell>
                        ))}
                        {actions && <ActionCell>{actions(record)}</ActionCell>}
                    </tr>
                ))}
                </tbody>
            </TableBody>

            <ReactPaginate
                pageCount={5}
                pageClassName={`custom-container-pag page-item`}
                pageLinkClassName={`custom-side-btn page-link`}
                previousClassName={`custom-side-btn page-link`}
                activeLinkClassName={'custom-active-page-btn'}
                previousLabel={<LeftArrow />}
                nextLabel={
                    <LeftArrow style={{ transform: 'rotate(180deg)' }} />
                }
                nextClassName={`custom-side-btn page-link`}
                containerClassName={'container-pagination'}
            />
        </TableContainer>
    );
};

