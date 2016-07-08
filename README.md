# The Weasel Program

### Context

The Weasel Program, is a thought experiment and a variety of computer simulations illustrating it. Their aim is to demonstrate that the process that drives evolutionary systems (random variation combined with non-random cumulative selection) is different from pure chance.
The thought experiment was formulated by Richard Dawkins, and the first simulation written by him; various other implementations of the program have been written by others.

### Algorithm

A Weasel style algorithm should run as follows.

1.	Start with a random string of 28 characters.
2.	Make 100 copies of this string, with a 5% chance per character of that character being replaced with a random character.
3.	Compare each new string with the target "METHINKS IT IS LIKE A WEASEL", and give each a score (the number of letters in the string that are correct and in the correct position).
4.	If any of the new strings has a perfect score (28), halt.
5.	Otherwise, take the highest scoring string, and go to step 2.

For these purposes, a "character" is any uppercase letter, or a space. Correct letters are not "locked". Each correct letter may become incorrect in subsequent generations. The terms of the program and the existence of the target phrase do however mean that such “negative mutations” will quickly be “corrected”.

By repeating the procedure, a randomly generated sequence of 28 letters and spaces will be gradually changed each generation. The sequences progress through each generation:

```
Generation 01:   WDLTMNLT DTJBKWIRZREZLMQCO P
Generation 02:   WDLTMNLT DTJBSWIRZREZLMQCO P
Generation 10:   MDLDMNLS ITJISWHRZREZ MECS P
Generation 20:   MELDINLS IT ISWPRKE Z WECSEL
Generation 40:   METHINKS IT IS LIKE I WEASEL
Generation 43:   METHINKS IT IS LIKE A WEASEL
```
