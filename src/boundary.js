export class Boundary {
    constructor (context, x, y, width, height) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        const context = this.context;

        context.strokeStyle = 'white';
        context.lineWidth = 5;
        context.strokeRect(this.x, this.y, this.width, this.height)
    }
}