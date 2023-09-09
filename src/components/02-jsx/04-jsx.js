import React from 'react'

const Jsx4 = () => {
    const names = ["Ahmet", "Mehmet", "Ayşe", "Fatma"];
    const cities = ["İstanbul", "Ankara", "İzmir", "Bursa"];

    // const users = [
    //     {
    //         firstName: 'John',
    //         lastName: 'Doe',
    //         age: 17,
    //     },
    //     {
    //         firstName: 'Jane',
    //         lastName: 'Doe',
    //         age: 18,
    //     },
    //     {
    //         firstName: 'Jack',
    //         lastName: 'Doe',
    //         age: 19,
    //     }
    // ];

    return (
        <div>
            <ul>
                {
                    names.map((name, index) => <li key={name+index}>{name}</li>)
                }
            </ul>
            <select name="" id="">
                {
                    cities.map((city, index) => <option key={city+index}>{city}</option>)//sadece city de yazabiliriz.
                }
            </select>
        </div>
    )
}

export default Jsx4