import React, { useState } from 'react'

const StateHook = () => {
  // Example of creating state by hard coding it. This will run each time your component is rendered.
  const [count, setCount] = useState(4)
  // Alternativly if you have something more complex that might slow your application down you can pass a function that will only run the first time the component is rendered. See example below
  const [exampleCount, setExampleCount] = useState(() => {
    console.log('this will only run on component render')
  })

  // Functions to handle adding and subtracting count
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  }
  const decrementCount = () => {
    setCount(prevCount => prevCount - 1)
  }

  // Using prevCount means we are altering the current previous value of count in the render.
  // In the example below it reads as if the function should decrease count by 2 however becuase we are referencing count we are only ever going to - 1 of the current value of count in this render. So the two setCounts are just overiding eachother and count only ever gets reduced by one. If we were to use prevCount it would take in the changed value from the line above and reduce count again off that, actually reducing it by 2.

  // Bad example
  const wrongDecrementCount = () => {
    setCount(count - 1)
    setCount(count - 1)
  };

  // When using objects in state a key thing to keep in mind is that your setState function will overide the current state not merge with it. 
  const [state, setState] = useState({ num: 3, theme: 'blue' })

  // This example although correctly using prevState would overide the original state and you would be left with { num: 5 }
  const wrongUpdateState = () => {
    setState(prevState => prevState.num + 2)
  }
  // To keep the current state while editing some other parts of it you need to spread your state then make your changes like the example below.
  const correctUpdateState = () => {
    setState(prevState => {
      return { ...prevState, num: prevState.num + 2 } // This example would return the original sate object including the theme and its value while adding 2 to num
    })
  }
  // So you can either deal with managing one large state or create multiple indiviual states handling one thing each

  return (
    <div>
      <h1>USESTATE</h1>
      <button onClick={decrementCount}>+</button>
      <span>{count}</span>
      <button onClick={incrementCount}>-</button>
    </div>
  )
}

export default StateHook
