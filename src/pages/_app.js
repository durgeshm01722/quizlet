import '@/styles/globals.css';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext();

export default function App({ Component, pageProps }) {
  const [loggedin, setLoggedin] = useState(false);

  const toggleLoggedin = () => {
    setLoggedin(!loggedin);
  }

  useEffect(() => {
    AOS.init();
    setLoggedin(localStorage.getItem("username") ? true : false);
  }, []);

  return (
    <>
      <UserContext.Provider value={{ loggedin, toggleLoggedin }}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </UserContext.Provider>
    </>
  )
}
