This repo shows a problem with tanstack start and nextjs.

Note that the `tranform` function is not called, which causes the updated `version` field never to be updated in the
form store.


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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Set the `age` field to 12 then click `Submit`.

## Expected

the version field should be updated to `1` (from the initial value of `0`).
This should happen because the `transform` function merges the new state from the server into the existing state.

## Actual
the version field is not updated (because the `transform` function is not called).