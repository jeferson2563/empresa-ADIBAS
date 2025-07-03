function scrollCarousel(direction) {
    const carousel = document.getElementById("carrossel");
    const scrollAmount = 200;
    carousel.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth"
    });
  }
  