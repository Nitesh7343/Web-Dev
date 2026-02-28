import React from 'react'
import Card from './components/Card'

const App = () => {
  return<div className='parent'>
      <Card user = 'Nitesh' link = "https://images.unsplash.com/photo-1771503735122-22405ba958f9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D"/>
      <Card user = 'Ashu' link = "https://plus.unsplash.com/premium_photo-1771136519980-fba8883a5a62?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
      <Card user = 'Dora' link = "https://plus.unsplash.com/premium_photo-1763072944317-fc4b2fd81470?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExN3xDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"/>
    </div>
}

export default App
