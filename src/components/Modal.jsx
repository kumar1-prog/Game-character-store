import {useState} from "react"

function Modal({character,addOrder,close}){

const [name,setName] = useState("")
const [qty,setQty] = useState(1)
const total = (qty*character.price).toFixed(2)

const submit=(e)=>{
e.preventDefault()

const order = {
name:character.name,
image:character.image,
buyer:name,
qty:Number(qty),
total:Number(qty)*character.price
};


const existing = JSON.parse(localStorage.getItem("orders")) || []


existing.push(order)


localStorage.setItem("orders", JSON.stringify(existing))

addOrder(order)

close()
}

return(

<div className="modal-overlay">

<div className="modal">


<div className="modal-header">
    
  <button className = "modal-close" onClick={close}>×</button>

<img src={character.image} className="modal-img"/>

</div>

<h3>{character.name}</h3>
<span>{character.type}</span>

<form onSubmit={submit}>

<input
placeholder="Enter your name"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>

<input
type="number"
value={qty}
min="1"
onChange={(e)=>setQty(Number(e.target.value))}
/>

<p>Total: ${total}</p>

<button type="submit" className="btn-purchase">
Confirm Purchase →
</button>

</form>

</div>

</div>

)

}

export default Modal