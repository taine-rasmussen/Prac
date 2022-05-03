import React, { useEffect, useState } from 'react'

const EffectHook = () => {
  const [resourceType, setResourceType] = useState('posts')
  const [data, setData] = useState([])
  // A basic example of useEffect below, this will run everytime the component renders
  useEffect(() => {
    console.log('This will only run when the components mount')
  }, [])
  // What makes useEffect powerful is the second paramater it takes as seen in the example below.
  // This is a dependency array. Leaving it empty means it will only run on the first render, however if you pass it a value the code inside useEffect will only run when that value changes.
  useEffect(() => {
    console.log('this will only run when resource type changes')
  }, [resourceType])


  // In the examples below we are calling an API to return some mock data. We don't want this to run everytime the component is rendered.
  // Making use of useEffect we can query the API for the different data only when the resourceType changes by adding it to the dependency array.
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [resourceType])
  // The data returned from this API is being displayed, noticed if you select the same resourceType nothing will happen thanks to the dependency array checking that nothing has changed so it doesn't need to run its code again.


  // The last thing to touch on is useEffect "clean up" this can be seen in the example below starting from the return
  useEffect(() => {
    console.log('this will only run when resource type changes')

    return () => {
      console.log('this is the clean up code')
    }
  }, [resourceType])
  // Whenever this useEffect is ran the code inside the return function will run first before anything else, this is why it can be known as clean up code because you can you use this to clean up anything you might have done the previous time the useEffect had run. 
  // The clean up code will also run anytime the component is unmounted


  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {data?.map((item, i) => {
        return (
          <pre key={i}>{JSON.stringify(item)}</pre>
        )
      })}
    </>
  )
}

export default EffectHook
