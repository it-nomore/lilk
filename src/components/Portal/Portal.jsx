import './Portal.css';
import { useRef } from 'react'

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
      iframeRef.current.style = `height: ${height}px`;
    } catch(e) { console.log('error resize | ', e) }
  }
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