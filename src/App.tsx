import Hero from './components/Hero/Hero.jsx'
import './App.css'

export default function App() {
  return (
    <>
      <Hero />
      {/* 스크롤 구간 확보용 (ScrollTrigger 테스트) */}
      <section className="scroll-spacer" aria-hidden="true" />
    </>
  )
}
