

const Newsletter = () => {
  return (
    <div className="newsletter-section">
        <img src="../../public/images/subscribe.svg" alt="" />
    
      <div className="newsletter">
        <h1>Subscribe to our Newsletter</h1>
        <p>Subscribe to our TheCcoktailDB</p>
        <form>
          <input type="text" className="newsletter-input" placeholder="Enter your email address"/>
          <button className="newsletter-btn">Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter
