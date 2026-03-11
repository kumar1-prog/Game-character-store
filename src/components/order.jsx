function Order({ close }) {
  return (
    <>
      <div className="sidebar-overlay" onClick={close}></div>

      <aside className="orders-sidebar active">

        <div className="sidebar-header">
          <h3>Your Orders</h3>
          <button onClick={close}>×</button>
        </div>

        <div className="sidebar-body">
          <p>No orders yet</p>
        </div>
        <div className="sidebar-footer">
            <div>Total: $0.00</div>
            <button onClick={() => alert("Ordered successfully!")}>
                Order Now →
            </button>

        </div>

      </aside>
    </>
  );
}

export default Order;