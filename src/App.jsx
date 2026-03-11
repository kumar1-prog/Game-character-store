import { useState, useEffect } from "react";
import Hero from "./components/hero";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Navbar from "./components/nav";
import Modal from "./components/Modal";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";

function App() {
 
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });

  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

 
  const openModal = (char) => {
    setSelected(char);
    setShowModal(true);
  };

  
  const addOrder = (newOrder) => {
    console.log("Adding order:", newOrder);
    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  
  const clearOrders = () => {
    setOrders([]);
    localStorage.removeItem("orders");
  };

  return (
    <>
     
      <Navbar openSidebar={() => {
        console.log("Opening sidebar");
        setShowSidebar(true);}
      } />
      
      <Hero />
      <Section2 />
      <Section3 openModal={openModal} />

      {showModal && (
        <Modal
          character={selected}
          addOrder={addOrder}
          close={() => setShowModal(false)}
        />
      )}

      {showSidebar && (
        <Sidebar
          orders={orders}
          clearOrders={clearOrders}
          close={() => setShowSidebar(false)}
        />
      )}

      <Footer />
    </>
  );
}

export default App;