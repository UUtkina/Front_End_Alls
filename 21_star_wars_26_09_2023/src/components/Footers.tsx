import React from 'react'
import style from './Alles.module.css'


const Footers:React.FC = () => {
  return (
    <footer className={style.footer}>
            <div className="commonButton">
                <p>
                    Send me an
                    <span className="email"> email </span>
                </p>
            </div>
        </footer>
  )
}

export default Footers
