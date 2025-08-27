# Simple Auth System (Next.js + React)

A minimal authentication and user CRUD frontend built with **Next.js** and **React**, consuming an ASP.NET Core API. It uses **JWT** for authentication, **Axios** for HTTP, and basic **SOLID-inspired** separation (services, hooks, UI). Includes simple client-side **validation** and protected routes.

> Backend API (consumer):
> https://github.com/Andersoncrs5/SignInApi-AspCore-


## Features

- **JWT-based Auth**: login, logout, token storage, auth-guarded pages
- **User CRUD**: fetch profile, update, delete
- **Validation**: basic client-side field checks
- **SOLID-ish structure**: UI (components) ↔ hooks (logic) ↔ services (API)
- **Next.js + React** UI, **Axios** for requests, **Redux Toolkit** for state


## Tech Stack

- **Next.js** (App Router)
- **React**
- **Redux Toolkit** (optional: redux-persist)
- **Axios**
- **Tailwind CSS** (if enabled)
- **TypeScript**
