import './PushForm.css';

function PushForm({ onPush }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onPush();
  }
  return (
    <form className="PushForm" onSubmit={handleSubmit}>
      <button className="PushForm-button">Push</button>
    </form>
  )
}

export default PushForm;