function Rain() {
    this.x = Math.floor(Math.random() * cnv.width);
    this.y = Math.floor(Math.random() * cnv.height) - cnv.height;

    this.velocity = Math.floor(Math.random() * 5) * speed;
    this.length = this.velocity / speed * 10;
    this.gravity = 0.1;

    this.show = function() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.length / 8, this.y + this.length);
        ctx.lineTo(this.x - this.length / 8, this.y + this.length);
        ctx.arc(this.x, this.y + this.length, this.length / 8, 0, Math.PI, false);
        ctx.closePath();
        ctx.fillStyle = "rgba(255,255,255,0.5";
        ctx.fill();
    }

    this.update = function() {
        speed = document.querySelector("#speed").value;
        this.y += this.velocity;
        this.velocity += this.gravity;
    }
}