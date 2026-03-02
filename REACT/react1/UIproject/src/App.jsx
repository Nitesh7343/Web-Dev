import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () =>{

  const user = [
    {
      img:'https://i.pinimg.com/1200x/90/75/9e/90759e4db48d069f6428ea4f13a567ca.jpg',
      intro:'A social networking web application enabling users to connect, share updates, and interact in real time. Designed with interactive UI components, authentication systems, and optimized database management.',
      tag:'Connectify'
    },
    {
      img:'https://i.pinimg.com/avif/736x/7f/9e/6f/7f9e6fbe7f7ecb24b5ad7ab2ebd46337.avf',
      intro:'A modern accommodation booking platform inspired by real-world rental systems. Features include property listings, search and filtering, authentication, and dynamic user dashboards with a clean, responsive interface.',
      tag:'Stayora'
    },
    {
      img:'https://i.pinimg.com/1200x/59/3a/47/593a47be6c534409d12594e9d4f5a778.jpg',
      intro:'A full-stack trading platform concept designed to simulate real-time market interactions. Built with a responsive UI and structured backend logic, it focuses on secure transactions, data handling, and scalable system architecture.',
      tag:'TradeSphere'
    }
  ];

  return <div>
    <Section1 user = {user}/>
    <Section2/>
  </div>
}

export default App;