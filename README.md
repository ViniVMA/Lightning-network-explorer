## Libraries & frameworks used

- SvelteKit
- Tailwind
- Tanstack-query

## Steps to run

1. Clone the repository

```bash
git clone git@github.com:ViniVMA/Lightning-network-explorer.git
```

2. Install the dependencies

```bash
npm install
```

3. Run the project with

```bash
npm run dev -- --open
```

## What areas of the web app did you focus on?

The application focus in fetching an specific data and showing it for the user, so my focus was in giving the user a seamless experience, with polling, and stale-times so he can always have the most recent data possible.

## What was the reason for your focus? What problems were you trying to solve?

The entire application revolves around showing the user the lighning network top rankings, so giving the user the best experience and always keeping the data updated was the natural path for my focus.

## How long did you spend on this project?

6-7h in 3 sessions of 2-2:30 hours

## Did you make any trade-offs for this project? What would you have done differently with more time?

The biggest tradeoff was not using the SSR from sveltekit for prefetching data, I started with it but it added too much complexity for a simples application so I choose using tanstack query for a more robust caching, fetching, polling in the client side.

## What do you think is the weakest part of your project?

Probably the interface as I'm not the best UI/UX, so the whole interface ended up being too simple, maybe some filters good add to the user experience a lot.

## Testing

To run the appplication tests, run:

```bash
npm run test
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

```

```
