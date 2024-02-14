/*****************************************
------------ GLOBAL VARIABLES ------------
*****************************************/
let canvas, context;

/*****************************************
---------------- CLASSES ----------------
*****************************************/
class Square {
    constructor(square_config) {
        const { ctx, x, y, size, color } = square_config;
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.size, this.size);
    }
    collidedTo(square) {
        return ((this.x === square.x) && (this.y === square.y));
    }
}

function update() {
    // limpiamos pantalla
    context.fillStyle = BG_COLOR;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // movemos a la serpiente
    snake.move();

    // dibujamos los objetos
    snake.draw();

    // detectamos las colisiones
}

window.onload = () => {
    console.log("document loaded...");
}