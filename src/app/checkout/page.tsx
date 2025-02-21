'use client';
import React, { useEffect, useState } from "react";
import { getCartItems } from "../actions/action";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { CgChevronRight } from "react-icons/cg";
import Header from "../component/header";
import Footer from "../component/footer-sm";
import Footer2 from "../component/footer-all";

function CheckOut() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
    zipCode: '',
    city: '',
  });
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    address: false,
    phone: false,
    zipCode: false,
    city: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem('discount');
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.id]: false }); // Clear error on user input
  };

  const validateForm = () => {
    const error = {
      firstName: !formValues.firstName.trim(),
      lastName: !formValues.lastName.trim(),
      email: !formValues.email.trim() || !/\S+@\S+\.\S+/.test(formValues.email),
      address: !formValues.address.trim(),
      phone: !formValues.phone.trim() || !/^\d{11}$/.test(formValues.phone),
      zipCode: !formValues.zipCode.trim(),
      city: !formValues.city.trim(),
    };
    setFormErrors(error);
    return Object.values(error).every((err) => !err);
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) {
      alert('Please fill all required fields correctly.');
      return;
    }

    alert('Order placed successfully!');
    const orderData = {
      _type: 'Order',
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      address: formValues.address,
      phone: formValues.phone,
      // zipCode: formValues.zipCode,
      city: formValues.city,
      cartItems: cartItems.map((item) => ({
        _type: 'reference',
        _ref: item._id,
      })),
      totalPrice: subTotal - discount,
    };

    try {
      await client.create(orderData);
      localStorage.removeItem('discount');
    } catch (error) {
      if (
        error instanceof Error &&
        error.message.includes('Insufficient permissions')
      ) {
        console.error('Permission issue: ', error);
      } else {
        console.error('Unexpected error: ', error);
      }
    }
  };

  return (
    <div>
    <Header />
    <div className="md:flex">
      <div className="w-[390px] md:max-w-[900px] lg:w-[1280px] bg-[rgba(249,249,249,1)] md:mt-[132px] mx-auto p-4 ml-1">
        {/* Navbar */}
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link href="/" 
              className="text-gray-600 hover:text-black font-satoshi transition text-sm">Home</Link>
            <CgChevronRight className="w-4 h-4 font-satoshi text-black" />
            <Link
              href="/shopping"
              className="text-gray-600 hover:text-black font-satoshi transition text-sm"
            >
              Cart
            </Link>
            <CgChevronRight className="w-4 h-4 font-satoshi text-black" />
            <span>CheckOut</span>
          </nav>
        </div>

        {/* Order Summary */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
          <h1 className="text-2xl font-semibold font-clash">Order Summary</h1>
          <div className="flex justify-between py-2 border-b">
            <span className=" md:block font-satoshi font-semibold">Product</span>
            <span className=" md:block font-satoshi font-semibold">Quantity</span>
            <span className=" md:block font-satoshi font-semibold">Price</span>
          </div>
          {cartItems.length > 0 ? (
            cartItems.map((product) => (
              <div
                key={product._id}
                className="flex items-center justify-between py-4 border-b"
              >
                <div className="flex items-center gap-4">
                  {product.imageUrl && (
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 object-cover rounded-lg border"
                    />
                  )}
                  <h3 className="text-lg w-[55] font-clash">{product.name}</h3>
                </div>
                <p className="text-gray-500 font-satoshi">{product.quantity}</p>
                <p className="text-lg font-clash">
                  £{(product.price * product.quantity).toFixed(2)}
                </p>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-4">
              No items in cart
            </div>
          )}
          <div className="py-4">
            <p className="font-semibold text-lg font-satoshi flex justify-between">
              Subtotal: <span>£{subTotal.toFixed(2)}</span>
            </p>
            <p className="font-semibold font-satoshi text-lg flex justify-between">
              Discount: <span>£{discount.toFixed(2)}</span>
            </p>
            <p className="font-semibold text-xl font-clash flex justify-between">
              Total: <span>£{(subTotal - discount).toFixed(2)}</span>
            </p>
          </div>
        </div>

          {/* Checkout Form */}
        </div>
        
        <div className="w-[390px] h-auto md:max-w-[900px] lg:w-[1280px] bg-[rgba(249,249,249,1)] md:mt-[132px] mx-auto p-4 ml-1">
          <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
          <h2 className="text-2xl  text-gray-800 mb-4 font-clash">Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium font-satoshi">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your first name"
                value={formValues.firstName}
                onChange={handleInput}
                className=" font-satoshi mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                required
              />
              {formErrors.firstName && (
                <span className="text-red-500 font-satoshi">First name is required</span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium font-satoshi">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your last name"
                value={formValues.lastName}
                onChange={handleInput}
                required
                className="font-satoshi mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
              />
              {formErrors.lastName && (
                <span className="text-red-500 font-satoshi">Last name is required</span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium font-satoshi">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formValues.email}
                onChange={handleInput}
                required
                className="font-satoshi mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
              />
              {formErrors.email && (
                <span className="text-red-500 font-satoshi">Email is required</span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium font-satoshi">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter your address"
                value={formValues.address}
                onChange={handleInput}
                required
                className="font-satoshi mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
              />
              {formErrors.address && (
                <span className="text-red-500 font-satoshi">Address is required</span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="font-satoshi text-gray-700 font-medium">City</label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Enter your city"
                value={formValues.city}
                onChange={handleInput}
                required
                className="font-satoshi mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
              />
              {formErrors.city && (
                <span className="text-red-500 font-satoshi">City is required</span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium font-satoshi">zip code</label>
              <input
                type="text"
                name="zipCode"
                id="zipCode"
                placeholder="Enter your zip code"
                value={formValues.zipCode}
                onChange={handleInput}
                required
                className="font-satoshi mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
              />
              {formErrors.city && (
                <span className="text-red-500 font-satoshi">zip code is required</span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium font-satoshi">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your number"
                value={formValues.phone}
                onChange={handleInput}
                required
                className="font-satoshi mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
              />
              {formErrors.phone && (
                <span className="text-red-500 font-satoshi">Phone number is required</span>
              )}
            </div>
            <button
  type="button"
  onClick={handlePlaceOrder}
  className="font-clash bg-blue-500 text-white py-2 px-6 rounded-lg h-10 mt-7 hover:bg-blue-700 active:bg-blue-800 active:scale-95 active:border-2 active:border-black transition-all duration-200 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
>
  Place Order
</button>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
      <Footer2/>
      
    </div>
  );
}

export default CheckOut;