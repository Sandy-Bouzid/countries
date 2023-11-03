export default function Card({ country }) {

  return (
    <div className="card">
      <a href="http://">
        <div className="flag">
          <img src={country.flags.png} alt={country.name.common + 'flag'} />
        </div>
      </a>
      <div className="cardData">
        <h2>{country.name.common}</h2>
        <p><span>Population:</span> {country.population}</p>
        <p><span>Region:</span> {country.region}</p>
        <p><span>Capital:</span> {country.capital}</p>
      </div>
    </div>
  )
}


