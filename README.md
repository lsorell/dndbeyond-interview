This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Known Differences From Example

- Adding a slight background opacity to most of the elements
- Creating a intricate/gradient border around each Talent to match the example
- Brightening the div's between Talents when one is selected
  - I couldn't quite tell how the logic for this was supposed to function. In the example, the div lights up after the first Chevron is selected and you would expect that something similar would happen in path two between the Scuba and Bolt because it's selected. However, it isn't brightened which is conflicting logic.

## Future Additions

- **Style so that it is mobile friendly.** I would have the talent paths go down the page instead of accross and move the point spend box to the top after the title.
- Play a border animation when a Talent is selected that spins and shines
- Toggle if click cursor is shown based on points spent and tree progression (previous has been selected)
- Clicking higher in the Talent path will auto-populate Talents below assuming points are available
- Similarly, right clicking lower in the Talent path will remove all Talents above and refund points
- Add some notation informing users that right click removes Talents since it's not intuative
