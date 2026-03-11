import React from "react";

// Receive openSidebar as a prop
function Navbar({ openSidebar }) {
  return (
    <>
      <nav className="nav" id="navbar">
        <div>
          <h2 className="navheads">PIXEL LEGENDS</h2>
        </div>
        <div className="options">
          <div className="Browse">
            <a href="#section3" className="Browse">Browse</a>
          </div>
          <div>
            {/* Call the prop function instead of using local state */}
            <button onClick={openSidebar} className="order">
              Orders
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;