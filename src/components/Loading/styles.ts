import styled from 'styled-components'

type TypeProps = {
  fullscreen: boolean
}

export const Container = styled.div<TypeProps>`
  background: ${props => props.theme.colors.background.medium};
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.fullscreen ? '100vh' : 'none'};
  border-radius: 10px;

  h2 {
    color: ${props => props.theme.colors.text.dark};
  }
`