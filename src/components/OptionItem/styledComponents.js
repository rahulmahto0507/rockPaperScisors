import styled from 'styled-components'

export const ImageList = styled.img`
  width: 140px;
  height: 140px;
  @media screen and (min-width: 768px) {
      width: 170px;
      height: 170px;
    }
  }
`
export const ItemList = styled.li`
  list-style-type: none;
  display: flex;
`
export const ButtonList = styled.button`
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border: none;
`
