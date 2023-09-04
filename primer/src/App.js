// import React from 'react'


import "./App.css";
import Board from "./components/board/Board";
import CreditCard from "./components/creditCard/CreditCard";

function App() {
return (
<>
<Board />
<div className="creditCardBox">
<CreditCard
type="Visa bhbh"
number="0123456789018845"
expirationMonth={3}
expirationYear={2021}
bank="BNP"
owner="Maxence Bouret"
bgColor="#11aa99"
color="white"
/>

<CreditCard
type="Master Card"
number="0123456789010995"
expirationMonth={3}
expirationYear={2021}
bank="N26"
owner="Maxence Bouret"
bgColor="#eeeeee"
color="#222222"
/>

<CreditCard
type="Visa"
number="0123456789016984"
expirationMonth={12}
expirationYear={2019}
bank="Name of the Bank"
owner="Firstname Lastname"
bgColor="#ddbb55"
color="white"
/>
</div>
</>
);
}

export default App;
