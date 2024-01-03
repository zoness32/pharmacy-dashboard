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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Background

I didn't find out that this was a frontend-only exercise until I'd already created and wired up a database to a backend,
defined a schema and ORM for the database, and populated it with mock data I'd created. This, combined with the fact that 
my family and I got quite sick over the holidays, means the frontend isn't as polished as I'd planned to make it (more on that later).
But I was able to implement a table as required and make it searchable, sortable, and orderable.

Since I already had the framework in place to generate mock data and store it in a database, it was more or less
trivial to add a top-level page displaying a list of patients rather than simply showing info for a single patient.
Clicking the "View Details" button opens the patient details page with the table displaying their visits. One of the 
features I'd hoped to add was breadcrumbs or at least a sidenav to allow easy navigation back to the patient page, but 
as the app exists now the only ways to get back to that top page are to either edit the url back to `localhost:3000` or to
use the browser back button.

Once you open the patient details page, you'll notice a lot of empty space in the top right of the page. If I'd had more time,
I would have filled this space with cards displaying trends based on the last X visits (are the patient's vitals, pain levels, 
medication tolerance, etc. trending in good or bad directions?).

## Tech Stack

### Frontend
With the exception of React itself, every technology used in this app was brand new to me; I wanted to use this exercise as an opportunity to 
branch out and use more modern tools than the ones I've been able to use in my current role. They didn't disappoint.

#### NextJS
NextJS is the main framework piece (framework for a framework?) I decided to use for this; it's all the rage right now and they're doing some neat things in 
the web application development world and I wanted to try things out for myself. I still haven't fully wrapped my head around
client vs. server components or how their router is set up to the point that I trust my architectural decisions on my own,
but I was able to put together a fully-featured app in only a few hours with no real hiccups so it's a pretty big win to me so far.

#### React
I used React because it's the framework I'm most familiar with at the moment, though I've personally been stuck developing on
an older version (but thankfully at least still using hooks and FCs instead of class-based components).

#### TailwindCSS
I decided to use TailwindCSS mostly because it was recommended on the NextJS website and in other Google search
results I found. CSS development (particularly architecting a usable and maintainable design framework for an app) is something I've
always found to be very difficult, and Tailwind - even though it's ugly to look at initially - had a fresh take on how to 
skip the hassle of that architecting. I've found it to be an immense pleasure to use, especially combined with their fantastic
documentation. You can even hover over one of their custom class names in an IDE and have it display the CSS that's being used 
under the hood. I'm a big fan.

#### Flowbite
For a component library, I went with Flowbite, also because it was recommended on the NextJS site and because it uses TailwindCSS
under the hood. In hindsight, I think I might have preferred using something more fully-featured like MaterialUI as Flowbite's 
components are simple styling wrappers around basic HTML elements with nothing else built-in (like clickable table header cells
to enable sorting, etc.). 

### Backend/Database

#### NextJS 
One of the interesting things to me about NextJS was how it blurs the line between the backend and the frontend. Using it,
everything felt tightly-coupled (in a good way) and clean. Granted, this app isn't backend- or even logic-heavy, so I wasn't
necessarily able to get the best feel for how it scales on the backend, but it was comfortable to use.

#### PostgreSQL 
I used PostgreSQL because it's what I'm most familiar with at this point in time. In multiple past roles I used MongoDB fairly 
heavily, but since it's been a few years and since NextJS's recommended tools all supported PostgreSQL I went with what was 
familiar.

#### Prisma
When I started digging into [Prisma](https://www.prisma.io/), following a suggestion in the NextJS tutorial (one of the best tutorials I've
come across for what it's worth), I was immediately struck by how clear and easy to use it seemed. I've been stuck using Thrift
for a couple of years now and it's... challenging. I don't have much of a background on the database side, so Prisma greatly simplified
things for me. In fact, I was able to offload a lot of work from the frontend onto Prisma (see `db.ts` and `data.ts`)

