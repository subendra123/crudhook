import React from 'react'

const Todos = ({todos}) => {
  return (
    <>
    {
        todos.map((curElem, index) => {
          return(
            <>
              <div>
                <a>{curElem.text}</a>
              </div>
            </>
          )
        })
      }
    </>

  )
}

export default Todos