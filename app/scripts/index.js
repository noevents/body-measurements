import './../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('./../index.pug')
}
window.onload = function () {
  // let inputContainers = [...document.getElementsByClassName('input-container')]
  let inputs = [...document.getElementsByClassName('val-input')]
  let dashedLines = [...document.getElementsByClassName('dashed')]

  let representations = {
    height: {
      arrow: document.getElementById('height-arrow'),
      value: document.getElementById('height-value')
    },
    chest: {
      arrow: document.getElementById('chest-arrow'),
      value: document.getElementById('chest-value')
    },
    waist: {
      arrow: document.getElementById('waist-arrow'),
      value: document.getElementById('waist-value')
    },
    hips: {
      arrow: document.getElementById('hips-arrow'),
      value: document.getElementById('hips-value')
    },
    weight: {
      value: document.getElementById('weight-value')
    }
  }
  function focusHandler (e) {
    e.preventDefault()
    if (e.target.classList[1] !== 'weight') {
      if (e.target.classList[1] === 'height') {
        dashedLines.map((line) => {
          line.classList.add('animate')
        })
      }
      representations[e.target.classList[1]].arrow.classList.add('animate')
      // if (representations[e.target.classList[1]].value.innerHTML === '') {
      //   representations[e.target.classList[1]].arrow.classList.toggle('animate')
      // }
    }
  }
  function blurHandler (e) {
    e.preventDefault()
    if (e.target.classList[1] !== 'weight') {
      if (representations[e.target.classList[1]].value.innerHTML === '') {
        if (e.target.classList[1] === 'height') {
          dashedLines.map((line) => {
            line.classList.remove('animate')
          })
        }
        representations[e.target.classList[1]].arrow.classList.remove('animate')
      }
    }
  }
  // inputContainers.map((container) => {
  //   container.addEventListener('mouseenter', handler)
  //   container.addEventListener('mouseleave', handler)
  // })
  inputs.map((input) => {
    input.addEventListener('focus', focusHandler)
    input.addEventListener('blur', blurHandler)
    input.addEventListener('input', (e) => {
      e.preventDefault()
      let units = (e.target.id === 'weight') ? 'kg' : 'sm'
      representations[e.target.id].value.innerHTML = `${e.target.value}${units}`
      if (+e.target.value.length === 0) {
        representations[e.target.id].value.innerHTML = ''
      }
    })
  })
}
