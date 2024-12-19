#!/bin/bash

# Create a new Next.js project with TypeScript and Tailwind CSS
npx create-next-app@latest school-website \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

# Navigate to the project directory
cd school-website

# Install additional dependencies
npm install @next/font

# Create project structure
mkdir -p app/components
mkdir -p app/{courses,about,contact}

# Optional: Initialize git repository
git init
git add .
git commit -m "Initial commit: Syrian Modern School website setup"

echo "Next.js Syrian School Website project setup complete!"
