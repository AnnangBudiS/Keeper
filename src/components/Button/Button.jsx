import React from 'react'

const Button = (props) => {
    const { classname, children, onclick } = props
  return (
    <div>
        <button onClick={onclick} className={classname}>{children}</button>
    </div>
  )
}

export default Button