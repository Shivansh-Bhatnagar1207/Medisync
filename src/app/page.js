'use client'

import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Image id="logo" src="/medlogo.png" width="100" height="100" alt="logo" />
      <div className="search-bar">
        <input type="text" id="search" placeholder="Search for medicines..." />
        <button >Search</button>
      </div>

      <div className="button-container">
        <Link href={'/cart'} className="carts">
          &#x1F6D2;
        </Link>
      </div>


      <h1 id="greet" align="center">Welcome to the <b>MEDSYNC</b></h1>

      <div className="info-box" id="infoBox">
        At <b>MEDSYNC</b>, we connect healthcare providers and patients seamlessly.
        Our platform offers secure appointment booking, health record management,
        and real-time health updates, ensuring a smooth and efficient healthcare experience.
        Our platform provides an all-in-one solution for patients to easily book appointments, manage their health records, and receive timely updates on prescriptions, test results, and medical history. We prioritize user privacy and ensure that all data is securely stored with the latest encryption technologies. Whether you’re looking to schedule a doctor’s appointment, monitor your health progress, or stay on top of your family’s healthcare needs, <b>MEDSYNC</b> is here to streamline your healthcare journey. With a focus on ease of use and efficiency, we aim to make healthcare more accessible, reliable, and stress-free for everyone.
      </div>
      <section className="featured-medicines">
        <h2>Featured Medicines</h2>
        <div className="medicine-list">
          <div className="medicine-card">
            <Image src="/img/Advil.jpeg" alt="Advil" width={200} height={200} />
            <h3>Advil</h3>
            <p> ₹10.00</p>
            <button className="add-to-cart" >Add to Cart</button>
            <button>Buy Now</button>
          </div>
          <div className="medicine-card">
            <Image src="/img/cetrizen.jpeg" alt="Cetrzen" width={200} height={200} />
            <h3>Cetrzen</h3>
            <p> ₹15.00</p>
            <button className="add-to-cart" >Add to Cart</button>
            <button >Buy Now</button>
          </div>
          <div className="medicine-card">
            <Image src="/img/cosartal plus.jpeg" alt="Cosartal Plus" width={200} height={200} />
            <h3>Cosartal Plus</h3>
            <p> ₹20.00</p>
            <button className="add-to-cart">Add to Cart</button>
            <button>Buy Now</button>
          </div>
          <div className="medicine-card">
            <Image src="/img/ibuprofen.jpeg" alt="Ibuprofen" width={200} height={200} />
            <h3>Ibuprofen</h3>
            <p> ₹25.00</p>
            <button className="add-to-cart" >Add to Cart</button>
            <button >Buy Now</button>
          </div>
          <div className="medicine-card">
            <Image src="/img/lasartan 50mg.jpeg" alt="Lasartan 50mg" width={200} height={200} />
            <h3>Lasartan 50mg</h3>
            <p> ₹30.00</p>
            <button className="add-to-cart" >Add to Cart</button>
            <button >Buy Now</button>
          </div>
          <div className="medicine-card">
            <Image src="/img/paracetamol.jpeg" alt="Paracetamol" width={200} height={200} />
            <h3>Paracetamol</h3>
            <p> ₹7.00</p>
            <button className="add-to-cart" >Add to Cart</button>
            <button >Buy Now</button>
          </div>
        </div>
      </section>


      <br /><br /><br />
      <div className="contact-container" align="center" width="50%">
        <h1 align="center">Contact Us</h1>
        <form>
          <input type="hidden" name="access_key" value="d5be935a-7a39-4c54-bc82-2139ff47074b" />
          <div className="form-group">
            <input type="text" id="name" name="name" className="form-control" placeholder="Enter your name !!" required />
          </div>
          <div className="form-group">
            <input type="email" id="email" name="email" className="form-control" placeholder="Email" required />
          </div> <br />
          <div className="form-group">
            <textarea id="message" name="message" className="form-control" rows="4" placeholder="Write your message" required></textarea>
          </div>
          <div id="result">
            <button type="submit" className="submit">Submit</button> </div>
        </form>
        <p id="successMessage" className="success-message"></p>

      </div>

    </>
  );
}
