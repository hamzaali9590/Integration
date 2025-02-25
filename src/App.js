import { useEffect } from 'react'
import './index.css'
import { createSwapy } from 'swapy'

const DEFAULT = {
  '1': 'a',
  '3': 'c',
  '4': 'd',
  '2': null
}


function A() {
  return (
    <div className="item a" data-swapy-item="a">
        <div className="handle" data-swapy-handle></div>
        <div>A</div>
    </div>
  )
}

function C() {
  return (
    <div className="item c" data-swapy-item="c">
        <div>C</div>
    </div>
  )
}

function D() {
  return (
    <div className="item d" data-swapy-item="d">
        <div>D</div>
    </div>
  )
}

function getItemById(itemId) {
  switch (itemId) {
    case 'a':
      return <A />
    case 'c':
      return <C />
    case 'd':
      return <D />
    default:
      return null
  }
}


function App() {
  const slotItems = localStorage.getItem('slotItem') ? JSON.parse(localStorage.getItem('slotItem')) : DEFAULT
  useEffect(() => {
    const container = document.querySelector('.container')
    const swapy = createSwapy(container)
    swapy.onSwap(({ data }) => {
      localStorage.setItem('slotItem', JSON.stringify(data.object))
    })
  }, [])
  return (
    <div className="container">
        <h1>Swappy container example</h1>
        <div className="slot a" data-swapy-slot="1">
          {getItemById(slotItems['1'])}
        </div>
        <div className="second-row">
          <div className="slot b" data-swapy-slot="2">
            {getItemById(slotItems['2'])}
          </div>
          <div className="slot c" data-swapy-slot="3">
            {getItemById(slotItems['3'])}
          </div>
        </div>
        <div className="slot d" data-swapy-slot="4">
          {getItemById(slotItems['4'])}
        </div>
      </div>
  )
}

export default App