import styled from 'vue-styled-components'

const SidebarHeading = styled.h2`
  text-transform: uppercase;
  font-weight: 600;
  color: #888;
  font-size: 18px;
  border-bottom: #ccc 1px solid;
  padding-bottom: 10px;
  margin-bottom: 20px;
`

const VideoList = styled.ul`
  list-style: none;
  > li {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
    > button {
      color: #666;
      background: transparent;
      border: 0;
      text-align: left;
      line-height: 1.4;;
      vertical-align: middle;
      &:hover, &.active {
        color: #7f4a9d;
      }
      &.active {
        font-weight: 600;
        border-left: #7f4a9d 4px solid;
        padding-left: 10px;
      }
    }
  }
`

export {
  SidebarHeading,
  VideoList,
}