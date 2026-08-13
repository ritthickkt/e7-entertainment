"use client";

import { useState } from "react";
import Link from "next/link";
import {
  productCategories,
  getSubcategoriesForCategory,
} from "../products/data";

export function ProductsDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="group relative shrink-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="flex items-center gap-1 whitespace-nowrap font-display text-xs font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:text-gold xl:tracking-[0.16em] leading-none mt-1"
      >
        Our Products
        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {/* Dropdown Menu */}
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white shadow-lg border border-line rounded-sm z-50 transition-all duration-200 ${
          isOpen
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {/* Grid of categories - scrollable */}
        <div className="grid grid-cols-5 gap-8 p-8 overflow-x-auto" style={{maxWidth: '90vw', minWidth: '800px'}}>
          {productCategories.map((category) => {
            const subcategories = getSubcategoriesForCategory(category.slug);
            return (
              <div key={category.slug} className="w-[160px] flex-shrink-0">
                {/* Category Title */}
                <Link
                  href={`/products/${category.slug}`}
                  className="font-display text-sm font-semibold text-ink hover:text-gold transition-colors block mb-5 pb-4 border-b border-line"
                >
                  {category.title}
                </Link>

                {/* Subcategories */}
                <ul className="space-y-3">
                  {subcategories.map((sub) => (
                    <li key={sub.slug}>
                      <Link
                        href={`/products/${category.slug}/${sub.slug}`}
                        className="text-xs text-ink-soft hover:text-gold transition-colors font-medium"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </li>
  );
}
