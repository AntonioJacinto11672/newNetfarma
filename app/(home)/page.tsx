'use client'
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

// import required modules
import { Pagination, Autoplay, FreeMode } from 'swiper/modules';




export default function Home() {

  const [open, setOpen] = useState(false)
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const menuRef = useRef()

  const toggleOpen = useCallback((menuId: string | null) => {
    /* Abrir o Menu com as cores */
    setOpenMenuId((prevId) => (prevId === menuId ? null : menuId)); // Muda o ID do Menu aberto ou fecha se for o mesmo
  }, []);

  return (
    <>
      {/* Header */}
      <header className="bg-gray-dark sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4">
          {/* Left section: Logo */}
          <a href="index.html" className="flex items-center">
            <div>
              <img src="assets/images/template-white-logo.png" alt="Logo" className="h-14 w-auto mr-4" />
            </div>
          </a>
          {/* Hamburger menu (for mobile) */}
          <div className="flex lg:hidden">
            <button id="hamburger" className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          {/* Center section: Menu */}
          <nav className="hidden lg:flex md:flex-grow justify-center">
            <ul className="flex justify-center space-x-4 text-white">
              <li><a href="" className="hover:text-secondary font-semibold">Home</a></li>
              {/* Men Dropdown */}
              <li className="relative group" onClick={() => { toggleOpen("dropdown1") }}>
                <a href="#" className="hover:text-secondary font-semibold flex items-center">
                  Men
                  {/* <i:class="open ? 'fas fa-chevron-up ml-1 text-xs' : 'fas fa-chevron-down ml-1 text-xs'" /> */}
                  {openMenuId === "dropdown1" ? <FaChevronDown /> : <FaChevronUp />}
                </a>
                {openMenuId === "dropdown1" ?
                  <ul className="absolute left-0 bg-white text-black space-y-2 mt-1 p-2 rounded shadow-lg">
                    <li><a href="/shop" className="min-w-40 block px-4 py-2 hover:bg-primary hover:text-white rounded">Men Item 1</a></li>
                    <li><a href="/shop" className="min-w-40 block px-4 py-2 hover:bg-primary hover:text-white rounded">Men Item 2</a></li>
                    <li><a href="/shop" className="min-w-40 block px-4 py-2 hover:bg-primary hover:text-white rounded">Men Item 3</a></li>
                  </ul>
                  : ''
                }
              </li>
              {/* Women Dropdown */}
              <li className="relative group" onMouseOver={() => { toggleOpen("dropdown2") }}>
                <a href="#" className="hover:text-secondary font-semibold flex items-center">
                  Women
                  {/* <i:class="open ? 'fas fa-chevron-up ml-1 text-xs' : 'fas fa-chevron-down ml-1 text-xs'" /> */}
                  {openMenuId === "dropdown2" ? <FaChevronDown /> : <FaChevronUp />}
                </a>
                {openMenuId === "dropdown2" ?
                  <ul onMouseOver={() => { toggleOpen("dropdown2") }} onMouseLeave={() => { toggleOpen(null) }} className="absolute left-0 bg-white text-black space-y-2 mt-1 p-2 rounded shadow-lg">
                    <li><a href="/shop" className="min-w-40 block px-4 py-2 hover:bg-primary hover:text-white rounded">Men Item 1</a></li>
                    <li><a href="/shop" className="min-w-40 block px-4 py-2 hover:bg-primary hover:text-white rounded">Men Item 2</a></li>
                    <li><a href="/shop" className="min-w-40 block px-4 py-2 hover:bg-primary hover:text-white rounded">Men Item 3</a></li>
                  </ul>
                  : ''
                }
              </li>
              <li><a href="/shop" className="hover:text-secondary font-semibold">Shop</a></li>
              <li><a href="single-product-page.html" className="hover:text-secondary font-semibold">Product</a></li>
              <li><a href="404.html" className="hover:text-secondary font-semibold">404 page</a></li>
              <li><a href="checkout.html" className="hover:text-secondary font-semibold">Checkout</a></li>
            </ul >
          </nav >
          {/* Right section: Buttons (for desktop) */}
          < div className="hidden lg:flex items-center space-x-4 relative" >
            <a href="register.html" className="bg-primary border border-primary hover:bg-transparent text-white hover:text-primary font-semibold px-4 py-2 rounded-full inline-block">Register</a>
            <a href="register.html" className="bg-primary border border-primary hover:bg-transparent text-white hover:text-primary font-semibold px-4 py-2 rounded-full inline-block">Login</a>
            <div className="relative group cart-wrapper">
              <a href="/cart.html">
                <img src="assets/images/cart-shopping.svg" alt="Cart" className="h-6 w-6 group-hover:scale-120" />
              </a>
              {/* Cart dropdown */}
              <div className="absolute right-0 mt-1 w-80 bg-white shadow-lg p-4 rounded hidden group-hover:block">
                <div className="space-y-4">
                  {/* product item */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-line">
                    <div className="flex items-center">
                      <img src="/assets/images/single-product/1.jpg" alt="Product" className="h-12 w-12 object-cover rounded mr-2" />
                      <div>
                        <p className="font-semibold">Summer black dress</p>
                        <p className="text-sm">Quantity: 1</p>
                      </div>
                    </div>
                    <p className="font-semibold">$25.00</p>
                  </div>
                  {/* product item */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img src="/assets/images/single-product/2.jpg" alt="Product" className="h-12 w-12 object-cover rounded mr-2" />
                      <div>
                        <p className="font-semibold">Black suit</p>
                        <p className="text-sm">Quantity: 1</p>
                      </div>
                    </div>
                    <p className="font-semibold">$125.00</p>
                  </div>
                </div>
                <a href="/cart.html" className="block text-center mt-4 border border-primary bg-primary hover:bg-transparent text-white hover:text-primary py-2 rounded-full font-semibold">Go to Cart</a>
              </div>
            </div>
            <a id="search-icon" href="javascript:void(0);" className="text-white hover:text-secondary group">
              <img src="assets/images/search-icon.svg" alt="Search" className="h-6 w-6 transition-transform transform group-hover:scale-120" />
            </a>
            {/* Search field */}
            <div id="search-field" className="hidden absolute top-full right-0 mt-2 w-full bg-white shadow-lg p-2 rounded">
              <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Search for products..." />
            </div>
          </div >
        </div >
      </header >

      {/* Mobile menu */}
      <nav id="mobile-menu-placeholder" className="mobile-menu hidden flex flex-col items-center space-y-8 lg:hidden">
        <ul className="w-full">
          <li><a href="index.html" className="hover:text-secondary font-bold block py-2">Home</a></li>
          {/* Men Dropdown */}
          <li className="relative group" x-data="{ open: false }">
            <a onClick={() => { }} className="hover:text-secondary font-bold block py-2 flex justify-center items-center cursor-pointer">
              <span>Men</span>
              <span onClick={() => { }}>
                {/*  <i:class="open ? 'fas fa-chevron-up text-xs ml-2' : fa-chevron-down ml-2'"> */}
                {/* </i:class="open> */}
                <FaChevronDown />
              </span>
            </a>
            <ul className="mobile-dropdown-menu" x-show="open" >
              <li><a href="/shop" className="hover:text-secondary font-bold block pt-2 pb-3">Shop Men</a></li>
              <li><a href="single-product-page.html" className="hover:text-secondary font-bold block py-2">Men item 1</a></li>
              <li><a href="single-product-page.html" className="hover:text-secondary font-bold block py-2">Men item 2</a></li>
              <li><a href="single-product-page.html" className="hover:text-secondary font-bold block py-2">Men item 3</a></li>
            </ul>
          </li >
          & lt; !--Women Dropdown-- & gt;
          <li className="relative group" x-data="{ open: false }">
            <a onClick={() => { }} className="hover:text-secondary font-bold block py-2 flex justify-center items-center cursor-pointer">
              <span>Women</span>
              <span onClick={() => { }}>
                {/*  <i:class="open ? 'fas fa-chevron-up text-xs ml-2' : fa-chevron-down ml-2'"> */}
                {/* </i:class= "open> */}
                <FaChevronDown />
              </span>
            </a >
            <ul className="mobile-dropdown-menu" x-show="open">
              <li><a href="/shop" className="hover:text-secondary font-bold block py-2">Shop Women</a></li>
              <li><a href="single-product-page.html" className="hover:text-secondary font-bold block py-2">Women item 1</a></li>
              <li><a href="single-product-page.html" className="hover:text-secondary font-bold block py-2">Women item 2</a></li>
              <li><a href="single-product-page.html" className="hover:text-secondary font-bold block py-2">Women item 3</a></li>
            </ul>
          </li >
          <li><a href="/shop" className="hover:text-secondary font-bold block py-2">Shop</a></li>
          <li><a href="single-product-page.html" className="hover:text-secondary font-bold block py-2">Product</a></li>
          <li><a href="404.html" className="hover:text-secondary font-bold block py-2">404 page</a></li>
          <li><a href="checkout.html" className="hover:text-secondary font-bold block py-2">Checkout</a></li>
        </ul >
        <div className="flex flex-col mt-6 space-y-2 items-center">
          <a href="register.html" className="bg-primary hover:bg-transparent text-white hover:text-primary border border-primary font-semibold px-4 py-2 rounded-full inline-block flex items-center justify-center min-w-[110px]">Register</a>
          <a href="register.html" className="bg-primary hover:bg-transparent text-white hover:text-primary border border-primary font-semibold px-4 py-2 rounded-full inline-block flex items-center justify-center min-w-[110px]">Login</a>
          <a href="register.html" className="bg-primary hover:bg-transparent text-white hover:text-primary border border-primary font-semibold px-4 py-2 rounded-full inline-block flex items-center justify-center min-w-[110px]">Cart -&nbsp;<span>5</span>&nbsp;items</a>
        </div>
        {/* Search field */}
        <div className="  top-full right-0 mt-2 w-full bg-white shadow-lg p-2 rounded">
          <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Search for products..." />
        </div>
      </nav>

      {/* Slider */}
      <section id="product-slider">
        <div className="main-slider swiper-container">
          <div className="swiper-wrapper">
            {/* Slide 1 */}
            <Swiper pagination={true} modules={[Autoplay, Pagination]}

              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="mySwiper">
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/main-slider/5.jpg" alt="Product 1" />
                  <div className="swiper-slide-content">
                    <h2 className="text-3xl md:text-7xl font-bold text-white mb-2 md:mb-4">
                      Women
                    </h2>
                    <p className="mb-4 text-white md:text-2xl">
                      Experience the best in sportswear with <br />
                      our latest collection.
                    </p>
                    <a
                      href="/"
                      className="bg-primary hover:bg-transparent text-white hover:text-white border border-transparent hover:border-white font-semibold px-4 py-2 rounded-full inline-block"
                    >
                      Shop now
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/main-slider/2.png" alt="Product 2" />
                  <div className="swiper-slide-content">
                    <h2 className="text-3xl md:text-7xl font-bold text-white mb-2 md:mb-4">
                      Men
                    </h2>
                    <p className="mb-4 text-white md:text-2xl">
                      Discover the latest trends in Men`s <br />
                      sportswear and casual fashion.
                    </p>
                    <a
                      href="/"
                      className="bg-white hover:bg-transparent text-black hover:text-white font-semibold px-4 py-2 rounded-full inline-block border border-transparent hover:border-white"
                    >
                      Shop now
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="swiper-slide">
                  <img src="assets/images/main-slider/4.jpg" alt="Product 3" />
                  <div className="swiper-slide-content">
                    <h2 className="text-3xl md:text-7xl font-bold text-white mb-2 md:mb-4">
                      Accessories
                    </h2>
                    <p className="mb-4 text-white md:text-2xl">
                      Elevate your style with our latest <br />
                      sportswear collection.
                    </p>
                    <a
                      href="/"
                      className="bg-primary hover:bg-transparent text-white hover:text-white border border-transparent hover:border-white font-semibold px-4 py-2 rounded-full inline-block"
                    >
                      Shop now
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Slide 2 */}
            {/*  */}
            {/* Slide 3 */}
            {/* */}
          </div>
        </div>
        {/* Slider Pagination */}
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </section>

      <>
        <>
          {/* Product banner section */}
          <section id="product-banners">
            <div className="container mx-auto py-10">
              <div className="flex flex-wrap -mx-4">
                {/* Category 1 */}
                <div className="w-full sm:w-1/3 px-4 mb-8">
                  <div className="category-banner relative overflow-hidden rounded-lg shadow-lg group">
                    <img
                      src="/assets/images/cat-image1.jpg"
                      alt="Category 1"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gray-light bg-opacity-50" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">Men</h2>
                      <a
                        href="/"
                        className="bg-primary hover:bg-transparent border border-transparent hover:border-white text-white hover:text-white font-semibold px-4 py-2 rounded-full inline-block"
                      >
                        Shop now
                      </a>
                    </div>
                  </div>
                </div>
                {/* Category 2 */}
                <div className="w-full sm:w-1/3 px-4 mb-8">
                  <div className="category-banner relative overflow-hidden rounded-lg shadow-lg group">
                    <img
                      src="/assets/images/cat-image4.jpg"
                      alt="Category 2"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gray-light bg-opacity-50" />
                    <div className="category-text absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 transition duration-300">
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">Women</h2>
                      <a
                        href="/"
                        className="bg-primary hover:bg-transparent border border-transparent hover:border-white text-white hover:text-white font-semibold px-4 py-2 rounded-full inline-block"
                      >
                        Shop now
                      </a>
                    </div>
                  </div>
                </div>
                {/* Category 3 */}
                <div className="w-full sm:w-1/3 px-4 mb-8">
                  <div className="category-banner relative overflow-hidden rounded-lg shadow-lg group">
                    <img
                      src="/assets/images/cat-image5.jpg"
                      alt="Category 3"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gray-light bg-opacity-50" />
                    <div className="category-text absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 transition duration-300">
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Accessories
                      </h2>
                      <a
                        href="/"
                        className="bg-primary hover:bg-transparent border border-transparent hover:border-white text-white hover:text-white font-semibold px-4 py-2 rounded-full inline-block"
                      >
                        Shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Popular product section */}
          <section id="popular-products">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8">Popular products</h2>
              <div className="flex flex-wrap -mx-4">
                {/* Product 1 */}
                <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                  <div className="bg-white p-3 rounded-lg shadow-lg">
                    <img
                      src="assets/images/products/1.jpg"
                      alt="Product 1"
                      className="w-full object-cover mb-4 rounded-lg"
                    />
                    <a href="#" className="text-lg font-semibold mb-2">
                      Summer black dress
                    </a>
                    <p className="my-2">Women</p>
                    <div className="flex items-center mb-4">
                      <span className="text-lg font-bold text-primary">$19.99</span>
                      <span className="text-sm line-through ml-2">$24.99</span>
                    </div>
                    <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">
                      Add to Cart
                    </button>
                  </div>
                </div>
                {/* Product 2 */}
                <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                  <div className="bg-white p-3 rounded-lg shadow-lg">
                    <img
                      src="assets/images/products/2.jpg"
                      alt="Product 2"
                      className="w-full object-cover mb-4 rounded-lg"
                    />
                    <a href="#" className="text-lg font-semibold mb-2">
                      Black suit
                    </a>
                    <p className=" my-2">Women</p>
                    <div className="flex items-center mb-4">
                      <span className="text-lg font-bold text-gray-900">$29.99</span>
                    </div>
                    <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">
                      Add to Cart
                    </button>
                  </div>
                </div>
                {/* Product 3 */}
                <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                  <div className="bg-white p-3 rounded-lg shadow-lg">
                    <img
                      src="assets/images/products/3.jpg"
                      alt="Product 3"
                      className="w-full object-cover mb-4 rounded-lg"
                    />
                    <a href="#" className="text-lg font-semibold mb-2">
                      Black long dress
                    </a>
                    <p className=" my-2">Women, Accessories</p>
                    <div className="flex items-center mb-4">
                      <span className="text-lg font-bold text-gray-900">$15.99</span>
                      <span className="text-sm line-through  ml-2">$19.99</span>
                    </div>
                    <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">
                      Add to Cart
                    </button>
                  </div>
                </div>
                {/* Product 4 */}
                <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                  <div className="bg-white p-3 rounded-lg shadow-lg">
                    <img
                      src="assets/images/products/4.jpg"
                      alt="Product 4"
                      className="w-full object-cover mb-4 rounded-lg"
                    />
                    <a href="#" className="text-lg font-semibold">
                      Black leather jacket
                    </a>
                    <p className="my-2">Women</p>
                    <div className="flex items-center mb-4">
                      <span className="text-lg font-bold text-primary">$39.99</span>
                      <span className="text-sm line-through ml-2">$49.99</span>
                    </div>
                    <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Latest product section */}
          <section id="latest-products" className="py-10">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8">Latest products</h2>
              <div className="flex flex-wrap -mx-4">
                {/* Product 1 */}
                <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                  <div className="bg-white p-3 rounded-lg shadow-lg">
                    <img
                      src="assets/images/products/5.jpg"
                      alt="Product 1"
                      className="w-full object-cover mb-4 rounded-lg"
                    />
                    <a href="#" className="text-lg font-semibold mb-2">
                      Blue women's suit
                    </a>
                    <p className=" my-2">Women</p>
                    <div className="flex items-center mb-4">
                      <span className="text-lg font-bold text-primary">$19.99</span>
                      <span className="text-sm line-through ml-2">$24.99</span>
                    </div>
                    <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">
                      Add to Cart
                    </button>
                  </div>
                </div>
                {/* Product 2 */}
                <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                  <div className="bg-white p-3 rounded-lg shadow-lg">
                    <img
                      src="assets/images/products/6.jpg"
                      alt="Product 2"
                      className="w-full object-cover mb-4 rounded-lg"
                    />
                    <a href="#" className="text-lg font-semibold mb-2">
                      White shirt with long sleeves
                    </a>
                    <p className=" my-2">Women</p>
                    <div className="flex items-center mb-4">
                      <span className="text-lg font-bold text-gray-900">$29.99</span>
                    </div>
                    <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">
                      Add to Cart
                    </button>
                  </div>
                </div>
                {/* Product 3 */}
                <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                  <div className="bg-white p-3 rounded-lg shadow-lg">
                    <img
                      src="assets/images/products/7.jpg"
                      alt="Product 3"
                      className="w-full object-cover mb-4 rounded-lg"
                    />
                    <a href="#" className="text-lg font-semibold mb-2">
                      Yellow men's suit
                    </a>
                    <p className="my-2">Men</p>
                    <div className="flex items-center mb-4">
                      <span className="text-lg font-bold text-gray-900">$15.99</span>
                      <span className="text-sm line-through  ml-2">$19.99</span>
                    </div>
                    <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">
                      Add to Cart
                    </button>
                  </div>
                </div>
                {/* Product 4 */}
                <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                  <div className="bg-white p-3 rounded-lg shadow-lg">
                    <img
                      src="assets/images/products/8.jpg"
                      alt="Product 4"
                      className="w-full object-cover mb-4 rounded-lg"
                    />
                    <a href="#" className="text-lg font-semibold mb-2">
                      Red dress
                    </a>
                    <p className="my-2">Women</p>
                    <div className="flex items-center mb-4">
                      <span className="text-lg font-bold text-primary">$39.99</span>
                      <span className="text-sm line-through ml-2">$49.99</span>
                    </div>
                    <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Brand section */}
          <section id="brands" className="bg-white py-16 px-4">
            <div className="container mx-auto max-w-screen-xl px-4 testimonials">
              <div className="text-center mb-12 lg:mb-20">
                <h2 className="text-5xl font-bold mb-4">
                  Discover <span className="text-primary">Our Brands</span>
                </h2>
                <p className="my-7">Explore the top brands we feature in our store</p>
              </div>
              <div className="swiper brands-swiper-slider">
                <div className="swiper-wrapper">
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="swiper-wrapper"
                  >
                    {/* Brand Logo 1 */}
                    <div className="swiper-slide flex-none bg-gray-200 flex items-center justify-center rounded-md">
                      <img
                        src="/assets/images/brands/html.svg"
                        alt="Client Logo"
                        className="max-h-full max-w-full"
                      />
                    </div>
                    {/* Brand Logo 2 */}


                    <div className="swiper-slide flex-none bg-gray-200 flex items-center justify-center rounded-md">
                      <img
                        src="/assets/images/brands/js.svg"
                        alt="Client Logo"
                        className="max-h-full max-w-full"
                      />
                    </div>
                    {/* Brand Logo 3 */}
                    <SwiperSlide>
                      <div className="swiper-slide flex-none bg-gray-200 flex items-center justify-center rounded-md">
                        <img
                          src="/assets/images/brands/laravel.svg"
                          alt="Client Logo"
                          className="max-h-full max-w-full"
                        />
                      </div>
                    </SwiperSlide>
                    {/* Brand Logo 4 */}
                    <SwiperSlide>
                      <div className="swiper-slide flex-none bg-gray-200 flex items-center justify-center rounded-md">
                        <img
                          src="/assets/images/brands/php.svg"
                          alt="Client Logo"
                          className="max-h-full max-w-full"
                        />
                      </div>
                    </SwiperSlide>
                    {/* Brand Logo 5 */}
                    <SwiperSlide>
                      <div className="swiper-slide flex-none bg-gray-200 flex items-center justify-center rounded-md">
                        <img
                          src="/assets/images/brands/react.svg"
                          alt="Client Logo"
                          className="max-h-full max-w-full"
                        />
                      </div>
                    </SwiperSlide>
                    {/* Brand Logo 6 */}
                    <SwiperSlide>
                      <div className="swiper-slide flex-none bg-gray-200 flex items-center justify-center rounded-md">
                        <img
                          src="/assets/images/brands/tailwind.svg"
                          alt="Client Logo"
                          className="max-h-full max-w-full"
                        />
                      </div>
                    </SwiperSlide>
                    {/* Brand Logo 7 */}
                    <SwiperSlide>
                      <div className="swiper-slide flex-none bg-gray-200 flex items-center justify-center rounded-md">
                        <img
                          src="/assets/images/brands/typescript.svg"
                          alt="Client Logo"
                          className="max-h-full max-w-full"
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </section>
          {/* Banner section */}
          <section id="banner" className="relative my-16">
            <div
              className="container mx-auto px-4 py-20 rounded-lg relative bg-cover bg-center"
              style={{ backgroundImage: 'url("assets/images/banner1.jpg")' }}
            >
              <div className="absolute inset-0 bg-black opacity-40 rounded-lg" />
              <div className="relative flex flex-col items-center justify-center h-full text-center text-white py-20">
                <h2 className="text-4xl font-bold mb-4">Welcome to Our Shop</h2>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-primary hover:bg-transparent text-white hover:text-primary border border-transparent hover:border-primary font-semibold px-4 py-2 rounded-full inline-block"
                  >
                    Shop Now
                  </a>
                  <a
                    href="#"
                    className="bg-primary hover:bg-transparent text-white hover:text-primary border border-transparent hover:border-primary font-semibold px-4 py-2 rounded-full inline-block"
                  >
                    New Arrivals
                  </a>
                  <a
                    href="#"
                    className="bg-primary hover:bg-transparent text-white hover:text-primary border border-transparent hover:border-primary font-semibold px-4 py-2 rounded-full inline-block"
                  >
                    Sale
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Blog section */}
          <section className="py-16">
            <div className="text-center mb-12 lg:mb-20">
              <h2 className="text-5xl font-bold mb-4">
                Discover <span className="text-primary">Our</span> Blog
              </h2>
              <p className="my-7">
                Stay updated with the latest trends, tips, and stories in the world of
                fashion
              </p>
            </div>
            <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
              <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
                <div className="flex flex-col p-6 bg-white rounded-xl shadow-lg">
                  <img
                    className="object-cover object-center w-full mb-8 rounded-xl"
                    src="/assets/images/fashion-trends.jpg"
                    alt="blog"
                  />
                  <h2 className="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">
                    Fashion Trends
                  </h2>
                  <h1 className="mb-4 text-2xl font-semibold leading-none tracking-tighter text-gray-dark lg:text-3xl">
                    Latest Shirt Trends for 2024
                  </h1>
                  <p className="flex-grow text-base font-medium leading-relaxed text-gray-txt">
                    Explore the hottest shirt trends of 2024. From bold prints to
                    classic styles, stay ahead of the fashion curve with our expert
                    insights.
                  </p>
                  <div className="mt-8">
                    <a
                      href="#"
                      className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full"
                    >
                      Read more
                    </a>
                  </div>
                </div>
                <div className="flex flex-col p-6 bg-white rounded-xl shadow-lg">
                  <img
                    className="object-cover object-center w-full mb-8 rounded-xl"
                    src="/assets/images/stylisng-tips.jpg"
                    alt="blog"
                  />
                  <h2 className="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">
                    Styling Tips
                  </h2>
                  <h1 className="mb-4 text-2xl font-semibold leading-none tracking-tighter text-gray-dark lg:text-3xl">
                    How to Style Your Shirt for Any Occasion
                  </h1>
                  <p className="flex-grow text-base font-medium leading-relaxed text-gray-txt">
                    Learn how to style your shirt for different occasions, whether it's
                    a casual day out or a formal event. Get tips from fashion experts.
                  </p>
                  <div className="mt-8">
                    <a
                      href="#"
                      className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full"
                    >
                      Read more
                    </a>
                  </div>
                </div>
                <div className="flex flex-col p-6 bg-white rounded-xl shadow-lg">
                  <img
                    className="object-cover object-center w-full mb-8 rounded-xl"
                    src="/assets/images/customer-stories.jpg"
                    alt="blog"
                  />
                  <h2 className="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">
                    Customer Stories
                  </h2>
                  <h1 className="mb-4 text-2xl font-semibold leading-none tracking-tighter text-gray-dark lg:text-3xl">
                    Real Stories from Our Happy Customers
                  </h1>
                  <p className="flex-grow text-base font-medium leading-relaxed text-gray-txt">
                    Read about the experiences of our customers. Discover how our shirts
                    have made a difference in their lives and their personal style.
                  </p>
                  <div className="mt-8">
                    <a
                      href="#"
                      className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Subscribe section */}
          <section
            id="subscribe"
            className="py-6 lg:py-24 bg-white border-t border-gray-line"
          >
            <div className="container mx-auto">
              <div className="flex flex-col items-center rounded-lg p-4 sm:p-0 ">
                <div className="mb-8">
                  <h2 className="text-center text-xl font-bold sm:text-2xl lg:text-left lg:text-3xl">
                    Join our newsletter and{" "}
                    <span className="text-primary">get $50 discount</span> for your
                    first order
                  </h2>
                </div>
                <div className="flex flex-col items-center w-96 ">
                  <form className="flex w-full gap-2">
                    <input
                      placeholder="Enter your email address"
                      className="w-full flex-1 rounded-full px-3 py-2 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary"
                    />
                    <button className="bg-primary border border-primary hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* Footer */}
          <footer className="border-t border-gray-line">
            {/* Top part */}
            <div className="container mx-auto px-4 py-10">
              <div className="flex flex-wrap -mx-4">
                {/* Menu 1 */}
                <div className="w-full sm:w-1/6 px-4 mb-8">
                  <h3 className="text-lg font-semibold mb-4">Shop</h3>
                  <ul>
                    <li>
                      <a href="//shop" className="hover:text-primary">
                        Shop
                      </a>
                    </li>
                    <li>
                      <a
                        href="/single-product-page.html"
                        className="hover:text-primary"
                      >
                        Women
                      </a>
                    </li>
                    <li>
                      <a href="//shop" className="hover:text-primary">
                        Men
                      </a>
                    </li>
                    <li>
                      <a
                        href="/single-product-page.html"
                        className="hover:text-primary"
                      >
                        Shoes
                      </a>
                    </li>
                    <li>
                      <a
                        href="/single-product-page.html"
                        className="hover:text-primary"
                      >
                        Accessories
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Menu 2 */}
                <div className="w-full sm:w-1/6 px-4 mb-8">
                  <h3 className="text-lg font-semibold mb-4">Pages</h3>
                  <ul>
                    <li>
                      <a href="//shop" className="hover:text-primary">
                        Shop
                      </a>
                    </li>
                    <li>
                      <a
                        href="/single-product-page.html"
                        className="hover:text-primary"
                      >
                        Product
                      </a>
                    </li>
                    <li>
                      <a href="/checkout.html" className="hover:text-primary">
                        Checkout
                      </a>
                    </li>
                    <li>
                      <a href="/404.html" className="hover:text-primary">
                        404
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Menu 3 */}
                <div className="w-full sm:w-1/6 px-4 mb-8">
                  <h3 className="text-lg font-semibold mb-4">Account</h3>
                  <ul>
                    <li>
                      <a href="/cart.html" className="hover:text-primary">
                        Cart
                      </a>
                    </li>
                    <li>
                      <a href="/register.html" className="hover:text-primary">
                        Registration
                      </a>
                    </li>
                    <li>
                      <a href="/register.html" className="hover:text-primary">
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Social Media */}
                <div className="w-full sm:w-1/6 px-4 mb-8">
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <ul>
                    <li className="flex items-center mb-2">
                      <img
                        src="/assets/images/social_icons/facebook.svg"
                        alt="Facebook"
                        className="w-4 h-4 transition-transform transform hover:scale-110 mr-2"
                      />
                      <a href="#" className="hover:text-primary">
                        Facebook
                      </a>
                    </li>
                    <li className="flex items-center mb-2">
                      <img
                        src="/assets/images/social_icons/twitter.svg"
                        alt="Twitter"
                        className="w-4 h-4 transition-transform transform hover:scale-110 mr-2"
                      />
                      <a href="#" className="hover:text-primary">
                        Twitter
                      </a>
                    </li>
                    <li className="flex items-center mb-2">
                      <img
                        src="/assets/images/social_icons/instagram.svg"
                        alt="Instagram"
                        className="w-4 h-4 transition-transform transform hover:scale-110 mr-2"
                      />
                      <a href="#" className="hover:text-primary">
                        Instagram
                      </a>
                    </li>
                    <li className="flex items-center mb-2">
                      <img
                        src="/assets/images/social_icons/pinterest.svg"
                        alt="Instagram"
                        className="w-4 h-4 transition-transform transform hover:scale-110 mr-2"
                      />
                      <a href="#" className="hover:text-primary">
                        Pinterest
                      </a>
                    </li>
                    <li className="flex items-center mb-2">
                      <img
                        src="/assets/images/social_icons/youtube.svg"
                        alt="Instagram"
                        className="w-4 h-4 transition-transform transform hover:scale-110 mr-2"
                      />
                      <a href="#" className="hover:text-primary">
                        YouTube
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Contact Information */}
                <div className="w-full sm:w-2/6 px-4 mb-8">
                  <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                  <p>
                    <img
                      src="assets/images/template-logo.png"
                      alt="Logo"
                      className="h-[60px] mb-4"
                    />
                  </p>
                  <p>123 Street Name, Paris, France</p>
                  <p className="text-xl font-bold my-4">Phone: (123) 456-7890</p>
                  <a href="mailto:info@company.com" className="underline">
                    Email: info@company.com
                  </a>
                </div>
              </div>
            </div>
            {/* Bottom part */}
            <div className="py-6 border-t border-gray-line">
              <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
                {/* Copyright and Links */}
                <div className="w-full lg:w-3/4 text-center lg:text-left mb-4 lg:mb-0">
                  <p className="mb-2 font-bold">
                    © 2024 Your Company. All rights reserved.
                  </p>
                  <ul className="flex justify-center lg:justify-start space-x-4 mb-4 lg:mb-0">
                    <li>
                      <a href="#" className="hover:text-primary">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary">
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-primary">
                        FAQ
                      </a>
                    </li>
                  </ul>
                  <p className="text-sm mt-4">
                    Your shop's description goes here. This is a brief introduction to
                    your shop and what you offer.
                  </p>
                </div>
                {/* Payment Icons */}
                <div className="w-full lg:w-1/4 text-center lg:text-right">
                  <img
                    src="/assets/images/social_icons/paypal.svg"
                    alt="PayPal"
                    className="inline-block h-8 mr-2"
                  />
                  <img
                    src="/assets/images/social_icons/stripe.svg"
                    alt="Stripe"
                    className="inline-block h-8 mr-2"
                  />
                  <img
                    src="/assets/images/social_icons/visa.svg"
                    alt="Visa"
                    className="inline-block h-8"
                  />
                </div>
              </div>
            </div>
          </footer>
        </>

      </>


    </>
  );
}
