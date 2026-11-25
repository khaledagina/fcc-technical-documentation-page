const links=[...document.querySelectorAll('.nav-link')];
const secs=links.map(l=>document.getElementById(l.getAttribute('href').slice(1)));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id));}}),{rootMargin:'-20% 0px -70% 0px'});
secs.forEach(s=>io.observe(s));
document.querySelectorAll('pre').forEach(pre=>{
  const b=document.createElement('button');b.className='copy';b.type='button';b.textContent='Copy';
  b.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(pre.querySelector('code').textContent);b.textContent='Copied';setTimeout(()=>b.textContent='Copy',1500)}catch(e){b.textContent='Press Ctrl+C'}});
  pre.appendChild(b);
});
