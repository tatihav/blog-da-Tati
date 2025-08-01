/*var nome = window.prompt(' Bem vindo ao meu Blog! qual é seu nome?')
window.alert('É um prazer te conhecer, '+ nome + '!')

const btnInicio = document.getElementById('btn-inicio')
         
        


btnInicio.onclick = (e) => {
    window.scrollTo('0px','0px')
}*/


document.addEventListener('DOMContentLoaded', () => {
  const carouselEl = document.getElementById('carouselOQueFaz');
  const video = document.getElementById('videoDemo');
  if (!carouselEl || !video) return;


  const carousel = new bootstrap.Carousel(carouselEl);


  video.addEventListener('play',  () => carousel.pause());
  video.addEventListener('pause', () => carousel.cycle());
  video.addEventListener('ended', () => carousel.cycle());

 
  video.addEventListener('loadedmetadata', () => {
    video.playbackRate = 2.0; 
  });

 
  carouselEl.addEventListener('slide.bs.carousel', () => {
    if (!video.paused) {
      video.pause();
      início
      video.currentTime = 0;
    }
  });

  
  carouselEl.addEventListener('slid.bs.carousel', () => {
    const active = carouselEl.querySelector('.carousel-item.active');
    if (active && active.contains(video)) {
     
      video.play().catch(() => {});
    }
  });
});
