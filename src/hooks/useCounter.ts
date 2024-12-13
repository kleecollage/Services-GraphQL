import { useMutation, useQuery, useSubscription } from "@apollo/client";
import { DECREMENT_COUNT, GET_COUNT, INCREMENT_COUNT, INCREMET_SUBSCRIPTION } from "../gql/counter";

export const useCounter = () => {
  const { data: initialData, loading } = useQuery(GET_COUNT);
  const [ incrementCountFunction] = useMutation(INCREMENT_COUNT)
  const [ decrementCountFunction] = useMutation(DECREMENT_COUNT)
  const { data: actualData, error } = useSubscription(INCREMET_SUBSCRIPTION)


  const handleIncrement = async () => {
    await incrementCountFunction()
  }

  const handleDecrement = async () => {
    await decrementCountFunction()
  }

  return {
    // properties
    loading,
    error,
    actualData,
    initialData,
    // methods
    handleIncrement,
    handleDecrement,
  }
}