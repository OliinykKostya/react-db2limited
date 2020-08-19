import React from "react"

const Button = ({ pathname, onSorted }) => {

  const handleSort = () => {
    onSorted(pathname === '/films' ? 'title': 'name')
  }

  return (
    <>
      <button type="button" class="btn  btn-primary" onClick={handleSort}>Sort</button>
    </>
  )
}

export default Button
