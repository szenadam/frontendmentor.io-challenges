import './App.css'
import desktopImage from './assets/image-product-desktop.jpg'
import mobileImage from './assets/image-product-mobile.jpg'
import CartSvg from './assets/icon-cart.svg?react'

function App() {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <picture>
            <source srcSet={mobileImage} media="(max-width: 400px)"/>
            <img src={desktopImage} alt="Image of a cologne"/>
          </picture>
        </div>
        <div className="card-text">
          <p className="top-title">PERFUME</p>
          <h1 className="title">Gabrielle Essence Eau De Parfum</h1>
          <p className="description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
          <div className="prices">
            <span className="discount-price">$149.99</span>
            <span className="original-price">$169.99</span>
          </div>
          <button className="add-to-cart-btn">
            <span className="btn-svg"><CartSvg/></span>
            <span className="btn-text">Add to cart</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
