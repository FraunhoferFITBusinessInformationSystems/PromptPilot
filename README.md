# How to develop? 

Wir nutzen biome zum formaten des Codes mit Tab-indent (Size: 2). Bitte vs-code dementsprechend konfigurieren. 

1. Clone git-repository 
```bash
git clone
```
3. Create .env-File 
```bash
cp .env.example .env.local
```
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
Wir nutzten: 
- Next.js 15 für alle Wohlfühl-Funktionen rund um React. Dazu gehören das File-based routing, Authentifizierung, etc. 
- Supabase typescript client zum Interface mit Supabase. Die Implementierung hierzu findet sich im utils/supbase-Ordner
    - Hier werden auch die aus Supabase generierten Types abgespeichert. Unter supabase/database.ts. Sollten Änderungen an der DB vorgenommen werdne, muss auch dieses File angepasst werden. 
    - Die Authentifizierung ist sowohl Server als auch Client-Seitig implmentiert. ==Achtung: Es muss bei client-pages die client Implementierung und bei server-pages die server Implementierung geladen werden. 
- Shadcn/ui für alle gestylten components. 
- Tailwindcsss zum spezifischen styling von components. 
- React-Hook-Forms in Verbindung mit Zod zum validieren und aufbauen von Forms. 

## Aufbau
- [app](./app) hier liegen alle Pages ab.
    - Gleiche Pages werden unter ()-Ordner zusammengefasst. 
    - Jedes Form/jede Liste sind gleich aufgebaut. 
    - Components, welche nur in einer spezifischen Page aufgerufen werden, liegen im selben Ordern wie die Pages. 
    - Unter actions auf der obersten Ebene liegen alle Select-Items-Actions ab. 
- [componets](./components) hier liegen alle wiederkehrenden Components der Anwendung ab. 
    - Jeder Component der über mehrere Pages verwendet wird, liegt hier ab. 
- [lib](./lib) hier liegen alle oft verwendeten Funktionen und Typen ab. 