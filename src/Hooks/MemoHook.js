import React, { useMemo, useState } from 'react'

const MemoHook = () => {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)
  const themeStyle = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }
  const slowFunction = (num) => {
    console.log('calling slow function')
    for (let i = 0; i <= 1000000000; i++) { }
    return num * 2
  }


  // In this example we have created a really slow function that takes a second or two to update & because of what have learnt from useState we know that this is going to run everytime state is updated and or when the component reloads
  const BadExampledouleNumber = slowFunction(number)
  // In this example it results in the theme update taking much longer than it needs to because the app is struggling to run through the slow function each time the componet reloads after the setDark state is changed.
  // To fix this we can take advantage of useMemo and dependcy arrays we learnt about in the useEffect lesson
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])



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
        {doubleNumber}
      </div>
    </>
  )
}

export default MemoHook
