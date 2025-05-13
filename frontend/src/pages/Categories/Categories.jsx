import { Link } from 'react-router-dom'
import './category.css'
function Categories() {

 
    return (
        <>
       <div className="page-header">
        <div className="container">
            <h1>Shop Categories</h1>
            <div className="breadcrumbs">
               <Link to="/">Home</Link> /<Link to="/shop">Shop</Link> / <span>Categories</span>
            </div>
        </div>
    </div>

    <section className="categories-section">
        <div className="container">
            <div className="section-header">
                <h2 className="section-title">Browse Categories</h2>
               <Link to="#" className="view-all">View All Categories <i className="fas fa-arrow-right"></i></Link>
            </div>
            
            <div className="categories-grid">
               <Link to="#" className="category-card">
                    <div className="category-image">
                        <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1326&q=80" alt="Electronics"/>
                    </div>
                    <div className="category-content">
                        <span className="product-count">128 Products</span>
                        <h3>Electronics</h3>
                        <span className="shop-now">Shop Now <i className="fas fa-arrow-right"></i></span>
                    </div>
                </Link>
                
               <Link to="#" className="category-card">
                    <div className="category-image">
                        <img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Fashion"/>
                    </div>
                    <div className="category-content">
                        <span className="product-count">86 Products</span>
                        <h3>Fashion</h3>
                        <span className="shop-now">Shop Now <i className="fas fa-arrow-right"></i></span>
                    </div>
                </Link>
                
               <Link to="#" className="category-card">
                    <div className="category-image">
                        <img src="https://images.unsplash.com/photo-1556909211-d5b0d8f5e9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Home & Living"/>
                    </div>
                    <div className="category-content">
                        <span className="product-count">42 Products</span>
                        <h3>Home & Living</h3>
                        <span className="shop-now">Shop Now <i className="fas fa-arrow-right"></i></span>
                    </div>
                </Link>
                
               <Link to="#" className="category-card">
                    <div className="category-image">
                        <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Beauty"/>
                    </div>
                    <div className="category-content">
                        <span className="product-count">35 Products</span>
                        <h3>Beauty</h3>
                        <span className="shop-now">Shop Now <i className="fas fa-arrow-right"></i></span>
                    </div>
                </Link>
                
               <Link to="#" className="category-card">
                    <div className="category-image">
                        <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80" alt="Sports"/>
                    </div>
                    <div className="category-content">
                        <span className="product-count">28 Products</span>
                        <h3>Sports</h3>
                        <span className="shop-now">Shop Now <i className="fas fa-arrow-right"></i></span>
                    </div>
                </Link>
                
               <Link to="#" className="category-card">
                    <div className="category-image">
                        <img src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Books"/>
                    </div>
                    <div className="category-content">
                        <span className="product-count">56 Products</span>
                        <h3>Books</h3>
                        <span className="shop-now">Shop Now <i className="fas fa-arrow-right"></i></span>
                    </div>
                </Link>
            </div>
        </div>
    </section>

    <section className="subcategories-section">
        <div className="container">
            <h2 className="section-title">Electronics Subcategories</h2>
            <p className="section-subtitle">Browse our wide range of electronic products</p>
            
            <div className="subcategories-grid">
               <Link to="#" className="subcategory-card">
                    <div className="subcategory-icon">
                        <i className="fas fa-mobile-alt"></i>
                    </div>
                    <div className="subcategory-name">Smartphones</div>
                </Link>
                
               <Link to="#" className="subcategory-card">
                    <div className="subcategory-icon">
                        <i className="fas fa-laptop"></i>
                    </div>
                    <div className="subcategory-name">Laptops</div>
                </Link>
                
               <Link to="#" className="subcategory-card">
                    <div className="subcategory-icon">
                        <i className="fas fa-headphones"></i>
                    </div>
                    <div className="subcategory-name">Headphones</div>
                </Link>
                
               <Link to="#" className="subcategory-card">
                    <div className="subcategory-icon">
                        <i className="fas fa-tablet-alt"></i>
                    </div>
                    <div className="subcategory-name">Tablets</div>
                </Link>
                
               <Link to="#" className="subcategory-card">
                    <div className="subcategory-icon">
                        <i className="fas fa-tv"></i>
                    </div>
                    <div className="subcategory-name">TVs</div>
                </Link>
                
               <Link to="#" className="subcategory-card">
                    <div className="subcategory-icon">
                        <i className="fas fa-camera"></i>
                    </div>
                    <div className="subcategory-name">Cameras</div>
                </Link>
            </div>
        </div>
    </section>


    <section className="featured-categories">
        <div className="container">
            <h2 class="section-title">Featured Categories</h2>
            
            <div class="featured-category">
                <div class="featured-image">
                    <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80" alt="Audio Equipment"/>
                </div>
                <div class="featured-content">
                    <h3>Premium Audio Collection</h3>
                    <p>Experience sound like never before with our high-end audio equipment. From studio-grade headphones to immersive home theater systems.</p>
                   <Link to="#" class="explore-btn">Explore Collection</Link>
                </div>
            </div>
            
            <div class="featured-category">
                <div class="featured-content">
                    <h3>Summer Fashion Essentials</h3>
                    <p>Stay cool and stylish this season with our curated collection of summer fashion. Lightweight fabrics and trendy designs for all occasions.</p>
                   <Link to="#" class="explore-btn">Shop Now</Link>
                </div>
                <div class="featured-image">
                    <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Summer Fashion"/>
                </div>
            </div>
        </div>
    </section>
        </>
    
    )
  }
  
  export default Categories