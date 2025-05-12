import React, { useState, useEffect } from 'react';
import FilterSidebar from './FilterSidebar';
import ProductContainer from './ProductContainer';
import styles from './Shop.module.css';

function Shop() {
  const [categories, setCategories] = useState({
    allCategories: true,
    electronics: false,
    fashion: false,
    homeGarden: false,
    sports: false,
  });
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [brands, setBrands] = useState({
    allBrands: true,
    nike: false,
    adidas: false,
    apple: false,
    samsung: false,
  });
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [originalProducts] = useState([
    { id: 1, badge: 'Sale', image: 'https://via.placeholder.com/300x300', category: 'Electronics', title: 'Wireless Headphones', currentPrice: 149.99, oldPrice: 199.99, color: 'black', sizes: ['S', 'M'], brand: 'Generic' },
    { id: 2, badge: 'New', image: 'https://via.placeholder.com/300x300', category: 'Fashion', title: 'Running Shoes', currentPrice: 89.99, color: 'blue', sizes: ['7', '8', '9'], brand: 'Nike' },
    { id: 3, image: 'https://via.placeholder.com/300x300', category: 'Home & Garden', title: 'Smart Watch', currentPrice: 199.99, oldPrice: 249.99, color: 'silver', sizes: ['One Size'], brand: 'Apple' },
    { id: 4, image: 'https://via.placeholder.com/300x300', category: 'Electronics', title: 'Bluetooth Speaker', currentPrice: 79.99, color: 'black', sizes: ['Small'], brand: 'Samsung' },
    { id: 5, badge: 'Sale', image: 'https://via.placeholder.com/300x300', category: 'Fashion', title: 'Backpack', currentPrice: 49.99, oldPrice: 69.99, color: 'red', sizes: ['S', 'L'], brand: 'Adidas' },
    { id: 6, image: 'https://via.placeholder.com/300x300', category: 'Home & Garden', title: 'Desk Lamp', currentPrice: 29.99, color: 'white', sizes: ['One Size'], brand: 'Generic' },
    { id: 7, badge: 'New', image: 'https://via.placeholder.com/300x300', category: 'Electronics', title: 'Wireless Earbuds', currentPrice: 129.99, color: 'white', sizes: ['Small'], brand: 'Apple' },
    { id: 8, image: 'https://via.placeholder.com/300x300', category: 'Fashion', title: 'Sunglasses', currentPrice: 39.99, oldPrice: 59.99, color: 'brown', sizes: ['One Size'], brand: 'Generic' },
  ]);

  const filterProducts = () => {
    const filtered = originalProducts.filter((product) => {
      let categoryMatch = false;
      if (categories.allCategories) {
        categoryMatch = true; // If "All Categories" is checked, include all
      } else {
        // Otherwise, match based on individual category selections
        categoryMatch =
          (categories.electronics && product.category === 'Electronics') ||
          (categories.fashion && product.category === 'Fashion') ||
          (categories.homeGarden && product.category === 'Home & Garden') ||
          (categories.sports && product.category === 'Sports');
      }

      const priceMatch = product.currentPrice >= priceRange.min && product.currentPrice <= priceRange.max;
      const colorMatch = !selectedColor || product.color === selectedColor;
      const sizeMatch = !selectedSize || product.sizes.includes(selectedSize);
      const brandMatch = brands.allBrands || (brands.nike && product.brand === 'Nike') || (brands.adidas && product.brand === 'Adidas') || (brands.apple && product.brand === 'Apple') || (brands.samsung && product.brand === 'Samsung');

      return categoryMatch && priceMatch && colorMatch && sizeMatch && brandMatch;
    });
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    filterProducts();
  }, [categories, priceRange, selectedColor, selectedSize, brands]);

  const handleCategoryChange = (category) => {
    setCategories((prev) => ({ ...prev, [category]: !prev[category], allCategories: false })); // Uncheck "All Categories" when a specific category is selected
  };

  const handleBrandChange = (brand) => {
    setBrands((prev) => ({ ...prev, [brand]: !prev[brand], allBrands: false })); // Uncheck "All Brands" when a specific brand is selected
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleMinPriceChange = (min) => {
    setPriceRange((prev) => ({ ...prev, min }));
  };

  const handleMaxPriceChange = (max) => {
    setPriceRange((prev) => ({ ...prev, max }));
  };

  const resetFilters = () => {
    setCategories({ allCategories: true, electronics: false, fashion: false, homeGarden: false, sports: false });
    setPriceRange({ min: 0, max: 500 });
    setSelectedColor(null);
    setSelectedSize('S');
    setBrands({ allBrands: true, nike: false, adidas: false, apple: false, samsung: false });
  };

  return (
    <div className={styles.container}>
      <FilterSidebar
        categories={categories}
        onCategoryChange={handleCategoryChange}
        priceRange={priceRange}
        onMinPriceChange={handleMinPriceChange}
        onMaxPriceChange={handleMaxPriceChange}
        selectedColor={selectedColor}
        onColorSelect={handleColorSelect}
        selectedSize={selectedSize}
        onSizeSelect={handleSizeSelect}
        brands={brands}
        onBrandChange={handleBrandChange}
        onResetFilters={resetFilters}
      />
      <ProductContainer products={filteredProducts} />
    </div>
  );
}

export default Shop;