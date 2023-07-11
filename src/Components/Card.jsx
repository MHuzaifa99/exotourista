import React from 'react'
import styles from './Card.module.css'

function Card({data}) {
    return (
        <>
            <div className={styles.card}>
                <img src={data.image} className={styles["card-img-top"]} alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{data.name}</h5>
                    <p class="card-text">{data.description}</p>
                    <button href="#" class="btn btn-primary">Book now</button>
                </div>
            </div>
        </>
    )
}

export default Card