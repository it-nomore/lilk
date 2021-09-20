import './Portal.css';
import { useEffect, useRef } from 'react'

function Portal({ html, name }) {
  const iframeRef = useRef(null)
  const resize = () => {
    try {
      const body = iframeRef.current.contentDocument.body;
      const html = iframeRef.current.contentDocument.documentElement;
      const height = Math.max(
        body.scrollHeight, 
        body.offsetHeight, 
        // html.clientHeight, 
        // html.scrollHeight, 
        html.offsetHeight,
      );
      const width = Math.max(
        body.scrollWidth, 
        body.offsetWidth, 
        html.clientWidth, 
        html.scrollWidth, 
        html.offsetWidth,
      );
      iframeRef.current.style = `height: ${height}px; width: ${width}px`;
    } catch(e) { console.log('error resize | ', e) }
  }
  useEffect(() => resize());
  return (
    <iframe 
      ref={iframeRef}
      onLoad={resize}
      className="Portal" 
      frameBorder="0"
      scrolling="no"
      title="wed"
      name={name}
      srcDoc={html}
    />
  )
}

export default Portal;