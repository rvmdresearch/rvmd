import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "BPC-157",
    price: "$44.99",
    concentration: "5mg",
    badge: "Third-Party Lab Tested",
    image: "/vials/bpc157.png",
  },
  {
    name: "Semaglutide",
    price: "$129.99",
    concentration: "2mg",
    badge: "Third-Party Lab Tested",
    image: "/vials/semaglutide.png",
  },
  {
    name: "CJC-1295",
    price: "$54.99",
    concentration: "2mg",
    badge: "Third-Party Lab Tested",
    image: "/vials/cjc1295.png",
  },
  {
    name: "TB-500",
    price: "$39.99",
    concentration: "5mg",
    badge: "Third-Party Lab Tested",
    image: "/vials/tb500.png",
  },
];

export default function ShopPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-blue-900 text-white text-center py-4 text-sm">
        All products sourced in the USA 🇺🇸
      </div>

      <header className="bg-blue-900 text-white p-6 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold">RVMD Research</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:text-gold">Home</a>
          <a href="#" className="hover:text-gold">Shop</a>
          <a href="#" className="hover:text-gold">Contact</a>
        </nav>
        <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
          Login
        </Button>
      </header>

      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.name} className="hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl">
            <CardContent className="p-4 text-center">
              <img src={product.image} alt={product.name} className="h-40 mx-auto mb-4" />
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <p className="text-sm text-gray-500">{product.concentration}</p>
              <p className="text-xl font-bold text-gold mt-2">{product.price}</p>
              <span className="block text-xs text-green-700 mt-2">{product.badge}</span>
              <Button className="mt-4 w-full bg-gold text-white hover:bg-yellow-600 transition-all duration-300">
                Select Options
              </Button>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
}