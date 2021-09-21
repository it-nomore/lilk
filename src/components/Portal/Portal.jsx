import './Portal.css';
import { useRef, useState } from 'react'

function Portal({ html, name, sizes }) {
  const [finalSizes, setFinalSizes] = useState({width: '1px', height: '1px'})
  const iframeRef = useRef(null)
  const handleLoad = () => {
    let body, html, height, width;
    try {
      body = iframeRef.current.contentDocument.body;
      html = iframeRef.current.contentDocument.documentElement;
      height = Math.max(
        body.scrollHeight, 
        body.offsetHeight, 
        // html.clientHeight, 
        // html.scrollHeight, 
        html.offsetHeight,
      );
      width = Math.max(
        body.scrollWidth, 
        body.offsetWidth, 
        // html.clientWidth, 
        html.scrollWidth, 
        // html.offsetWidth,
      );
    } catch(e) { console.log(e) }
    let finalHeight;
    switch (sizes.height) {
      case 'min':
        finalHeight = height ? `${height}px` : '100%';
        break;
      case 'max':
        const winHeight = document.documentElement.clientHeight;
        if (!height) { finalHeight = '100%'; break; }
        finalHeight = winHeight > height ? '100%' : `${height}px`;
        break;
      default:
        finalHeight = `${sizes.height}px`;
    }
    let finalWidth;
    switch (sizes.width) {
      case 'min':
        finalWidth = width ? `${width}px` : '100%';
        break;
      case 'max':
        const winWidth = document.documentElement.clientWidth;
        if (!width) { finalWidth = '100%'; break; }
        finalWidth = winWidth > width ? '100%' : `${width}px`;
        break;
      default:
        finalWidth = `${sizes.width}px`;
    }
    setFinalSizes((fS) => {
      if (fS.width === finalWidth && fS.height === finalHeight) return fS
      return {width: finalWidth, height: finalHeight}
    });
  }
  return (
    <iframe 
      ref={iframeRef}
      onLoad={handleLoad}
      className="Portal" 
      frameBorder="0"
      scrolling="no"
      title="wed"
      name={name}
      srcDoc={html}
      style={{
        minWidth: finalSizes.width, 
        minHeight: finalSizes.height,
        width: finalSizes.width, 
        height: finalSizes.height
      }}
    />
  )
}

export default Portal;