import { useCounter } from "../hooks/useCounter";

const CounterIncrementWS = () => {
  const { handleIncrement, loading, error, actualData, initialData } = useCounter()

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <>
      <span className="badge bg-success">Increment Subscription</span>
      <h2> Counter Component: { actualData?.incrementCount || initialData.getCount } </h2>

      <button
        onClick={handleIncrement}
        className="btn btn-lg btn-primary fw-bold"
        type="button" >
        Increment Count
      </button>
      <hr />
		</>
  )
}

export default CounterIncrementWS
