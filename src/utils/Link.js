import React from 'react'

const Link = (props) => {
  return (
    <a href={props.linkTo} key={props.key} id={props.linkID}>{props.linkText}</a>
  )
}

export default Link