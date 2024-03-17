import './Frame.scss';

export function Frame(props) {
  return (
    <div className='frame-container'>
      <img src={props.source} alt="Customer Satisfaction"/>
      <div className='text'>{props.text}</div>
    </div>
  )
}