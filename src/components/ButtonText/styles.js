import styled from "styled-components";

export const Container = styled.button`
    font-family: Poppins;
    
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 16.546px;
    font-weight: 500;
    line-height: 140%;

    border: none;

    background: transparent;
    color: ${({ theme }) => theme.colors.light_300};

`