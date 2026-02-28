const Card = (props) => {
  return <div className="card">
        <img src={props.link} alt="image" />
        <h2>{props.user}</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, corporis!</p>
        <button>View Profile</button>
      </div>
}

export default Card
