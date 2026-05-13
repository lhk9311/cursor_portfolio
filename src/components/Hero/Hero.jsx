import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import '../../../desktop-static/style.css'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const title = hero.querySelector('.hero-title-text')
    const sub = hero.querySelector('.hero-sub-text')
    const imgBox = hero.querySelector('.hero-img')
    if (!title || !sub || !imgBox) return

    const tl = gsap.timeline()

    tl.fromTo(title, { y: 50, opacity: 0 }, { y: 0, opacity: 1, ease: 'power2.out', duration: 0.8 }, 0)
    tl.fromTo(sub, { y: 50, opacity: 0 }, { y: 0, opacity: 1, ease: 'power2.out', duration: 0.8 }, 0.2)
    tl.fromTo(imgBox, { y: 50, opacity: 0 }, { y: 0, opacity: 1, ease: 'power2.out', duration: 0.8 }, 0.4)

    return () => { tl.kill() }
  }, [])

  return (
    <section
      ref={heroRef}
      className="desktop-section-hero hero"
      aria-label="Hero"
    >
      <div className="hero-inner">
        <div className="hero-main-title">
          <p className="hero-main-title-text hero-title-text">
            BACKEND
            <br />
            DEVELOPER
            <br />
          </p>
        </div>
        <div className="hero-sub-text">
          <p className="hero-sub-text-body">
            We train professionals by creating high-quality portfolios through
            practical training starting from the basics!
          </p>
        </div>
      </div>
      <div className="hero-img">
        <img
          className="hero-img-vector"
          src="/images/hero-img.svg"
          width="660"
          height="700"
          alt=""
        />
      </div>
    </section>
  )
}