import './Link.css';

function Link({ name, count, onPull }) {
  const handleClick = (e) => {
    e.preventDefault();
    onPull(e.target.innerText);
  }
  return (
    <div className="Link">
      <a className="Link-title" href="/" onClick={handleClick}>{name}</a>
      <div className="Link-counter">{count}</div>
    </div>
  )
}

export default Link;