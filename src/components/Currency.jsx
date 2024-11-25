import React from 'react'
import '../css/currency.css'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

function Currency() {
  return (
    <div className="currency-div">
    <div>
      <h3>DÖVİZ KURU UYGULAMASI</h3>
    </div>
    <div>
      <input type="number" className="amount" placeholder="Miktar" />
      <select className="from-currency-option">
        <option>USD</option>
        <option>EUR</option>
        <option>TL</option>
      </select>
      <FaRegArrowAltCircleRight />
      <select className="to-currency-option">
        <option>TL</option>
        <option>USD</option>
        <option>EUR</option>
      </select>
      <input type="number" className="result" placeholder="Sonuç" />
    </div>
    <div>
      <button className="exchange-button">Çevir</button>
    </div>
  </div>
  )
}

export default Currency