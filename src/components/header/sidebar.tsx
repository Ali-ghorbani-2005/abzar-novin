'use client'

import { useState } from 'react'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* دکمه باز کردن */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-50 bg-yellow-500 text-white px-4 py-2 rounded shadow"
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
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-bold">منوی ابزار نوین</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-600 text-xl">
            &times;
          </button>
        </div>

        <ul className="p-4 space-y-4">
          <li><a href="#" className="text-gray-700 hover:text-yellow-600">صفحه اصلی</a></li>
          <li><a href="#" className="text-gray-700 hover:text-yellow-600">محصولات</a></li>
          <li><a href="#" className="text-gray-700 hover:text-yellow-600">درباره ما</a></li>
          <li><a href="#" className="text-gray-700 hover:text-yellow-600">تماس با ما</a></li>
        </ul>
      </div>
    </>
  )
}
