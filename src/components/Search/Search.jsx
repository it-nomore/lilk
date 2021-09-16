import './Search.css';

function Search({ llck, onPull, onSearchChange }) {
  const handleChange = (e) => {
    onSearchChange(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onPull(e.target[0].value);
  }
  return (
    <form className="Search" onSubmit={handleSubmit}>
      <input className="Search-field" type="text" value={llck} onChange={handleChange} />
      <button className="Search-button">pull</button>
    </form>
  )
}

export default Search;