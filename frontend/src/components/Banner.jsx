import React from 'react'

function Banner() {
    return (
        <>
            <div className="ml-10 flex flex-col md:flex-row mt-5">
                <div className="up order-2 md:order-1 w-full md:w-1/2 mt-6">
                    <input
                        type="text"
                        placeholder="Enter text"
                        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-white"
                    />

                </div>
                <div className="down order-1 w-full md:w-1/2">
                    <img src="https://4.imimg.com/data4/AY/TE/IMOB-27708947/c__data_users_defapps_appdata_internetexplorer_temp_sav.jpg" alt="vegetable" className="object-cover rounded-lg bg-gray-300 dark:bg-black" />
                    <p className="font-bold mt-4">Eating vegetables is essential for good health. They are rich in vitamins, minerals, and antioxidants that boost the immune system, reduce disease risk, and promote healthy digestion. Low in calories and high in fiber, vegetables aid in weight management and keep you feeling full longer. Incorporating a variety of vegetables into your diet supports heart health, improves skin, and enhances energy levels, improving overall well-being.</p><br />
                    <h1 className="font-bold text-3xl text-gray-400">So, eat <span className="text-green-700 font-bold text-4xl">Healthy,</span>stay<span className="text-green-700 font-bold text-4xl">Healthy.</span></h1>

                    <div className="mt-3">
                        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                            <a href="/Seemore">Seemore</a>
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Banner
