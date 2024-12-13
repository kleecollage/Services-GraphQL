import CounterIncrementWS from "./components/CounterIncrementWS"
import CounterQM from "./components/CounterQM"
import Header from "./components/Header"

const App = () => {
  return (
    <>
    <Header />
    <div className="container m-5">
      <CounterQM />
      <hr />
      <CounterIncrementWS />
    </div>
    </>
  )
}

export default App
