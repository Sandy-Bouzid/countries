import Card from '../card'

export default function Home({ data }) {
  return (
    <main>
      <div className="search">
        <input type="search" name="searchbar" id="searchbar" placeholder='Search for a country...' />
        <select name="select" id="select">
          <option value="1">Filter by Region</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="cards">
        {data.map(country =>
            <Card country={country} />
        )}


      </div>
    </main>
  )
}

