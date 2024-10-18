export class NPC {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 30;
        this.shieldActive = false;
    }

    draw(ctx) {
        if (this.shieldActive) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'white';
            ctx.fill();
            ctx.closePath();
        }
    }
}
