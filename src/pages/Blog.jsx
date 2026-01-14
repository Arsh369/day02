import React from 'react'
import "./Blog.css"
import Navbar from '../components/Navbar'
import Card from '../components/card'
import {r1,r2,r3,r4} from '../assets/images'
const Blog = () => {
    return (
        <div className='Blog'>
            <div className="left">
                <p className="top-text">Axel</p>
                <div className="bottom">
                    <button>featured</button>
                    <p>Beyond the Pixels: Why We Interview Designers, Makers, and Creative Thinkers</p>
                </div>
            </div>
            <div className="right">
                <Navbar></Navbar>
                <h1>Blog</h1>
                <p>Welcome to the blog, a space where I share insights, inspiration, behind-the-scenes moments, and everything in between.
                </p>
                <div className="form">
                    <input type="text" />
                    <button>Subscribe</button>
                </div>

            </div>
        </div>
    )
}

export default Blog
