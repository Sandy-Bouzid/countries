import blackMoon from '../assets/moon-black.png';

export default function Header() {

  return (
    <header>
      <h1>Where in the world ?</h1>
      <div className='mode'>
        <img src={blackMoon} alt="moon icon" className='icon' />
        <button type="button">Dark Mode</button>
      </div>
    </header>
  )
}

