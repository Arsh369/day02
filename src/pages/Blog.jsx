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
                <Card img={r1} tag={"Tutorials"} title={"How We Collaborate with Clients on Design Projects"} description={"At the heart of every successful project is a strong partnership built on trust, transparency, and a shared vision."}></Card>
                <Card img={r2} tag={"Inspiration"} title={"Designing with Feeling: Why Emotion Is a Creative Superpower"} description={"Behind every scroll, click, and tap is a human — with moods, memories, hopes, and fears. Great design doesn’t just function. It feels like something. It moves people."}></Card>
                <Card img={r3} tag={"Inspiration"} title={"Finding Design Inspiration in Unexpected Places"} description={"If you’ve ever hit a creative block or found yourself making something that just feels... familiar, it might be time to look somewhere new."}></Card>
                <Card img={r4} tag={"Freebies"} title={"Why We Share Freebies — And What You Can Get Right Now"} description={"Design is about solving problems and sharing ideas — and sometimes, the best way to do that is by simply giving something useful away."}></Card>
            </div>
        </div>
    )
}

export default Blog
