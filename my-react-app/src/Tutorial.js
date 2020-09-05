import React from 'react';
import './App.css'

const Tutorial = () => {
    return (
        <section
            className="tutorialSection">
            <h1>Tutorial</h1>
            <h4>From Wikipedia, the free encyclopedia</h4>

            <h2>Object</h2>
            <section>
                The game starts with four seeds in each house. The object of the game is to capture more seeds than one's opponent.
                Since the game has only 48 seeds, capturing 25 is sufficient to win the game. Since there is an even number of seeds,
                it is possible for the game to end in a draw, where each player has captured 24.
            </section>

            <h2>Sowing</h2>
            <section>
                Players take turns moving the seeds. On a turn, a player chooses one of the six houses under their control.
                The player removes all seeds from that house, and distributes them, dropping one in each house counter-clockwise
                from this house, in a process called sowing. Seeds are not distributed into the end scoring houses, nor into the
                house drawn from. The starting house is always left empty; if it contained 12 (or more) seeds, it is skipped, and
                the twelfth seed is placed in the next house.
            </section>

             <section>Knowing the number of seeds in each house is, of course, important to game play. When there are many seeds
                 in a house, sometimes enough to make a full lap of the board or more, they cannot easily be counted by eye, and
                 their number is often guarded by the player who controls that house. This may be done by repeatedly moving the
                 seeds in the house. A player may count the seeds when contemplating a move; in such cases the last few are usually
                 counted in the hand to avoid revealing their number.
             </section>

            <h2>Capturing</h2>
            <section>
                In Oware Abapa, capturing occurs only when a player brings the count of an opponent's house to exactly two or three
                with the final seed he sowed in that turn.[5] This always captures the seeds in the corresponding house, and possibly
                more: If the previous-to-last seed also brought an opponent's house to two or three, these are captured as well,
                and so on until a house is reached which does not contain two or three seeds or does not belong to the opponent.
                The captured seeds are placed in the player's scoring house (or set aside if the board has no scoring houses).
                However, if a move would capture all of an opponent's seeds, the capture is forfeited since this would prevent the
                opponent from continuing the game, and the seeds are instead left on the board. In the adjacent diagram, the lower
                player would capture all the seeds in houses e, d, and c but not b (as it has four seeds) or a (since it is not
                contiguous to the other captured houses).
            </section>

            <h2>Let the opponent play</h2>
            <section>
                The proscription against capturing all an opponent's seeds is related to a more general idea, that one ought to make
                a move that allows the opponent to continue playing. If an opponent's houses are all empty, the current player must
                make a move that gives the opponent seeds. If no such move is possible, the current player captures all seeds in
                his/her own territory, ending the game.
            </section>

            <h2>Winning</h2>
            <section>
                The game is over when one player has captured 25 or more seeds, or each player has taken 24 seeds (draw).
                If both players agree that the game has been reduced to an endless cycle, the game ends when each player has seeds
                in his holes and then each player captures the seeds on their side of the board.
            </section>
        </section>
    )
};

export default Tutorial;