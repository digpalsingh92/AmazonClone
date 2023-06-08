import React from "react";
import "./Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce.jpg"
          alt="E-Commerce"
          className="home__image"
        />
        <div className="home__row">
          <Product
            id="000003"
            title="ASUS ROG Zephyrus G14 (2022), 14.0-inch (35.56 cm) FHD+ 16:10 144Hz/3ms, AMD Ryzen 9 6900HS, 8GB RX 6700S Graphics, Gaming Laptop (16GB/1TB SSD/Windows 11/Office 2021/Gray/1.65 Kg), GA402RJZ-L4136WS "
            price={650}
            rating={4}
            image="https://m.media-amazon.com/images/I/41-+itFyZlL._SY300_SX300_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="000002"
            title="Apple iPhone 14 (128 GB) - Purple "
            price={550}
            rating={4}
            image="https://m.media-amazon.com/images/I/31gmva12KHL._SY445_SX342_QL70_FMwebp_.jpg"
          />
          <Product
            // id = "000001"
            title="OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black) "
            price={249}
            rating={4}
            image="https://m.media-amazon.com/images/I/41WE9ZGEC4L._SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="000004"
            title="Safari Pentagon Trolley Bags for Travel, 55 cm Cabin Suitcase, 4 Wheel Cyan Small Luggage for Men and Women, Polypropylene Hard Side Cabin Bag "
            price={50}
            rating={4}
            image="https://m.media-amazon.com/images/I/514xUT1xYVL._UX679_.jpg"
          />
          <Product
            id="000005"
            title="Fossil Analog Blue Dial Men's Watch - FS5237 "
            price={100}
            rating={4}
            image="https://m.media-amazon.com/images/I/81MJx+6PmYS._UX522_.jpg"
          />
          <Product
            id="000006"
            title="GRIVAN Multipurpose Stainless Steel Double Layer Shelf with Towel Rod I Multipurpose Wall Mount Bath Shelf Organizer l Bathroom Shelf and Rack I Bathroom Accessories - Chrome Finish, Silver "
            price={15}
            rating={3}
            image="https://m.media-amazon.com/images/I/816FU4QCCwL._SY741_.jpg"
          />
        </div>
      </div>
    </div>
  );
}
