import { useMessage } from "../hooks/useMessage";

const ChatForm = () => {
  const {
    handleInputChange,
    handleSubmit,
    isValid,
    messageInput,
    client,
  } = useMessage();

  return (
    <div>
      <h2> Chat GraphQL </h2>
      <form onSubmit={ handleSubmit }>
        <div>
          <label className="form-label">Client: {client}</label>
        </div>

        <div>
          <label className="form-label"> Message </label>
          <input
            value={messageInput}
            onChange={handleInputChange}
            className="form-control w-50"
            type="text"
          />
        </div>

        <button
          disabled = {!isValid}
          className="btn btn-lg btn-success my-3 fw-bold w-50"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default ChatForm
