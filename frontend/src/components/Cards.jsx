import React from 'react'

function Cards({ item }) {
    console.log(item);
    return (
        <>
            <div className="mt-4 my-3 mx-5 p-3">
                <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 cursor-pointer">
                    <figure>
                        <img
                            src={item.image}
                            alt="vegiee" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className="badge badge-outline hover:bg-green-600 hover:text-white cursor-pointer duration-100">Buy now</div>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default Cards
