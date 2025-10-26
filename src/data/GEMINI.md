# Gemini Data Instructions

This file provides instructions for working with the JSON data files in this project.

## Data Structure

The JSON files in this directory provide the data for the portfolio sections. Each file contains an array of objects.

### `projects.json`

The `projects.json` file contains an array of project objects, each with the following structure:

```json
{
  "title": "string",
  "description": "string",
  "technologies": ["string"],
  "projectLink": "string",
  "gradient": "string",
  "featured": "boolean"
}
```

- `title`: The title of the project.
- `description`: A brief description of the project.
- `technologies`: An array of strings listing the technologies used in the project.
- `projectLink`: A URL to the live project or its repository.
- `gradient`: A string representing a Tailwind CSS gradient class.
- `featured`: A boolean indicating if the project should be featured.

### Other Data Files

The other JSON files in this directory (`about.json`, `certifications.json`, etc.) follow a similar structure. When working with these files, please maintain the existing data structure.
