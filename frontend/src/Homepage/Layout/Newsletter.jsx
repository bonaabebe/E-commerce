
function Newsletter() {
 
    return (
        <>
         <section className="newsletter">
        <div className="container">
            <div className="newsletter-content">
                <div className="newsletter-text">
                    <h2>Subscribe to Our Newsletter</h2>
                    <p>Get the latest updates on new products and upcoming sales</p>
                </div>
                <form className="newsletter-form">
                    <input type="email" placeholder="Your email address" required/>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    </section>
        
        </>
    
    )
  }
  
  export default Newsletter