import { useMutation, useSubscription } from "@apollo/client";
import { FormEvent, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuid } from "uuid";
import { SEND_MESSAGE, SEND_MESSAGE_SUBSCRIPTION } from "../gql/messages";

const client = uuid();
export const useMessage = () => {
  const [sendMessageFunction] = useMutation(SEND_MESSAGE)
  const { data, error, loading } = useSubscription(SEND_MESSAGE_SUBSCRIPTION);

  const [messages, setMessages] = useState<any[]>([]);
  const [messageInput, setMessageInput] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (messages.length === 0 && loading) return;

    setMessages([data?.sendMessage, ...messages])
  }, [data])


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isValid || messageInput.trim().length === 0) {
      Swal.fire('Error', 'Message cannot be empty', 'error')
      return
    }
    await sendMessageFunction({
      variables: {
        "input": {
          "to": client,
          "from": uuid(),
          "text": messageInput,
        }
      }
    });
    setMessageInput('')
  }

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setMessageInput(newValue);

    if (newValue.trim().length > 0) {
      setIsValid(true);
      return;
    }

    setIsValid(false);
  }

  return {
    // properties
    client,
    error,
    messageInput,
    isValid,
    loading,
    messages,
    //methods
    handleInputChange,
    handleSubmit,
    sendMessageFunction
  };
}