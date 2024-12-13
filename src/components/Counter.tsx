import { gql, useMutation, useQuery } from "@apollo/client";

const GET_COUNT = gql`
  query GetCount {
    getCount
  }
`
const INCREMENT_COUNT = gql`
  mutation IncrementCount {
    incrementCount
  }
`

const DECREMENT_COUNT = gql`
  mutation DecrementCount {
    decrementCount
  }
`

const Counter = () => {
  const { data, networkStatus, loading, error, refetch } = useQuery(GET_COUNT);
  const [ incrementCountFunction] = useMutation(INCREMENT_COUNT)
  const [ decrementCountFunction] = useMutation(DECREMENT_COUNT)

  const handleIncrement = async () => {
    await incrementCountFunction()
    await refetch()
  }

  const handleDecrement = async () => {
    await decrementCountFunction()
    await refetch()
  }

  return (
		<>
			{ loading && <p>Loading ...</p> }
			{ error && <p>Error: {error.message}</p> }

      <h2>Counter Component: { data.getCount }</h2>

      <p>Network status: { networkStatus }</p>

      <button
        className="btn btn-lg btn-primary"
        type="button"
        onClick={handleIncrement}>
        Increment Count
      </button>

      <button className="btn btn-lg btn-warning ms-2" type="button" onClick={handleDecrement}>
        Decrement Count
      </button>
		</>
	);
}

export default Counter
