"use client";
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

interface OrderButtonProps {
  isActive?: boolean;
  onClick?: () => void;
}

const OrderButton = ({ isActive = false, onClick }: OrderButtonProps) => {
  const [orderStatus, setOrderStatus] = useState<"idle" | "loading" | "completed">("idle");

  // Reset animation when isActive changes to false
  useEffect(() => {
    if (!isActive && orderStatus !== "idle") {
      resetOrder();
    }
  }, [isActive]);

  const handleOrder = () => {
    if (orderStatus !== "idle" || !isActive) return;
    
    // If an external onClick handler is provided, call it first
    if (onClick) {
      onClick();
    }

    setOrderStatus("loading");

    // Reset initial positions
    gsap.set(".truck", { x: "-200%", opacity: 1, rotate: 0, scaleX: 1 });
    gsap.set(".box", { y: 20, opacity: 0, scale: 0.8 });
    gsap.set(".button-text", { opacity: 1, y: 0 });
    gsap.set(".processing-text", { opacity: 0, y: 10 });
    gsap.set(".completed-text", { opacity: 0, y: 10 });
    gsap.set(".button", { scale: 1 });
    gsap.set(".path", { opacity: 0 });

    const tl = gsap.timeline();
    
    tl.to(".button-text", { 
      opacity: 0,
      y: -10,
      duration: 0.2 
    })
    .to(".button", {
      scale: 0.98,
      duration: 0.1,
      ease: "power2.out"
    })
    .to(".path", {
      opacity: 1,
      duration: 0.3
    })
    .to(".truck", {
      x: "0%",
      duration: 2.0,
      ease: "elastic.out(1, 0.5)"
    })
    .to(".box", {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.2,
      ease: "back.out(1.7)"
    })
    .to(".box", {
      opacity: 0,
      scale: 0.5,
      duration: 0.3,
      onComplete: () => {
        gsap.set(".box", { opacity: 0 });
      }
    })
    .to(".truck", {
      scaleX: -1,
      duration: 0.2
    })
    .to(".truck", {
      x: "200%",
      duration: 1.9,
      ease: "power2.in",
      onStart: () => {
        gsap.to(".truck", {
          rotate: 2,
          duration: 0.2,
          yoyo: true,
          repeat: 1
        });
      }
    })
    .to(".truck", { 
      opacity: 0, 
      duration: 1.2,
      delay: 0.0,
    })
    .to(".path", {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        gsap.to(".processing-text", { 
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    })
    .to(".processing-text", { 
      opacity: 0,
      y: -10,
      duration: 0.2,
      delay: 0.5
    })
    .to(".button", {
      scale: 1,
      duration: 0.2
    })
    .to(".completed-text", {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "back.out(1.5)",
      onComplete: () => setOrderStatus("completed")
    });
  };

  const resetOrder = () => {
    setOrderStatus("idle");
    gsap.to(".button", {
      scale: 0.98,
      duration: 0.1,
      onComplete: () => {
        gsap.to(".button", { scale: 1, duration: 0.2 });
      }
    });
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <div className="relative" style={{ width: "250px" }}>
        <button
          className={`button relative w-full px-8 py-4 rounded-xl font-medium text-white 
            overflow-hidden transition-all duration-300 shadow-lg
            ${orderStatus === "loading" ? "bg-black shadow-blue-600/20" : 
              orderStatus === "completed" ? "bg-green-500 shadow-green-500/20" : 
              isActive ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-blue-500/30" :
              "bg-gray-400 cursor-not-allowed shadow-gray-400/20"}
            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
            h-14 flex items-center justify-center active:scale-[0.98] transition-transform`}
          onClick={orderStatus === "completed" ? resetOrder : handleOrder}
          disabled={orderStatus === "loading" || !isActive}
        >
          <span className="button-text absolute transition-all duration-300">
            Place Order
          </span>
          <span className="processing-text absolute opacity-0 transition-all duration-300">
            Processing...
          </span>
          <span className="completed-text absolute opacity-0 transition-all duration-300">
            Order Completed!
          </span>
          <div className="truck absolute top-1/2 -translate-y-1/2 opacity-0 text-3xl order-2">
            <span role="img" aria-label="Delivery truck">🚚</span>
            <span className="box absolute right-0 top-1/2 -translate-y-1/2 opacity-0 text-base" 
                  role="img" aria-label="Package">📦</span>
          </div>
        </button>
        
        <div className="path absolute top-6 inset-0 pointer-events-none flex items-center opacity-0">
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-blue-200/30 to-transparent rounded-full"></div>
        </div>
      </div>
      
      {orderStatus === "completed" && (
        <div className="text-center animate-fade-in">
          <p className="text-green-600 font-medium text-lg flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Delivery Confirmed!
          </p>
          <p className="text-gray-600 mt-1 text-sm">Your order will arrive in 2-3 business days</p>
        </div>
      )}
    </div>
  );
};

export default OrderButton;