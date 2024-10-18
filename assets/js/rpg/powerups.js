export class PowerUp {
    constructor(type, x, y) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.radius = 15;
        this.color = type === 'trap' ? 'purple' : 'green';
    }

    applyEffect(player) {
        if (this.type === 'invincibility') {
            player.isInvincible = true;
            setTimeout(() => player.isInvincible = false, 5000);
        } else if (this.type === 'speed') {
            player.speed += 3;
            setTimeout(() => player.speed -= 3, 5000);
        } else if (this.type === 'trap') {
            player.health -= 1;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}
