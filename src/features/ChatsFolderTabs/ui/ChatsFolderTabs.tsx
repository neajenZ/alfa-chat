import React, {useRef, useState} from "react";
import styled from "styled-components";
import {useSearchParams} from "react-router-dom";
import {ITab} from "@entities/Tab/model.ts";

interface IProps {
    tabs: ITab[];
}

export const ChatsFolderTabs = ({ tabs }: IProps) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const activeTab = searchParams.get('tab')
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX); // Скорость скролла
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    return (
        <TabsContainer
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            isDragging={isDragging}
        >
            {tabs.map((tab) => (
                <TabItem
                    key={tab.label}
                    isActive={tab.label === activeTab}
                    onClick={() => setSearchParams({ tab: tab.label })}
                >
                    {tab.label} <TabCount>{tab.count}</TabCount>
                </TabItem>
            ))}
        </TabsContainer>
    );
};

const TabsContainer = styled.div<{ isDragging: boolean }>`
    display: flex;
    gap: 16px;
    overflow-x: auto;
    padding: 8px;
    cursor: ${(props) => (props.isDragging ? "grabbing" : "grab")};
    user-select: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const TabItem = styled.div<{ isActive: boolean }>`
  font-size: 16px;
    font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  padding: 6px 12px;
  white-space: nowrap;
  cursor: pointer;
  border-bottom: ${({ theme, isActive }) => (isActive ? `2px solid ${theme.colors.primary}` : "2px solid transparent")};

  &:hover {
    color: #007aff;
  }
`;

const TabCount = styled.span`
  font-size: 12px;
  background: #f0f0f0;
  color: #888;
  padding: 2px 6px;
  border-radius: 12px;
  margin-left: 8px;
`;
