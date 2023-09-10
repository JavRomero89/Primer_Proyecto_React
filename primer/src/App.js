// import React from 'react'


import "./App.css";
import Board from "./components/board/Board";
import Counter from "./components/counter/Counter.jsx";
import CreditCard from "./components/creditCard/CreditCard";
import LikeButton from "./components/likebutton/LikeButton";
import UserCard from "./components/usercard/UserCard.jsx";





function App() {
    return (
        <>
            {/* <Board />
            <div className="creditCardBox">
                <CreditCard
                    type="Visa"
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
            <div id="linkedin">
                <UserCard
                    name="Paco Gonzalez"
                    rating="★★★☆☆"
                    gender="Male"
                    job="Frontend Engeenier"
                    city="Torrezno de la Vega (Albacete)"
                    color="white"
                    bgColor="#445EB5"
                />
                <UserCard
                    name="Elena Ramirez"
                    rating="★★★★☆"
                    gender="Female"
                    job="Systems Architect"
                    city="Trabuco del Camino (Murcia)"
                    color="white"
                    bgColor="#445EB5"
                />
                <UserCard
                    name="Benito Perez"
                    rating="★☆☆☆☆"
                    gender="Male"
                    job="Data Analist"
                    city="Villaconejos de Arriba (Palencia)"
                    color="white"
                    bgColor="#445EB5"
                />

                
            </div> */}

            <Counter/>

            <LikeButton/>
        </>
    );
}

export default App;
