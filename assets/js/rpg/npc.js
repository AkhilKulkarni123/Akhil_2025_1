export class NPC {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 30;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';  // Placeholder color
        ctx.fill();
        ctx.closePath();
    }
}
