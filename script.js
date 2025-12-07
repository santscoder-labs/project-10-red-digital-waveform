const canvas = document.getElementById("wave");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let t = 0;

function draw() {
    requestAnimationFrame(draw);
    ctx.fillStyle = "rgba(13,13,13,0.18)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 4;
    ctx.strokeStyle = "#ff0033"
    ctx.shadowBlur = 18;
    ctx.shadowColor = "#ff0033"

    ctx.beginPath();

    for (let x = 0; x < canvas.width; x++) {
        const y =
          canvas.height / 2 +
          Math.sin(x * 0.008 + t) * 55 +
          Math.sin(x * 0.02 - t * 1.4) * 20;

          ctx.lineTo(x, y);
    }

    ctx.stroke();

    if (Math.random() < 0.08) {
        ctx.drawImage(
            canvas,
            0,
            canvas.height / 2 - 40,
            canvas.width,
            20,
            Math.random() * 12 - 6,
            canvas.height / 2 - 40,
            canvas.width,
            20
        );
    }

    t += 0.04;
}

draw();