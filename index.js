const container = document.querySelector('.container')

window.addEventListener('scroll', () => {
    target = window.scrollY 
})

let current = 0 // 현재 스크롤 위치
let target = 0 // 목표 스크롤 위치
let ease = 0.1 // 스크롤 속도 

let currentPos = container.getBoundingClientRect().left

function callDistort(){
    console.log(currentPos)

    current = lerp(current, target, ease)
    container.style.left = `${-current}px` // 스크롤을 내리면 해당거리만큼 컨테이너가 왼쪽으로 부드럽게 이동함
    
    let newPos = container.getBoundingClientRect().left
    let diff = newPos - currentPos // 컨테이너 left 의 현재위치와 이전위치와의 차이
    let speed = diff * 0.3 // diff 의 35% 값
    container.style.transform = `skewX(${speed}deg)` // 값이 클수록 더 많이 왜곡됨
    currentPos = newPos // 다음 이터레이션을 위한 현재 컨테이너 left 위치 저장
    requestAnimationFrame(callDistort)
}
function lerp(start, end, t){
    return start * (1 - t) + end * t
}

callDistort()