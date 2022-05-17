import styled from 'vue-styled-components'

const PageTitle = styled.h1`
  margin-bottom: 0;
  color: #312783;
  font-weight: 600;
  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
  > span {
    font-size: 16px;
    color: #999;
    font-weight: 400;
  }
`

export {
  PageTitle,
}