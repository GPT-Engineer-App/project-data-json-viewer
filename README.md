# project-data-json-viewer

Implement a web app with the following:

1. A file input that allows uploading a JSON file 
2. After file upload, parse the JSON and extract the unique project IDs from the "data" object
3. Render a select dropdown populated with the extracted project IDs
4. When a project is selected, filter the edits to only those belonging to the selected project (based on the edit ID path)
5. Sort the filtered edits by the "created_at.__time__" timestamp in descending order
6. Display the sorted edits in a list, showing:
   - created_at formatted date
   - created_by 
   - status
   - content.output (if defined) with code blocks and newlines rendered properly

Use Shadcn UI components where suitable. Let me know if you need any clarification or have additional questions!

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with REPLACE_WITH_TECH_STACK_SUMMARY.

REPLACE_WITH_TECH_STACK_POINTS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/project-data-json-viewer.git
cd project-data-json-viewer
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
