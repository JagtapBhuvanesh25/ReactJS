import { useState } from 'react'
import useCurrInfo from './hooks/useCurrInfo'
import InputBox from './components/InputBox'

function App() {
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [to, setTo] = useState("inr")
  const [from, setFrom] = useState("usd")

  const currData = useCurrInfo(from)
  const currOpt = Object.keys(currData)

  const swap = () => {
    setAmount(convertedAmount)
    setConvertedAmount(amount)
    setFrom(to)
    setTo(from)
  }

  const convert = () => {
    if (currData && currData[to]) {
      setConvertedAmount(amount * currData[to])
    }
  }

  return (
    
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://wallpapers.com/images/hd/cool-money-9c4d9ikwnq07hnoc.jpg)`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={(val) => setAmount(val)}
                onCurrencyChange={(curr) => setFrom(curr)}
                currencyOptions={currOpt}
                selectedCurrency={from}
                AmountChange={true}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                onAmountChange={(val) => setConvertedAmount(val)}
                onCurrencyChange={(curr) => setTo(curr)}
                currencyOptions={currOpt}
                selectedCurrency={to}
                AmountChange={false}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert From {from.toUpperCase()} To {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App