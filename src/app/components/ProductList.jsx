import React from "react";
import Image from "next/image";
import { wixClientServer } from "@/lib/wixClientServer";
export default async function ProductList({ categoryId, limit }) {
  const wixClient = await wixClientServer();
  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || 20)
    .find();

  return (
    <div className="medicine-list">
      {res.items.map((product) => (
        <div className="medicine-card" key={product._id}>
          <Image
            src={product.media.mainMedia.image.url || "/img/advil.png"}
            alt="Advil"
            width={200}
            height={200}
          />
          <h3>{product.name}</h3>
          <p> {product.price.price}</p>
          <button className="add-to-cart">Add to Cart</button>
          <button>Buy Now</button>
        </div>
      ))}
    </div>
  );
}
