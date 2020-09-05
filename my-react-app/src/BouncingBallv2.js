import React from 'react';

const bouncingBall = (canvass, tempArr) => {

const canvasField = [...canvass];

    canvasField.forEach((item) => {

        const canvas = item.getBoundingClientRect();

        const Ball = {
            create: function (dx, dy) {
                const newBall = Object.create(this);
                newBall.dx = dx;
                newBall.dy = dy;
                newBall.width = canvas.height / 30;
                newBall.height = canvas.height / 30;
                newBall.element = document.createElement('div');
                newBall.element.style.width = newBall.width + 'px';
                newBall.element.style.height = newBall.height + 'px';
                newBall.element.className += ' ball';
                newBall.width = parseInt(newBall.element.style.width);
                newBall.height = parseInt(newBall.element.style.height);
                item.appendChild(newBall.element);
                return newBall;
            },
            moveTo: function (x, y) {
                this.element.style.left = x + 'px';
                this.element.style.top = y + 'px';
            },
            changeDirectionIfNecessary: function (x, y) {
                if (x < 3 || x > canvas.width - this.width -3) {
                    this.dx = -this.dx;
                }
                if (y < 3 || y > canvas.height - this.height -3) {
                    this.dy = -this.dy;
                }
            },
            draw: function (x, y) {
                this.moveTo(x, y);
                var ball = this;
                setTimeout(function () {
                    ball.changeDirectionIfNecessary(x, y);
                    ball.draw(x + ball.dx, y + ball.dy);
                }, 1000 / 60);
            }
        };

        const removeAllChildNodes = (parent) => {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        };

        removeAllChildNodes(item);

        for (let i = 0; i < tempArr[item.id]; i++){
            // const x = (Math.floor(Math.random() * canvas.width));
            // const y = (Math.floor(Math.random() * canvas.height));
            const x = (Math.floor((Math.random() * canvas.width) -6 ) + 6);
            const y = (Math.floor((Math.random() * canvas.height) -6 ) + 6);
            const vx = Math.floor(Math.random() * 3) + 0.5 ;
            const vy = Math.floor(Math.random() * 4) + 0.5;

            const ball = Ball.create(vx, vy);
            ball.draw(x, y);
        }
    });
};

export default bouncingBall;

