# Personal NextJS 14 + Supabase Web App Starter

This starter contains lots of personal preferences on how I like to build web apps. It's a work in progress and will be updated as I learn more.

## Libraries
- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.io/)
- [Supabase Auth](https://supabase.io/docs/guides/auth)
- [Shadcn](https://ui.shadcn.com)
- [Radix UI](https://radix-ui.com/)
- [Tiptap](https://tiptap.dev/)
- [React Hook Form](https://react-hook-form.com/)
- plus more...

---

### Install

To install the app you must first have the correct Node & NPM versions installed. We use nvm to keep the version being used in line with the project [nvm](https://github.com/nvm-sh/nvm).

Run:

```shell
nvm install
nvm use
yarn install
```

### Prerequisites

* Install and connect to a Supabase project. [Supabase](https://supabase.io/docs/guides/with-nextjs). Prefer using local development via the [Supabase CLI](https://supabase.io/docs/guides/local-development)
* You'll need Docker installed for local Supabase dev
* Create a `.env.local` file in the root of the project and add the variables. See `.env.example` and [these docs](https://supabase.io/docs/guides/local-development)
* Link to Vercel for deployments

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world)

### Start development

Run the development server:

```shell
yarn dev
```

This will start a server on `http://localhost:3000`

### Build for production
Next handles pretty much everything we'll need for building to prod. However, to enforce some good guides we use a light lint and typecheck.

```shell
yarn prepare-commit
yarn build
```

Husky will run all this before you commit anyway.

If you want to test the production build locally you can run:

```shell
yarn start
```

## Structure

```shell
.
├── public
├── src
│   └── examples # Examples of how to use the components
│   └── actions # All server side actions go here
│   └── app # Next App Router
│   └── components # Examples of how to use the components
│       ├── ui # Generic UI components (buttons, inputs, etc)
│       ├── tiptap # Tiptap components
│   └── utils # Utils
```

## Guides
TBD

