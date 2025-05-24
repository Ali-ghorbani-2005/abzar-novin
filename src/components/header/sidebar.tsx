'use client'

import { useState } from 'react'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showCategories, setShowCategories] = useState(false)

  // دسته‌بندی‌ها (می‌تونه از API بیاد)
  const categories = [
    'ابزار دستی',
    'ابزار برقی',
    'لوازم اندازه‌گیری',
    'ایمنی و حفاظت'
  ]

  return (
    <>
      {/* دکمه باز کردن */}
      <button
        onClick={() => setIsOpen(true)}
        className="ml-20 mt-2 bg-yellow-400 text-white px-4 py-2 rounded shadow"
      >
        <img src="/img/icons/menu.png" alt="" className='w-7' />
      </button>

      {/* پس‌زمینه محو هنگام باز بودن */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* سایدبار */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-400">
          <h2 className="text-lg font-bold text-right">منوی ابزار نوین</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-600 text-xl">
            &times;
          </button>
        </div>

        <ul className="p-4 space-y-4">
          <div className='flex gap-10 border-b border-gray-400 w-72 -ml-2'>
            <div className='ml-8'>
              <button><img src="img/icons/cart.png" alt="cart" className='w-10' /></button>
            </div>
            <div>
              <button><img src="img/icons/user.png" alt="user" className='w-8' /></button>
            </div>
            <div>
              <button><img src="img/icons/heart.png" alt="heart" className='w-8' /></button>
            </div>
          </div>

          <li className='text-right text-lg'>
            <a href="#" className="text-gray-700 hover:text-yellow-600">صفحه اصلی</a>
          </li>

          {/* محصولات با منوی کشویی */}
          <li
            className='relative text-right text-lg'
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setShowCategories(false)}
          >
            <a href="#" className="text-gray-700 hover:text-yellow-600">محصولات</a>

            {/* Dropdown */}
            {showCategories && (
              <ul className="absolute right-full top-0 bg-white border border-gray-200 shadow-md p-2 w-48 z-50 space-y-2">
                {categories.map((cat, index) => (
                  <li key={index} className="text-right hover:text-yellow-600 text-lg px-2">
                    <a href="#">{cat}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className='text-right text-lg'>
            <a href="#" className="text-gray-700 hover:text-yellow-600">درباره ما</a>
          </li>
          <li className='text-right text-lg'>
            <a href="#" className="text-gray-700 hover:text-yellow-600">تماس با ما</a>
          </li>
        </ul>
      </div>
    </>
  )
}

