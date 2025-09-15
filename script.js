// script.js: включает анимацию при клике и позволяет сбросить
const heartContainer = document.getElementById('heartContainer');
const resetBtn = document.getElementById('resetBtn');
const loveText = document.getElementById('loveText');

function activateHeart(){
  if(!heartContainer.classList.contains('active')){
    heartContainer.classList.add('active');
    heartContainer.setAttribute('aria-pressed','true');
    // создадим пары частиц
    createParticles(18);
  }
}

function deactivateHeart(){
  heartContainer.classList.remove('active');
  heartContainer.setAttribute('aria-pressed','false');
  clearParticles();
}

heartContainer.addEventListener('click', activateHeart);
heartContainer.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' ') activateHeart(); });

resetBtn.addEventListener('click', deactivateHeart);

// частицы
let particleTimeouts = [];
function createParticles(n){
  const wrap = document.querySelector('.wrap');
  for(let i=0;i<n;i++){
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = (50 + (Math.random()*240-120)) + '%';
    p.style.top = (60 + Math.random()*20) + '%';
    p.style.animationDuration = (2+Math.random()*2) + 's';
    wrap.appendChild(p);
    // удалить через время
    const to = setTimeout(()=>{ if(p.parentNode) p.parentNode.removeChild(p); }, 3500);
    particleTimeouts.push(to);
  }
}

function clearParticles(){
  particleTimeouts.forEach(t=>clearTimeout(t));
  particleTimeouts = [];
  document.querySelectorAll('.particle').forEach(n=>n.remove());
}

// небольшая подсказка для клика (анимация при загрузке)
window.addEventListener('load', ()=>{
  loveText.animate([{transform:'translateY(0) scale(1)'},{transform:'translateY(-6px) scale(1.02)'},{transform:'translateY(0) scale(1)'}],{duration:1400,iterations:2});
});