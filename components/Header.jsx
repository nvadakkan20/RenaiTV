/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './navBar.module.css';
import { getCategories } from '../services';

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [categories, setCategories] = useState([]);
  // window.onload = function () {
  //   const toggleButton = document.getElementsByClassName('toggleButton')[0];
  //   const navbarLinks = document.getElementsByClassName('navLinks')[0];
  //   toggleButton.addEventListener('click', () => {
  //     navbarLinks.classList.toggle('active');
  //   });
  // };

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block sm:float-left block">
          <Link href="/">
            <Image
              src="/../public/logo.png"
              alt="logo"
              width={100}
              height={125}
            />
          </Link>
        </div>
        <a href="#" className={styles.toggleButton}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </a>
        <div className={styles.navLinks}>
          <ul>
            <li className="ml-8">
              <Link href="/">
                <a href="#" className="font-bold lg:text-xl sm:text-sm text-white hover:text-gray-700">Home</a>
              </Link>
            </li>
            <li className="ml-8">
              <Link href="/about">
                <a href="#" className="font-bold lg:text-xl sm:text-sm text-white hover:text-gray-700">About</a>
              </Link>
            </li>
            <li className="ml-8">
              <Link href="/portfolio">
                <a href="#" className="font-bold lg:text-xl sm:text-sm text-white hover:text-gray-700">Renai Live</a>
              </Link>
            </li>
            <li className="ml-8">
              <Link href="/blog">
                <a href="#" className="font-bold lg:text-xl sm:text-sm text-white hover:text-gray-700">Renai Tube</a>
              </Link>
            </li>
          </ul>

        </div>

        {/* <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
        </div> */}

      </div>
    </div>
  );
};

export default Header;
