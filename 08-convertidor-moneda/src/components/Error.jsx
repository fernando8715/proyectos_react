import styled from "@emotion/styled"

const Texto = styled.p`
    background-color: #B7322C;
    color: #FFF;
    padding: 13px;
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
`

export const Error = ({children}) => {
  return (
    <Texto>
        {children}
    </Texto>
  )
}
