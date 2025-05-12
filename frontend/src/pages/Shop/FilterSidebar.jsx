import React from 'react';
import styles from './Shop.module.css';

function FilterSidebar({
  categories,
  onCategoryChange,
  priceRange,
  onMinPriceChange,
  onMaxPriceChange,
  selectedColor,
  onColorSelect,
  selectedSize,
  onSizeSelect,
  brands,
  onBrandChange,
  onResetFilters,
}) {
  return (
    <div className={styles['filter-sidebar']}>
      {/* Categories Filter */}
      <div className={styles['filter-widget']}>
        <div className={styles['widget-title']}>
          <h3>Categories</h3>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className={styles['widget-content']}>
          <ul className={styles['filter-list']}>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={categories.allCategories}
                  onChange={() => onCategoryChange('allCategories')}
                />
                <span>All Categories</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={categories.electronics}
                  onChange={() => onCategoryChange('electronics')}
                />
                <span>Electronics</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={categories.fashion}
                  onChange={() => onCategoryChange('fashion')}
                />
                <span>Fashion</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={categories.homeGarden}
                  onChange={() => onCategoryChange('homeGarden')}
                />
                <span>Home & Garden</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={categories.sports}
                  onChange={() => onCategoryChange('sports')}
                />
                <span>Sports</span>
              </label>
            </li>
          </ul>
        </div>
      </div>

      {/* Price Range Filter */}
      <div className={styles['filter-widget']}>
        {/* ... (Price Range filter UI) ... */}
        <div className={styles['widget-title']}>
          <h3>Price Range</h3>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className={styles['widget-content']}>
          <div className={styles['price-slider']}>
            <input
              type="range"
              min="0"
              max="500"
              value={priceRange.min}
              onChange={(e) => onMinPriceChange(parseInt(e.target.value))}
            />
            <input
              type="range"
              min="0"
              max="500"
              value={priceRange.max}
              onChange={(e) => onMaxPriceChange(parseInt(e.target.value))}
            />
          </div>
          <div className={styles['price-input']}>
            <input
              type="text"
              id="min-price"
              value={`$${priceRange.min}`}
              readOnly
            />
            <span>-</span>
            <input
              type="text"
              id="max-price"
              value={`$${priceRange.max}`}
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Colors Filter */}
      <div className={styles['filter-widget']}>
        {/* ... (Colors filter UI) ... */}
        <div className={styles['widget-title']}>
          <h3>Colors</h3>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className={styles['widget-content']}>
          <div className={styles['color-options']}>
            <div
              className={`${styles['color-option']} ${
                selectedColor === '#2c3e50' ? styles.active : ''
              }`}
              style={{ backgroundColor: '#2c3e50' }}
              onClick={() => onColorSelect('#2c3e50')}
            />
            <div
              className={`${styles['color-option']} ${
                selectedColor === '#3498db' ? styles.active : ''
              }`}
              style={{ backgroundColor: '#3498db' }}
              onClick={() => onColorSelect('#3498db')}
            />
            <div
              className={`${styles['color-option']} ${
                selectedColor === '#e74c3c' ? styles.active : ''
              }`}
              style={{ backgroundColor: '#e74c3c' }}
              onClick={() => onColorSelect('#e74c3c')}
            />
            <div
              className={`${styles['color-option']} ${
                selectedColor === '#f1c40f' ? styles.active : ''
              }`}
              style={{ backgroundColor: '#f1c40f' }}
              onClick={() => onColorSelect('#f1c40f')}
            />
            <div
              className={`${styles['color-option']} ${
                selectedColor === '#2ecc71' ? styles.active : ''
              }`}
              style={{ backgroundColor: '#2ecc71' }}
              onClick={() => onColorSelect('#2ecc71')}
            />
            <div
              className={`${styles['color-option']} ${
                selectedColor === '#9b59b6' ? styles.active : ''
              }`}
              style={{ backgroundColor: '#9b59b6' }}
              onClick={() => onColorSelect('#9b59b6')}
            />
          </div>
        </div>
      </div>

      {/* Sizes Filter */}
      <div className={styles['filter-widget']}>
        {/* ... (Sizes filter UI) ... */}
        <div className={styles['widget-title']}>
          <h3>Sizes</h3>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className={styles['widget-content']}>
          <div className={styles['size-options']}>
            {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <div
                key={size}
                className={`${styles['size-option']} ${
                  selectedSize === size ? styles.active : ''
                }`}
                onClick={() => onSizeSelect(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brands Filter */}
      <div className={styles['filter-widget']}>
        {/* ... (Brands filter UI) ... */}
        <div className={styles['widget-title']}>
          <h3>Brands</h3>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className={styles['widget-content']}>
          <ul className={styles['filter-list']}>
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={brands.allBrands}
                  onChange={() => onBrandChange('allBrands')}
                />
                <span>All Brands</span>
              </label>
            </li>
            {['nike', 'adidas', 'apple', 'samsung'].map((brand) => (
              <li key={brand}>
                <label>
                  <input
                    type="checkbox"
                    checked={brands[brand]}
                    onChange={() => onBrandChange(brand)}
                  />
                  <span>{brand.charAt(0).toUpperCase() + brand.slice(1)}</span>
                  <span className={styles.count}>
                    ({Math.floor(Math.random() * 50)})
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button className={styles['reset-filters']} onClick={onResetFilters}>
        Clear Filters
      </button>
    </div>
  );
}

export default FilterSidebar;