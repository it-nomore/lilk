import { useEffect, useState } from 'react';
import Link from '../Link/Link';
import LLCK from '../LLCK/LLCK';
import Portal from '../Portal/Portal';
import PushForm from '../PushForm/PushForm';
import './View.css';

function View({ req, onPull }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState(null);
  const [infoMap, setInfoMap] = useState(null);

  useEffect(() => {
    fetch(`https://tranquil-chamber-18069.herokuapp.com/?${req}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          setInfoMap(!req ? LLCK.makeInfoMap(result) : null)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [req])

  useEffect(() => {
    window.addEventListener('message', (e) => {
      if (!e.data || typeof(e.data) !== 'string') return;
      setMessage({
        from: e.source.name,
        data: e.data,
      });
    })
  }, [])

  const handlePush = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        ...LLCK.parseToObj(message.data),
        html: message.data,
      })
    };
    fetch('https://tranquil-chamber-18069.herokuapp.com/', requestOptions)
    setMessage(null);
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <ul className={`View ${!req ? "View--shorts" : ""}`}>
        {req && items.map((item, index) => (
          <li key={index} className="View-item">
            <Portal html={item.html} name={index} />
            {message && message.from === index.toString() &&
              <PushForm onPush={handlePush} />
            }
          </li>
        ))}
        {!req && infoMap && Array.from(infoMap).map((item, index) => (
          <li key={index} className="View-item">
            <Link name={item[0]} count={item[1]} onPull={onPull} />
          </li>
        ))
        }
      </ul>
    );
  }
}

export default View;