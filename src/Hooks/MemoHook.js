import React, { useMemo, useState, useEffect } from 'react'

const MemoHook = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const themeStyle = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }



  // In this example we have created a really slow function that takes a second or two to update & because of what have learnt from useState we know that this is going to run everytime state is updated and or when the component reloads

  // const BadExampledouleNumber = slowFunction(number)
  const slowFunction = (num) => {
    console.log('calling slow function')
    for (let i = 0; i <= 1000000000; i++) { }
    return num * 2
  }
  // In this example it results in the theme update taking much longer than it needs to because the app is struggling to run through the slow function each time the componet reloads after the setDark state is changed.
  // To fix this we can take advantage of useMemo and dependcy arrays we learnt about in the useEffect lesson
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])
  // So now we only have to run the slow code only when we need to
  // One thing to remeber is that over using memo can lead to memory and preformance issues - so only use it when it is actaully needed.

  // Another reason you might want to use useMemo is for referential equality, see below for an example
  const object = { test: 'hello' }
  const object2 = { test: 'hello' }
  // In javascript if we were to compare object and object2 you would think they would be equal because have the same values but in javascript they reference different objects, they have the same value but the reference to the object itself is different

  // in the example below it looks like we are only going to run this console log ever timeStyle changes however everytime our function is run and the component is reloaded a new themeStyle is created which is references a different places in memory
  useEffect(() => {
    console.log('theme Changed')
  }, [themeStyle])

  // To fix this we can just wrap themeStyle in a memo like we have done below
  const BetterThemeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }, [dark]
  })
  // Now our ThemeStyle will be memoized retaining the same reference across renders and will only run when the state dark is changed


  return (
    <>
      <input
        type='number'
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyle}>{doubleNumber}</div>
    </>
  )
}

export default MemoHook
