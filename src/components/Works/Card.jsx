import React from 'react'

const Card = () => {
    const cards = [
        { id: 1, title: "Select Your Role and Sign Up", image: "icon1.png" },
        { id: 2, title: "Buyers Post Your Requirements",  image: "icon2.png" },
        { id: 3, title: "Review, Select, and Contact the Best Suppliers",  image: "icon3.png" },
        { id: 4, title: "Suppliers Complete your profile and get notified for opportunities",  image: "icon4.png" },
        { id: 5, title: "Contact to Buyers and Share your Quote for the service",  image: "icon5.png" },
        { id: 6, title: "Both the Parties can Connect and Make Business Leave a Feedback", image: "icon6.png" },
      ];
    
  return (
    <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
  {cards.map((card, index) => (
    <div
      key={card.id}
      className={`flex flex-col w-full md:w-[400px] h-[254px] items-center justify-center overflow-hidden border transition ${index % 2 === 0 ? "bg-[#E8FBFF]" : "bg-white"}`}
    >
      <img src={card.image} alt={card.title} className="w-[74px] h-[74px] object-cover" />
      <div className="p-4">
        <h3 className="w-50 font-poppins text-sm text-center text-gray-800">{card.title}</h3>
      </div>
    </div>
  ))}
</div>
    
  )
}

export default Card