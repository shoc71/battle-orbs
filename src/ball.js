export class Ball {
    constructor (context, boundary, init) {
        this.context = context;
        this.boundary = boundary;
        this.init = init;

        this.radius = init.radius;
        this.ballX = boundary.x + init.x;
        this.ballY = boundary.y + init.y;

        this.velocityX = init.velocityX;
        this.velocityY = init.velocityY;

        this.health = init.health;
        this.maxHealth = init.health;

        this.ballColor = init.ballColor;
        this.numberColor = init.numberColor;
        this.numberFont = init.numberFont;
        
    }

    update() {
        this.ballX += this.velocityX
        this.ballY += this.velocityY

        this.checkBorderCollision();
    }

    takeDamage(amount) {
        this.health -= amount;
    }

    checkBorderCollision() {
        if (this.ballX + this.radius > this.boundary.width ||
            this.ballX - this.radius < 0
        ) {
            this.velocityX *= -1;
            this.takeDamage(3);
        }

        if (this.ballY + this.radius > this.boundary.height ||
            this.ballY - this.radius < 0
        ) {
            this.velocityY *= -1;
            this.takeDamage(5);
        }
    }

    draw() {
        const context = this.context;

        // circle draw
        context.beginPath();
        context.arc(this.ballX, this.ballY, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.init.ballColor;
        context.fill();

        // number draw
        context.fillStyle = this.numberColor;
        context.font = this.numberFont;
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(this.health, this.ballX, this.ballY)

        context.closePath();
    }
}