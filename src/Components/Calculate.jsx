import React, { useState } from "react"
import "./calculate.css"
import { MDBInput } from "mdb-react-ui-kit"
import { MDBBtn } from "mdb-react-ui-kit"

function Calculate() {
  const [amount, setAmount] = useState("")
  const [tenure, setTenure] = useState("")
  const [interestRate, setInterestRate] = useState(0)
  const [result, setResult] = useState("")

  const calculate = () => {
    if (amount == "" || tenure == "" || interestRate == "") {
      alert("Please enter all the details")
    } else if (amount == 0 || tenure == 0 || interestRate == 0) {
      alert("Please enter a valid digit for emi calculation")
    } else {
      const monthlyInterest = interestRate / 1200
      const noofPayment = tenure * 12

      const emi = (amount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -noofPayment))
      setResult(emi.toFixed(2))
    }
  }

  const reset = () => {
    setAmount(0)
    setInterestRate(0)
    setTenure(0)
    setResult(0)
  }

  return (
    <div>
      <div className="forms">
        <MDBInput label="Amount" id="formControlLg" type="text" size="lg" value={amount || " "} onChange={(e) => setAmount(e.target.value)} />
        <br />
        <MDBInput label="Tenure" id="formControlLg" type="text" size="lg" value={tenure || ""} onChange={(e) => setTenure(e.target.value)} />
        <br />
        <MDBInput label="Interest rate in %" id="formControlLg" type="text" size="lg" value={interestRate || ""} onChange={(e) => setInterestRate(e.target.value)} />
        <br />
        <MDBBtn className="me-1" color="success" onClick={(e) => calculate(e)}>
          CALCULATE
        </MDBBtn>
        <MDBBtn className="me-1" color="success" onClick={(e) => reset(e)}>
          RESET
        </MDBBtn>
      </div>

      <div className="result">
        <h4>Your Monthly Loan EMI : &#8377;{result}</h4>
      </div>
    </div>
  )
}

export default Calculate
