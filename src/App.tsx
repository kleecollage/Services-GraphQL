import Chat from "./components/Chat"
import CounterIncrementWS from "./components/CounterIncrementWS"
import CounterQM from "./components/CounterQM"
import Header from "./components/Header"

const App = () => {
  return (
    <>
    <Header />
    <div className="container m-5">
      <Chat />
      <hr />
      <CounterQM />
      <hr />
      <CounterIncrementWS />
    </div>
    </>
  )
}

export default App
