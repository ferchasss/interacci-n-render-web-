window.onload = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const lineWidth = 12;   // grosor de línea
  const gap = 6;          // espacio entre arcos
  const numArcos = 8;     // cantidad de arcos por cuadrante

  ctx.strokeStyle = "white";
  ctx.lineWidth = lineWidth;

  // Dibujar 4 cuadrantes
  for (let cuadrante = 0; cuadrante < 4; cuadrante++) {
    let startAngle = (Math.PI / 2) * cuadrante;
    let endAngle = startAngle + Math.PI / 2;

    for (let i = 0; i < numArcos; i++) {
      let radio = (i + 1) * (lineWidth + gap);

      ctx.beginPath();
      ctx.arc(centerX, centerY, radio, startAngle, endAngle);
      ctx.stroke();
    }
  }
};

