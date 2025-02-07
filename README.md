This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


//////////////////////////////////////////////////////////////////////////////


Integrating Sanity with Next.js
This guide walks you through integrating Sanity into an existing Next.js project. You will learn to configure environment variables, set up a Sanity schema, and import data from an external API.

Table of Contents
Prerequisites
Setting Up Environment Variables
Installing Necessary Packages
Adding a Script to package.json
Running the Import Script
Conclusion
Prerequisites
A Next.js project already set up.
Sanity installed in the project. If not, refer to Sanity's official documentation for installation.
Setting Up Environment Variables
Create a .env.local file in the root directory of your Next.js project if it doesn't already exist.
Add the following environment variables:
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_token
Note: Variables prefixed with NEXT_PUBLIC_ will be exposed to the browser. Be cautious when sharing sensitive information.

Installing Necessary Packages
Run the following command to install the required packages:

npm install @sanity/client axios dotenv
Adding a Script to package.json
To enable running the import script, update the package.json file by adding the following entry to the scripts section:

"scripts": {
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "import-data": "node scripts/importSanityData.mjs"
}
Running the Import Script
After completing the setup, run the import script with the following command:

npm run import-data
This script will import data into your Sanity project from an external API.

Conclusion
By following this guide, you have:

Configured environment variables for Sanity integration.
Retrieved your Sanity Project ID and API token.
Created a custom schema for your Sanity content.
Imported data from an external API into your Sanity content lake.
Security Note
Keep your .env.local file secure. Do not commit it to your repository.
For production, set the environment variables directly on your hosting platform.
Benefits
This setup enables seamless integration of Sanity's content management capabilities with your Next.js project, offering a scalable and flexible solution for dynamic content management and data import.