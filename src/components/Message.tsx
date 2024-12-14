const Message = ({message}: any) => {
  return (
    <div className="card my-3">
    <div className="car-body">
      <h5 className="card-title">{message?.text}</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">From: {message?.to}</h6>
      <span className="card-link">To: {message?.from}</span>
      <span className="card-link">Date: {message?.createdAt}</span>
    </div>
  </div>
  )
}

export default Message
