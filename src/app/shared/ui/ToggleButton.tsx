import React, { useState } from "react";
import styled from "styled-components";
import {size} from "@styles/size.ts";

const ToggleContainer = styled.div`
  display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 10px 16px;
    border-radius: 10px;
  align-items: center;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.backgroundBlock};
    
    @media (${size.notebook}) {
        padding: 10px 12px;
    }
`;

const Label = styled.label`
  font-size: 16px;
    font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
    
    @media (${size.notebook}) {
        font-size: 13px;
    }
`;

const ToggleSwitch = styled.div<{ isActive: boolean }>`
  position: relative;
  min-width: 50px;
  height: 26px;
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.primary : theme.colors.textSecondary)};
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;

    @media (${size.notebook}) {
        min-width: 40px;
        height: 23px;
    }
`;

const ToggleCircle = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 2px;
  left: ${({ isActive }) => (isActive ? "20px" : "3px")};
  width: 22px;
  height: 22px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transition: left 0.3s;

    @media (${size.notebook}) {
        width: 17px;
        height: 17px;
        top: 3px;
    }
`;

interface ToggleProps {
    label: string;
    initialState?: boolean;
    onChange?: (state: boolean) => void;
}

export const ToggleButton: React.FC<ToggleProps> = ({ label, initialState = false, onChange }) => {
    const [isActive, setIsActive] = useState(initialState);

    const handleToggle = () => {
        const newState = !isActive;
        setIsActive(newState);
        if (onChange) onChange(newState);
    };

    return (
        <ToggleContainer onClick={handleToggle}>
            <Label>{label}</Label>
            <ToggleSwitch isActive={isActive} >
                <ToggleCircle isActive={isActive} />
            </ToggleSwitch>
        </ToggleContainer>
    );
};

