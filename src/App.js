
// React component
import { useState } from 'react';

// Components
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {
  const [menu, setMenu] = useState(true);
  // TO Toggle Menu 

  function getError(){
    setMenu(!menu)
  }
  return (
    <>
      <Header onToggleMenu={getError } />
      <Main />
      <Footer />
    </>
  )
}

export default App
