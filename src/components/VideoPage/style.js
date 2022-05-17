import styled from 'vue-styled-components'

const VideoHeading = styled.h2`
  color: #7f4a9d;
  font-weight: bold;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    font-size: 22px;
  }
`

const VideoDescription = styled.p`
  background: #eee;
  padding: 15px 25px;
  border-radius: 6px;
  color: #444;
  font-size: 16px;
  margin-top: 20px;
`

const WhatWeWannaSee = styled.video``

const VideoNav = styled.div`
  margin-top: 20px;
  .prev, .next {

  }
  .next {
    text-align: right;
  }
`

const NavButton = styled.button`
  background: transparent;
  border: 0;
  text-transform: uppercase;
  color: #7f4a9d;
  font-weight: 600;
  &:hover {
    color: #333;
  }
`

export {
  VideoHeading,
  VideoDescription,
  WhatWeWannaSee,
  VideoNav,
  NavButton,
}
