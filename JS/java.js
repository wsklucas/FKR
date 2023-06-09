const container = document.querySelector(".carrossel");
    const imagens = document.querySelectorAll(".container img");

    let contador = 0;

    function slider() {
      contador++;

      if (contador > imagens.length - 1) {
        contador = 0;
      }

      container.style.transform = `translateX(${-contador * 500}px)`;
    }

    setInterval(slider, 2000);



    function toggleListItem(event) {
      var content = event.nextElementSibling;
      content.style.display = (content.style.display === 'none') ? 'block' : 'none';
    }