import {useEffect, useState} from 'react'

const Sandbox = () => {
  const [showAsyncButton, setShowAsyncButton] = useState(false)
  const [liked, setLiked] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAsyncButton(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleToggleLike = () => {
    setLiked((current) => !current)
  }

  return (
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
      {/* Headings */}
      <h1>Main Heading</h1>
      <h2>Subheading</h2>
      <img src="example.jpg" alt="Example" />
      {/* Regular Buttons */}
      <button>Click Me</button>
      <button>Submit</button>
      <button>Cancel</button>
      <button aria-label={liked ? 'like button' : 'unlike button'} onClick={handleToggleLike}>
        {liked ? 'Like' : 'Unlike'}
      </button>
      {/* Demonstrate findByRole */}
      {showAsyncButton && <button>Async Button</button>}
    </div>
  )
}
export default Sandbox;
