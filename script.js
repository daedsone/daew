document.addEventListener('DOMContentLoaded', function() {
  const skillBars = document.querySelectorAll('.skill-bar');

  skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0'; // Başlangıçta sıfır yap
    bar.style.transition = 'width 1s ease-in-out'; // Geçiş efekti ekle

    setTimeout(() => {
      bar.style.width = width; // 100ms sonra genişliği ayarla
    }, 100);
  });
});
