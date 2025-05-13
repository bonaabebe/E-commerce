import React, { useState, useEffect } from 'react';
import FilterSidebar from './FilterSidebar';
import ProductContainer from './ProductContainer';
import styles from './Shop.module.css';
import productsData from '../Homepage/Layout/products'; // Import your product data

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

  const [originalProducts] = useState(productsData);

  const filterProducts = () => {
    const filtered = originalProducts.filter((product) => {
      const categoryMatch = categories.allCategories || (
        (categories.electronics && product.category === 'Electronics') ||
        (categories.fashion && product.category === 'Fashion') ||
        (categories.homeGarden && product.category === 'Home & Garden') ||
        (categories.sports && product.category === 'Sports')
      );

      const priceMatch = product.currentPrice >= priceRange.min && product.currentPrice <= priceRange.max;
      const colorMatch = !selectedColor || product.color === selectedColor;
      const sizeMatch = !selectedSize || product.sizes.includes(selectedSize);
      const brandMatch =
        brands.allBrands ||
        (brands.nike && product.brand === 'Nike') ||
        (brands.adidas && product.brand === 'Adidas') ||
        (brands.apple && product.brand === 'Apple') ||
        (brands.samsung && product.brand === 'Samsung');

      return categoryMatch && priceMatch && colorMatch && sizeMatch && brandMatch;
    });

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    filterProducts();
  }, [categories, priceRange, selectedColor, selectedSize, brands]);

  useEffect(() => {
    filterProducts(); // Run on initial mount
  }, []);

  return (
    <div className={styles.container}>
      <FilterSidebar
        products={originalProducts} // Pass the products data here
        categories={categories}
        onCategoryChange={(cat) =>
          setCategories((prev) => ({ ...prev, [cat]: !prev[cat], allCategories: false }))
        }
        priceRange={priceRange}
        onMinPriceChange={(min) => setPriceRange((prev) => ({ ...prev, min }))}
        onMaxPriceChange={(max) => setPriceRange((prev) => ({ ...prev, max }))}
        selectedColor={selectedColor}
        onColorSelect={setSelectedColor}
        selectedSize={selectedSize}
        onSizeSelect={setSelectedSize}
        brands={brands}
        onBrandChange={(brand) =>
          setBrands((prev) => ({ ...prev, [brand]: !prev[brand], allBrands: false }))
        }
        onResetFilters={() => {
          setCategories({ allCategories: true, electronics: false, fashion: false, homeGarden: false, sports: false });
          setPriceRange({ min: 0, max: 500 });
          setSelectedColor(null);
          setSelectedSize('');
          setBrands({ allBrands: true, nike: false, adidas: false, apple: false, samsung: false });
        }}
      />
      <ProductContainer products={filteredProducts} />
    </div>
  );
}

export default Shop;
