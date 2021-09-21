import { useEffect, useState } from 'react';
import './Settings.css';

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

function Settings({ onArrangeChange, display }) {
  const [arrange, setArrange] = useState({
    direction: 'row',
    wrap: 'wrap',
    justify: 'center',
    items: 'center',
    content: 'start',
    sizes: {width: 'min', height: 'min'},
    options: false,
  })
  const handleSubmit = (e) => e.preventDefault()
  const handleClick = (e) => {
    switch (e.target.name) {
      case 'direction':
        setArrange((arrange) => ({
          ...arrange,
          sizes: {...arrange.sizes},
          direction: arrange.direction === 'row' ? 'column' : 'row',
        }))
        break;
      case 'wrap':
        setArrange((arrange) => ({
          ...arrange,
          wrap: arrange.wrap === 'wrap' ? 'nowrap' : 'wrap',
        }))
        break;
      case 'justify':
        setArrange((arrange) => ({
          ...arrange,
          sizes: {...arrange.sizes},
          justify: arrange.justify === 'center' ? 'start' :
            arrange.justify === 'start' ? 'end' :
            arrange.justify === 'end' ? 'space-between' :
            arrange.justify === 'space-between' ? 'space-around' :
            arrange.justify === 'space-around' ? 'space-evenly' : 'center',
        }))
        break;
      case 'items':
        setArrange((arrange) => ({
          ...arrange,
          sizes: {...arrange.sizes},
          items: arrange.items === 'center' ? 'start' :
            arrange.items === 'start' ? 'end' : 'center',
        }))
        break;
      case 'content':
        setArrange((arrange) => ({
          ...arrange,
          sizes: {...arrange.sizes},
          content: arrange.content === 'center' ? 'start' :
            arrange.content === 'start' ? 'end' :
            arrange.content === 'end' ? 'space-between' :
            arrange.content === 'space-between' ? 'space-around' : 'center',
        }))
        break;
      case 'sizes':
        const i = sizesArr.findIndex(s => s.width === arrange.sizes.width && s.height === arrange.sizes.height);
        setArrange((arrange) => ({
          ...arrange,
          sizes: i < sizesArr.length-1 ? {...sizesArr[i+1]} :  {...sizesArr[0]},
        }))
        break;
      case 'options':
        setArrange((arrange) => ({
          ...arrange,
          sizes: {...arrange.sizes},
          options: !arrange.options,
        }))
        break;
      default:
        setArrange({
          direction: 'row',
          wrap: 'wrap',
          justify: 'center',
          items: 'center',
          content: 'start',
          sizes: {width: 'min', height: 'min'},
          options: false,
        });
    }
  }
  useEffect(() => onArrangeChange(arrange), [arrange, onArrangeChange]);
  return (
    <form className={`Settings ${display ? '':'Settings--none'}`} onSubmit={handleSubmit}>
      <button className="Settings-button" name="default" onClick={handleClick}>defaults</button>
      <button className="Settings-button" name="direction" onClick={handleClick}>{arrange.direction}</button>
      <button className="Settings-button" name="wrap" onClick={handleClick}>{arrange.wrap}</button>
      <button className="Settings-button" name="justify" onClick={handleClick}>justify : {arrange.justify}</button>
      <button className="Settings-button" name="items" onClick={handleClick}>align : {arrange.items}</button>
      <button className="Settings-button" name="content" onClick={handleClick}>{arrange.direction}s : {arrange.content}</button>
      <button className="Settings-button" name="sizes" onClick={handleClick}>sizes : {arrange.sizes.width} / {arrange.sizes.height}</button>
      <button className="Settings-button" name="options" onClick={handleClick}>options : {arrange.options ? 'on' : 'off'}</button>
    </form>
  )
}

export default Settings;