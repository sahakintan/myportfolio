---
layout: page
permalink: /passion/
title: passion
description: My passion - Guitar
nav: false
nav_order: 7
---

<div class="carousel-container" id="carousel">
  <div class="carousel-track" id="carouselTrack">
    <div class="carousel-slide">
      <div class="video-wrapper">
        <video controls poster="../assets/img/cover-2024-12-28.jpg" preload="metadata">
          <source src="../assets/video/2024-12-28.mp4" type="video/mp4">
        </video>
      </div>
      <div class="meta">
        <div class="caption">Won Gold at Battle of Bands at Inter IISER Cultural Meet (IICM) 2024 (Rhythmica)</div>
        <div class="date">December 28, 2024</div>
        <img src="../assets/img/2024-12-28.jpg" alt="Artist" class="artist-thumb">
      </div>
    </div>

    <div class="carousel-slide">
      <div class="video-wrapper">
        <video controls poster="../assets/img/cover-2024-08-03.jpg">
          <source src="../assets/video/2024-08-03.mp4" type="video/mp4">
        </video>
      </div>
      <div class="meta">
        <div class="caption">Performing at Sangam - 2024 (Rhythmica)</div>
        <div class="date">August 3, 2024</div>
        <img src="../assets/img/2024-08-03.jpg" alt="Artist" class="artist-thumb">
      </div>
    </div>

    <div class="carousel-slide">
      <div class="video-wrapper">
        <video controls poster="thumb3.jpg">
          <source src="../assets/video/2024-03-23.mp4" type="video/mp4">
        </video>
      </div>
      <div class="meta">
        <div class="caption">Performing at Founders Day Show - 2024 (Rhythmica)</div>
        <div class="date">March 23, 2024</div>
        <img src="../assets/img/2024-03-23.jpg" alt="Artist" class="artist-thumb">
      </div>
    </div>


    <div class="carousel-slide">
      <div class="video-wrapper">
        <video controls poster="thumb4.jpg">
          <source src="../assets/video/2023-11-18.mp4" type="video/mp4">
        </video>
      </div>
      <div class="meta">
        <div class="caption">Performing at Diwali Show - 2023 (Rhythmica)</div>
        <div class="date">November 18, 2023</div>
        <img src="../assets/img/2023-11-18.jpg" alt="Artist" class="artist-thumb">
      </div>
    </div>

    <div class="carousel-slide">
      <div class="video-wrapper">
        <video controls poster="thumb5.jpg">
          <source src="../assets/video/2023-10-14.mp4" type="video/mp4">
        </video>
      </div>
      <div class="meta">
        <div class="caption">Performing at Rhapsody - 2023 (Rhythmica)</div>
        <div class="date">October 14, 2023</div>
        <img src="../assets/img/2023-10-14.jpg" alt="Artist" class="artist-thumb">
      </div>
    </div>

    <div class="carousel-slide">
      <div class="video-wrapper">
        <video controls poster="thumb5.jpg">
          <source src="../assets/video/2023-08-04.mp4" type="video/mp4">
        </video>
      </div>
      <div class="meta">
        <div class="caption">First show at IISc - Sangam</div>
        <div class="date">August 4, 2023</div>
        <img src="../assets/img/2023-08-04.jpg" alt="Artist" class="artist-thumb">
      </div>
    </div>

  </div>

  <button class="nav-button prev" onclick="moveCarousel(-1)">❮</button>
  <button class="nav-button next" onclick="moveCarousel(1)">❯</button>
</div>

<div class="dots" id="dotContainer"></div>

<script>
  const track = document.getElementById('carouselTrack');
  const slides = document.querySelectorAll('.carousel-slide');
  const dotContainer = document.getElementById('dotContainer');
  let currentIndex = 0;

  function updateCarousel() {
    // Slide carousel
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;

    // Pause all videos and remove any UI focus
    document.querySelectorAll('video').forEach(video => {
      video.pause();
      video.blur();
      // Slight trick to force UI refresh without reload
      video.currentTime = video.currentTime;
    });

    updateDots();
  }

  function moveCarousel(direction) {
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    updateCarousel();
  }

  function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function createDots() {
    slides.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel();
      });
      dotContainer.appendChild(dot);
    });
  }

  // Swipe support
  let startX = 0;
  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  track.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (diff > 50) moveCarousel(1);      // Swipe left → next
    else if (diff < -50) moveCarousel(-1); // Swipe right → prev
  });

  // Optional: pause all videos when interacting with carousel
  track.addEventListener('mousedown', () => {
    document.querySelectorAll('video').forEach(v => v.pause());
  });

  // Only one video can play at a time
  function enforceSinglePlayback() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.addEventListener('play', () => {
        videos.forEach(v => {
          if (v !== video) v.pause();
        });
      });
    });
  }

  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    createDots();
    enforceSinglePlayback();
  });
</script>



