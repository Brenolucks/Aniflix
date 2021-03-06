import styled from 'styled-components';

const Button = styled.button `
    color: var(--white);

    border: 1px solid var(--white);
    box-sizing: border-box;
    border-radius: 50px;

    cursor: pointer;

    padding: 16px 24px;

    font-style: normal;
    font-weight: bold;
    font-size: 16px;

    outline: none;
    
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
        opacity: .7;
    }
`;

export default Button;