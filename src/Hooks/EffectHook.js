import React, { useEffect, useState } from 'react'

const EffectHook = () => {
  const [resourceType, setResourceType] = useState('posts')

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
      .then(json => console.log(json))
  }, [resourceType])


  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  )
}

export default EffectHook
