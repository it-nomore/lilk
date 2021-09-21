import { useEffect, useState } from 'react';
import './DocPanel.css';

const sizesArr = [
  {width: 'min', height: 'min'},
  {width: 'max', height: 'max'},
  {width: 'max', height: 'min'},
  {width: 'min', height: 'max'},
  {width: 'max', height: '50%'},
  {width: '50%', height: 'max'},
  {width: '50%', height: '50%'},
  {width: 'min', height: '50%'},
  {width: '50%', height: 'min'},
  {width: 'max', height: '33%'},
  {width: 'max', height: '25%'},
  {width: '33%', height: 'max'},
  {width: '25%', height: 'max'},
  {width: '33%', height: '33%'},
  {width: '25%', height: '25%'},
]

function DocPanel({ onSizesChange, width, height }) {
  const handleSubmit = (e) => e.preventDefault()
  const [sizes, setSizes] = useState({width: width, height: height})
  const handleClick = () => setSizes((sizes) => {
    const i = sizesArr.findIndex(s => s.width === sizes.width && s.height === sizes.height);
    return i < sizesArr.length-1 ? {...sizesArr[i+1]} :  {...sizesArr[0]};
  });
  useEffect(() => setSizes({width: width, height: height}), [width, height])
  useEffect(() => onSizesChange(sizes), [sizes, onSizesChange]);
  return (
    <form className="DocPanel" onSubmit={handleSubmit}>
      <button className="DocPanel-button" onClick={handleClick}>sizes : {sizes.width} / {sizes.height}</button>
    </form>
  )
}

export default DocPanel;