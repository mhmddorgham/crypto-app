import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import Account from "./routes/Account";
import axios from "axios";
import CoinPage from "./routes/CoinPage";
import Footer from "./components/Footer.jsx";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en";

  // Use a CORS proxy: You can use a third-party CORS proxy like crossorigin.me or cors-anywhere.herokuapp.com
  //to make requests to the CoinGecko API.
  //These services act as a middleman between your React application and the API, adding the necessary headers to allow the request to go through.
  fetch(
    "https://crossorigin.me/https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en"
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
      console.log(response.data);
    });
  }, [url]);

  return (
    <ThemeProvider>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home coins={coins} />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/coin/:coinId" element={<CoinPage />}>
            <Route path=":coinId" />
          </Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
};

export default App;
