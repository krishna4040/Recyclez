import React from 'react'

const Card = ({user}) => {
    return (
        <div key={product.id} className="p-4 bg-white rounded-lg shadow-md" style={{ marginLeft: '100px' }}>
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="font-semibold text-green-600">{product.price}</p>
            <p className="text-gray-600">Seller: {seller.name}</p>
            <p className="text-gray-600">Location: {seller.location}</p>
            <p className="text-gray-600">Contact: {seller.contact}</p>
        </div>
    )
}

export default Card