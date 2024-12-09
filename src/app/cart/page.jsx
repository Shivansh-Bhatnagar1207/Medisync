import Link from 'next/link'
import React from 'react'

export default function Cart() {
  return (

    <>
      <header className="navbar">
        <h1>Your Cart</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/">Customer Dashboard</Link>
        </nav>
      </header>
      <div className="dashboard-content">
        <div className="cart-content">
          <h2>Items in Your Cart</h2>
          <div id="cartItems"></div>
          <h3>Total Amount: ₹<span id="totalAmount">0</span></h3>
          <button>Clear Cart</button>
          <Link href={'/'}>
            <button>Continue Shopping</button>
          </Link>
        </div>
      </div>

    </>
  )
}
