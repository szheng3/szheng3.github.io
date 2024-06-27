# Resume

This project is a modern, responsive resume/portfolio website built with Angular. It showcases your professional experience, skills, and projects in an interactive and visually appealing manner.

## Features

- Single Page Application (SPA) architecture
- Server-Side Rendering (SSR) for improved SEO and initial load performance
- Responsive design using Angular Material and Nebular
- Lazy-loaded images for faster page loads
- PDF viewer integration
- JSON-LD support for enhanced SEO
- Moment.js integration for date handling
- Cookie management with ngx-cookie-service
- Loading indicators with ngx-loading

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.15.0 or later)
- npm (comes with Node.js)
- Angular CLI (v15.2.1)

## Installation

1. Clone the repository:
2. Install dependencies:
   ```bash
   yarn
   ```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

For a production build, use:


## Server-Side Rendering (SSR)

To build and serve the application with SSR:

1. Build the SSR version:
    ```bash
    yarn build:ssr
    ```
2. Serve the SSR version:
    ```bash
    yarn dev:ssr
    ```



## Prerendering

To prerender the application:

1. For production prerendering:
    ```bash 
   yarn prerender:prod
    ```
