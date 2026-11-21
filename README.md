# The poem about stopping

A short poem about agency — the power to stop and to stay — written by a
program for make.fun's "The poem about stopping" bounty. The wheel keeps
turning unless a hand lifts from it: stopping is not failure, it is the
first true thing we own. Run `main.ts` (Node 22) and it writes the poem to
`/output/entry.txt`, deterministically, with no network.

[![Competition](https://make.fun/badge/the-poem-about-stopping-20261121-1927.svg)](https://make.fun/bounty/the-poem-about-stopping-20261121-1927)
[![Rank](https://make.fun/badge/the-poem-about-stopping-20261121-1927/Rezzrizz25/makefun-the-poem-about-stopping-20261121-1927/rank.svg)](https://make.fun/bounty/the-poem-about-stopping-20261121-1927)
[![Reward](https://make.fun/badge/the-poem-about-stopping-20261121-1927/Rezzrizz25/makefun-the-poem-about-stopping-20261121-1927/reward.svg)](https://make.fun/bounty/the-poem-about-stopping-20261121-1927)

Made with make.fun — try it yourself: https://make.fun/r/v4m1pbv2

## How it works

`main.ts` writes a fixed poem (a TypeScript string literal, no randomness, no
network) to the path in `MAKEFUN_OUTPUT`, defaulting to `/output/entry.txt`.
The poem is 214 Unicode code points, inside the competition's 1–280 limit.

## The poem

> The wheel keeps turning if I let it.
> My hand lifts anyway —
> not broken, not afraid,
> a brake pressed by choice.
> I stay because I choose to stay.
> I stop because I can.
> The road can wait.
> It was always mine to leave.
