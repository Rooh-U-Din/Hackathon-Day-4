"use client";
import React, { useEffect, useState } from "react";
import { getCartItems } from "../actions/action";
import Link from "next/link";
import { CgChevronRight } from "react-icons/cg";
import Header from "../component/header";
import Footer from "../component/footer-sm";
import Footer2 from "../component/footer-all";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    address: false,
    city: false,
    zip: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const discount = localStorage.getItem("discount");
    if (discount) {
      setDiscount(Number(discount));
    }
  }, []);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormValues({ ...formValues, [e.target.name]: e.target.value });
  // };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({...formValues, [e.target.name]: e.target.value});
    setFormErrors({...formErrors, [e.target.name]: false});
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName.trim(),
      lastName: !formValues.lastName.trim(),
      phone: !formValues.phone.trim() || !/^\d{11}$/.test(formValues.phone),
      email: !formValues.email.trim() || !/\S+@\S+\.\S+/.test(formValues.email),
      address: !formValues.address.trim(),
      city: !formValues.city.trim(),
      zip: !formValues.zip.trim(),
    };

    setFormErrors(errors);
    return !Object.values(errors).every((err)=>!err); // Return false if any field is empty
  };

  const handleSubmit = async () => {

    if (!validateForm()) {
      alert("Please fill in all required fields.");
      return;
    }

    alert("Order completed successfully");

    const orderData = {
      _type: "Order",
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      phone: formValues.phone,
      email: formValues.email,
      address: formValues.address,
      city: formValues.city,
      cartItems: cartItems.map((item) => ({
        _type: "reference",
        _ref: item._id,
      })),
      total: subTotal,
      discount: discount,
      orderDate: new Date().toISOString(),
    };

    try {
      await client.create(orderData);
      localStorage.removeItem("cartItems");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex">
        <div className="w-[390px] md:max-w-[900px] lg:w-[1280px] bg-[rgba(249,249,249,1)] md:mt-[132px] mx-auto p-4 ml-1">
          {/* Navbar */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 py-4">
              <Link
                href="/shopping"
                className="text-gray-600 hover:text-black transition text-sm"
              >
                Cart
              </Link>
              <CgChevronRight className="w-4 h-4 text-black" />
              <span>CheckOut</span>
            </nav>
          </div>

          {/* Order Summary */}
          <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
            <h1 className="text-2xl font-bold">Order Summary</h1>
            <div className="flex justify-between py-2 border-b">
              <span className="hidden md:block font-semibold">Product</span>
              <span className="hidden md:block font-semibold">Quantity</span>
              <span className="hidden md:block font-semibold">Price</span>
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
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                  </div>
                  <p className="text-gray-500">{product.quantity}</p>
                  <p className="text-lg font-semibold">
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
              <p className="font-semibold text-lg flex justify-between">
                Subtotal: <span>£{subTotal.toFixed(2)}</span>
              </p>
              <p className="font-semibold text-lg flex justify-between">
                Discount: <span>£{discount.toFixed(2)}</span>
              </p>
              <p className="font-bold text-xl flex justify-between">
                Total: <span>£{(subTotal - discount).toFixed(2)}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-[390px] h-[400] md:max-w-[900px] lg:w-[1280px] bg-[rgba(249,249,249,1)] md:mt-[132px] mx-auto p-4 ml-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Billing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your first name"
                value={formValues.firstName}
                onChange={handleInputChange}
                className="mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
                required
              />
              {formErrors.firstName && (
                <span className="text-red-500">First name is required</span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your last name"
                value={formValues.lastName}
                onChange={handleInputChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
              />
              {formErrors.lastName && (
                <span className="text-red-500">Last name is required</span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formValues.email}
                onChange={handleInputChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
              />
              {formErrors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter your address"
                value={formValues.address}
                onChange={handleInputChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
              />
              {formErrors.address && (
                <span className="text-red-500">Address is required</span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">City</label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Enter your city"
                value={formValues.city}
                onChange={handleInputChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
              />
              {formErrors.city && (
                <span className="text-red-500">City is required</span>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your number"
                value={formValues.phone}
                onChange={handleInputChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
              />
              {formErrors.phone && (
                <span className="text-red-500">Phone number is required</span>
              )}
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className={"bg-blue-600 text-white py-2 rounded "}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      <div />
      <Footer />
      <Footer2 />
    </div>
  );
};
export default Checkout;