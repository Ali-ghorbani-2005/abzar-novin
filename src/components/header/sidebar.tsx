'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showCategories, setShowCategories] = useState(false)

  const categories = [
    'ابزار دستی',
    'ابزار برقی',
    'لوازم اندازه‌گیری',
    'ایمنی و حفاظت'
  ]

  return (
    <> 
      {/* دکمه منو */} 
      <div className='md:ml-98'>
      <button
        onClick={() => setIsOpen(true)}
        className="ml-20 mt-2 bg-yellow-400 text-white px-4 py-2 rounded shadow"
      >
        <img src="/img/icons/menu.png" alt="menu" className="w-7" />
      </button> 
      </div>

      {/* پس‌زمینه محو */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* سایدبار */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="p-4 flex justify-between items-center border-b border-gray-400">
              <h2 className="text-lg font-bold text-right">منوی ابزار نوین</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-600 text-xl">
                &times;
              </button>
            </div>

            <ul className="p-4 space-y-4">
              {/* آیکون‌ها */}
              <div className="flex gap-10 border-b border-gray-400 w-72 -ml-2 pb-4">
                <button><img src="/img/icons/cart.png" alt="cart" className="w-10" /></button>
                <Link href="/login">
                  <button><img src="/img/icons/user.png" alt="user" className="w-8" /></button>
                </Link>
                <button><img src="/img/icons/heart.png" alt="heart" className="w-8" /></button>
              </div>

              {/* لینک‌ها */}
              <li className="text-right text-lg">
                <a href="/" className="text-gray-700 hover:text-yellow-600">صفحه اصلی</a>
              </li>

              {/* محصولات با منوی کشویی */}
              <li
                className="relative text-right text-lg"
                onMouseEnter={() => setShowCategories(true)}
                onMouseLeave={() => setShowCategories(false)}
              >
                <a href="#" className="text-gray-700 hover:text-yellow-600">محصولات</a>

                <AnimatePresence>
                  {showCategories && (
                    <motion.ul
                      className="absolute right-full top-0 bg-white border border-gray-200 shadow-md p-2 w-48 z-50 space-y-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {categories.map((cat, index) => (
                        <li key={index} className="text-right hover:text-yellow-600 text-lg px-2">
                          <a href="#">{cat}</a>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li className="text-right text-lg">
                <a href="#" className="text-gray-700 hover:text-yellow-600">درباره ما</a>
              </li>
              <li className="text-right text-lg">
                <a href="#" className="text-gray-700 hover:text-yellow-600">تماس با ما</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
