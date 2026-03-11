import { useState } from "react";

export default function PurchaseModal({ character, onClose, onPurchase }) {

  const [name, setName] = useState("");
  const [qty, setQty] = useState(1);

  const total = (qty * character.price).toFixed(2);

  const submit = (e) => {
    e.preventDefault();

    onPurchase({
      name: character.name,
      image: character.image,
      buyer: name,
      qty: qty,
      total: qty * character.price
    });

    onClose();
  };

  return (
    <div className="modal-overlay">

      <div className="modal">

        <button onClick={onClose}>×</button>

        <img src={character.image} alt="" />

        <h3>{character.name}</h3>
        <span>{character.type}</span>

        <form onSubmit={submit}>

          <input
            placeholder="Your Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />

          <input
            type="number"
            min="1"
            value={qty}
            onChange={(e)=>setQty(e.target.value)}
          />

          <p>Price: ${character.price}</p>
          <p>Total: ${total}</p>

          <button type="submit">
            Confirm Purchase
          </button>

        </form>

      </div>

    </div>
  );
}