import React, { useMemo, useState } from 'react'

const MemoHook = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const themeStyle = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }

  const slowFunction = (num) => {
    console.log('calling slow function')
    for (let i = 0; i <= 10000000000; i++) {
      return num * 2
    }
  }

  const douleNumber = slowFunction(number)

  return (
    <>
      <input
        type='number'
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button
        onClick={() => setDark(prevDark => !prevDark)}
      >Change Theme</button>
      <div
        style={themeStyle}
      >
        {douleNumber}
      </div>
    </>
  )
}

export default MemoHook
