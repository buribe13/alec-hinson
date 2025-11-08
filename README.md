# pyrex vision. - Blog Recreation

A recreation of Virgil Abloh's 2012 blog era site, built with Next.js and Sanity CMS.

## Features

- Minimalist black and white design
- Typography:
  - **Title**: Georgia Pro Italic
  - **Body/Navigation**: Inter
  - **Dates & Captions**: Times New Roman
- Sanity CMS integration for content management
- Responsive design

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up Sanity:
   - Create a new Sanity project at [sanity.io](https://sanity.io)
   - Copy your project ID and dataset name
   - Create a `.env.local` file based on `.env.local.example`:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Sanity Studio

Sanity Studio is integrated into your Next.js app. Once you've set up your environment variables:

1. Run the development server:
```bash
npm run dev
```

2. Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) to access the Sanity Studio and manage your content.

## Project Structure

- `/app` - Next.js app directory (pages and layout)
- `/components` - React components
- `/sanity` - Sanity configuration and schemas
- `/sanity/schemas` - Content schemas (post schema)

## Content Schema

The blog uses a simple post schema with:
- Date (datetime)
- Image (with alt text)
- Caption (string)
