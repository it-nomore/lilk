import { useEffect, useState } from 'react';
import DocPanel from '../DocPanel/DocPanel';
import Portal from '../Portal/Portal';
import PushForm from '../PushForm/PushForm';
import './DocView.css';


function DocView({ index, isOptions, html, message, onPush, width, height }) {
  const [sizes, setSizes] = useState({width: width, height: height})
  const [sizesStyle, setSizesStyle] = useState({width: 'fit-content', height: 'fit-content'})
  const handleSizesChange = (sizes) => setSizes(sizes);
  useEffect(() => {
    setSizesStyle({
      width: sizes.width === 'min' ? 'fit-content' : sizes.width === 'max' ? '100%' : sizes.width,
      height: sizes.height === 'min' ? 'fit-content' : sizes.height === 'max' ? '100%' : sizes.height
    })
  }, [sizes, width, height])
  useEffect(() => {
    setSizesStyle({
      width: width === 'min' ? 'fit-content' : width === 'max' ? '100%' : width,
      height: height === 'min' ? 'fit-content' : height === 'max' ? '100%' : height
    })
  }, [width, height])
  return (
    <li 
      key={index} 
      className={`DocView ${isOptions ? 'DocView--bordered' : ''}`}
      style={{
        minWidth: sizesStyle.width, 
        minHeight: sizesStyle.height,
        width: sizesStyle.width, 
        height: sizesStyle.height
      }}
    >
      <div className="DocView-portal">
        <Portal html={html} name={index} sizes={sizes} />
      </div>
      <div className="DocView-panel">
        {isOptions &&
          <DocPanel onSizesChange={handleSizesChange} height={height} width={width} /> 
        }
        {message && message.from === index.toString() &&
          <PushForm onPush={onPush} />
        }
      </div>
    </li>
  )
}

export default DocView;