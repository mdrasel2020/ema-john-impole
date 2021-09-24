import React from 'react'

export default function Body(props) {
    const box = {
        padding: '20px',
        border: '4px solid #ddd',
        width: '300px',
        height: 'auto',
        margin: '20px'
    }

    return (
        <div >
            <div style={box}>
                {console.log(props.users)}
                <h1>Name : {props.users.name}</h1>
                <h2>{props.users.email}</h2>
                <h3>{props.users.address.zipcode}</h3>
            </div>

        </div>
    )
}
