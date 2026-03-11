import React from "react";

function Sidebar({ orders = [], close, clearOrders }) {
  // Calculate total
  const totalAmount = orders.reduce((sum, o) => sum + (o.total || 0), 0).toFixed(2);

  return (
    <>
      {/* Overlay to close */}
      <div className="sidebar-overlay active" onClick={close}></div>
      
      <aside className="orders-sidebar active">
        <div className="sidebar-header">
          <h3 className="sidebar-title">Your Orders</h3>
          <button className="sidebar-close" onClick={close}>&times;</button>
        </div>

        <div className="sidebar-body">
          {orders.length === 0 ? (
            <div className="sidebar-empty">
              <p style={{textAlign: "center", padding: "20px", color: "#888"}}>No orders yet</p>
            </div>
          ) : (
            orders.map((order, index) => (
              <div className="order-item" key={index}>
                <div className="order-item-img">
                  <img src={order.image} alt={order.name} />
                </div>
                <div className="order-item-info">
                  <div className="order-item-name">{order.name}</div>
                  <div className="order-item-buyer">Buyer: {order.buyer}</div>
                  <div className="order-item-meta">
                    <span>x{order.qty}</span>
                    <span>${order.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="sidebar-footer">
          <div className="sidebar-total">
            <span>Total</span>
            <span>${totalAmount}</span>
          </div>
          <button className="btn-order-now" onClick={() => {
            if(orders.length > 0) {
              alert("Order Placed!");
              clearOrders();
              close();
            }
          }}>
            Order Now →
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;