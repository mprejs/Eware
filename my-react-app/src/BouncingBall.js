import React from 'react';
import ReactDOM from 'react-dom';

const BouncingBall = (canvass, nestContent) => {

    const canvasField = [...canvass];

    canvasField.forEach((item) => {

    const nestWidth = item.width;
    const nestHeight = item.height;
    const l = item.getContext('2d');

        // It clears the specified pixels within
        // the given rectangle
        l.clearRect(0, 0, nestWidth, nestHeight);


        for (let i = 0; i < nestContent[item.id]; i++){


        // x and y are the co-ordinates of the circle
        // vx and vy are the respective speeds
        const x = Math.floor(Math.random() * nestWidth);
        const y = Math.floor(Math.random() * nestHeight);
        const vx = Math.floor(Math.random() * 2);
        const vy = Math.floor(Math.random() * 4);
        const radius = 20;

        move(x, y, vx, vy, radius);

        // This function will do the animation
        function move(x, y, vx, vy, radius) {
        requestAnimationFrame(move);

        // Creating a circle
        l.beginPath();
        l.strokeStyle = "black";
        l.arc(x, y, radius, 0, Math.PI * 2, false);
        l.stroke();

        // Conditions so that the ball bounces
        // from the edges
            if (radius + x > nestWidth)
                vx = 0 - vx;

            if (x - radius < 0)
                vx = 0 - vx;

            if (y + radius > nestHeight)
                vy = 0 - vy;

            if (y - radius < 0)
                vy = 0 - vy;

            x = x + vx;
            y = y + vy;

            }
        }

    });
    return null;
};

// export default BouncingBall;