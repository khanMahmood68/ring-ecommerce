import React from 'react'
import Styles from '../Styles/errorPage.module.css'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className={Styles.container}>
        <div>
            <h1>404</h1>
            <h1>UH HO! You're lost</h1>
            <p>
                The page you are looking for does not exist.How you got here is a
                mystry.But you can click the button below to goto the homepage
            </p>
            <Link to='/'>
                <button>Go Back to Home</button>
            </Link>
            
        </div>
    </div>
  )
}

export default ErrorPage