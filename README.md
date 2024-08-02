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

## Future Additions

- Play an border animation when a Talent is selected that spins and shines
- Toggle if click cursor is show based on points spent and tree progression (previous has been selected)
- Clicking higher in the Talent path will auto-populate Talents below assuming points are available
- Similarly, right clicking lower in the Talent path will remove all Talents above and refund points
- Add some notation informing users that right click removes Talents since it's not intuative
