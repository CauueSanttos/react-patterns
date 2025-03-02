import { useEffect, useState } from 'react'

export const ControlledForm = () => {
  const [error, setError] = useState('')

  const [name, setName] = useState('')
  const [age, setAge] = useState()

  useEffect(() => {
    if (name.length < 1) {
      setError('Name can not be empty')
    } else {
      setError('')
    }
  }, [name])

  return (
    <form>
      {error && <p>{error}</p>}

      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        id="age"
        name="age"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button>Submit</button>
    </form>
  )
}
