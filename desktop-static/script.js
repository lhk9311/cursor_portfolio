// ========== 1. 스크롤 페이드인 ==========
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, { threshold: 0.1 })

document.querySelectorAll('section').forEach(section => {
  observer.observe(section)
})

// ========== 2. 헤더 스크롤 그림자 ==========
const header = document.querySelector('.desktop-header')
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)'
  } else {
    header.style.boxShadow = 'none'
  }
})

// ========== 3. 타이핑 효과 ==========
const titleEl = document.querySelector('.hero-main-title-text')
if (titleEl) {
  const text = 'BACKEND\nDEVELOPER\n'
  titleEl.textContent = ''
  let i = 0
  const type = () => {
    if (i < text.length) {
      if (text[i] === '\n') {
        titleEl.appendChild(document.createElement('br'))
      } else {
        titleEl.appendChild(document.createTextNode(text[i]))
      }
      i++
      setTimeout(type, 80)
    }
  }
  type()
}

// ========== 4. 숫자 카운트업 ==========
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll('.num-title-text')
      nums.forEach(num => {
        const target = parseInt(num.textContent)
        let count = 0
        const step = () => {
          if (count < target) {
            count++
            num.textContent = String(count).padStart(2, '0')
            setTimeout(step, 80)
          }
        }
        step()
      })
      countObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.3 })

document.querySelectorAll('.teamproject-box').forEach(el => {
  countObserver.observe(el)
})

// ========== 5. 스크롤 진행바 ==========
const progressBar = document.createElement('div')
progressBar.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background-color: #21a0aa;
  z-index: 9999;
  transition: width 0.1s ease;
  width: 0%;
`
document.body.appendChild(progressBar)

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  const progress = (scrollTop / docHeight) * 100
  progressBar.style.width = progress + '%'
})

// ========== 6. 카드 호버 효과 ==========
document.querySelectorAll('.skill-card, .teamproject-list').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-6px)'
    card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease'
    card.style.boxShadow = '0 12px 32px rgba(0,0,0,0.12)'
  })
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)'
    card.style.boxShadow = 'none'
  })
})

// ========== 7. 커스텀 커서 ==========
const cursor = document.createElement('div')
const cursorDot = document.createElement('div')

cursor.style.cssText = `
  position: fixed;
  width: 36px;
  height: 36px;
  border: 2px solid #21a0aa;
  border-radius: 50%;
  pointer-events: none;
  z-index: 99999;
  transition: transform 0.15s ease, opacity 0.3s ease;
  transform: translate(-50%, -50%);
`
cursorDot.style.cssText = `
  position: fixed;
  width: 6px;
  height: 6px;
  background-color: #21a0aa;
  border-radius: 50%;
  pointer-events: none;
  z-index: 99999;
  transform: translate(-50%, -50%);
`

document.body.appendChild(cursor)
document.body.appendChild(cursorDot)

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px'
  cursor.style.top = e.clientY + 'px'
  cursorDot.style.left = e.clientX + 'px'
  cursorDot.style.top = e.clientY + 'px'
})

document.querySelectorAll('a, button, .skill-card, .teamproject-list').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1.6)'
    cursor.style.backgroundColor = 'rgba(33,160,170,0.1)'
  })
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)'
    cursor.style.backgroundColor = 'transparent'
  })
})

// ========== 8. 맨 위로 버튼 ==========
const scrollTopBtn = document.createElement('button')
scrollTopBtn.innerHTML = '↑'
scrollTopBtn.className = 'scroll-top-btn'
document.body.appendChild(scrollTopBtn)

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible')
  } else {
    scrollTopBtn.classList.remove('visible')
  }
})

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})