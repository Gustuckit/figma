import React, { useState } from 'react'

import { Navbar, Hero } from "./components"

export const Context = React.createContext()

const App = () => {

  const [cartItems, setCart] = useState(0)

  return (
    <Context.Provider value={[cartItems, setCart]}>
      <section>
        <Navbar />
      </section>
      <section className='mt-[90px] w-full px-[213px]'>
        <Hero />
      </section>
    </Context.Provider>
  )
}

export default App