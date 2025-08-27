# How to develop? 

Install Supabase (https://supabase.com/) as backend Service and NodeJS as webservice hosting the code.

1. Clone git-repository 
```bash
git clone
```
2. Create .env-File 
```bash
cp .env.example .env.local
```
3. Create table in Supabase with included SQL-File 

4. Install dependencies
```bash
bun install
```
5. Start development
```bash
bun run dev
```
6. Integrate lefthook 
```bash
bunx lefthook install
```

# Aufbau der Anwendungen 

## Tools 
We use the following tools: 
- Next.js 15. 
- Supabase typescript client for interfacing with Supabase. The implementation for this can be found in the utils/supbase folder
    - The types generated from Supabase are also stored here. Under supabase/database.ts. If changes are made to the DB, this file must also be adjusted.
    - Authentication is implemented on both the server and client sides. ==Attention: The client implementation must be loaded for client pages and the server implementation for server pages.
- Shadcn/ui for all styled components.
- Tailwindcsss for specific styling of components.
- React-Hook-Forms in conjunction with Zod for validating and building forms.

## Structure
- [app](./app) here are all pages.
    - Components that are only called up on a specific page are located in the same folder as the pages.
- [components](./components) All recurring components of the application are stored here.
    - Every component that is used across multiple pages is stored here.
- [lib](./lib) All frequently used functions and types are stored here.
