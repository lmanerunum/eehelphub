# Experience Editor Help Hub

Experience Editor Help Hub is a lightweight, single-page help application for Sitecore content editors and managers. It provides searchable, categorized guidance for common Experience Editor, Content Editor, media, component, publishing, and packaging tasks.

## What the app does

The app presents help content in a simple two-pane interface:

- A left navigation menu for browsing help topics by category
- A main content area that displays step-by-step instructions
- A search field for finding tasks across all categories
- Expandable instruction cards for task details
- Component-specific submenu sections for Careers site guidance
- Mobile navigation support using a hamburger menu

## Main help areas

### Editor Functions

The editor-focused sections include instructions for day-to-day content work, such as:

- Opening pages in Experience Editor
- Editing text and rich text fields
- Formatting content
- Adding, fixing, and removing links
- Previewing pages before publishing
- Creating and deleting pages
- Updating, uploading, inserting, and removing images
- Editing image properties such as alt text
- Adding, moving, removing, and configuring components
- Editing component datasources and options

### Careers Site Components

The Careers Site Components section provides component-specific guidance for Careers pages. It includes grouped instructions for:

- Job Categories pages
- Locations pages
- Why Unum components
- Roles components
- Testimonials components
- News widgets
- Video components
- Award callout components
- Job postings components
- Intro, local resources, local community, local news, and campus video components

When selecting the main Careers Site Components item, the app displays an overview page explaining the available component groups. Selecting a specific component shows detailed task instructions for that component.

### Manager Functions

The manager-focused sections include guidance for:

- Publishing items from Experience Editor or Content Editor
- Restricting or unpublishing items
- Creating Sitecore packages
- Exporting and downloading packages
- Installing packages
- Viewing package files

## Search behavior

The search box scans both general help topics and Careers component-specific topics. Matching results are displayed in the main content area and automatically expanded so users can quickly find the relevant instruction text.

## Responsive behavior

The app includes mobile-friendly navigation. On smaller screens, the sidebar becomes a slide-out menu controlled by a hamburger button. This allows the help content to remain readable while still keeping the full navigation available.

## Technology

This project is built as a standalone static HTML application using:

- HTML
- CSS
- Vanilla JavaScript

No build step, framework, package manager, or backend service is required.

## Running locally

Open `index.html` directly in a web browser.

Because the app is static, it can also be hosted from any static web server or static hosting platform.

## Intended users

This tool is intended for Sitecore content editors, content managers, and administrators who need quick, task-based instructions while working in Sitecore Experience Editor and Content Editor.
