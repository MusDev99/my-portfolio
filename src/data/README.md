# Portfolio Data Structure

This directory contains all the JSON data files for the portfolio components, making it easy to update content without modifying component code.

## File Structure

```
src/
├── data/
│   ├── about.json          # About section data (skills, stats, social links)
│   ├── certifications.json # Certifications data
│   ├── contact.json        # Contact section data (form, social links, location)
│   ├── education.json      # Education data
│   ├── experience.json     # Work experience data
│   ├── projects.json       # Projects data
│   └── skills.json         # Skills data
├── types/
│   └── portfolio.ts        # TypeScript interfaces for all data types
└── components/
    ├── About.tsx
    ├── Certifications.tsx
    ├── Contact.tsx
    ├── Education.tsx
    ├── Experience.tsx
    ├── Projects.tsx
    └── Skills.tsx
```

## Data Files

### about.json
Contains data for the About section:
- `skills`: Array of skill objects with icon, title, and description
- `stats`: Array of statistics with value and label
- `socialLinks`: Array of social media links with icon, href, and color

### contact.json
Contact section data with:
- `socialLinks`: Array of social media links with icon, name, url, and color
- `location`: Location information with title and address
- `form`: Contact form configuration with title, field labels/placeholders, and submit button text
- `description`: Description text for the contact section

### certifications.json
Array of certification objects with:
- `name`: Certification name
- `issuer`: Issuing organization
- `date`: Date obtained
- `credentialId`: Optional credential ID
- `link`: Optional verification link

### education.json
Single education object with:
- `institution`: School/university name
- `degree`: Degree type
- `field`: Field of study
- `duration`: Time period
- `grade`: Optional GPA/grade
- `achievements`: Optional array of achievements

### experience.json
Array of work experience objects with:
- `company`: Company name
- `position`: Job title
- `duration`: Employment period
- `location`: Work location
- `type`: Employment type (Full-time, Contract, etc.)
- `responsibilities`: Array of job responsibilities
- `keyProjects`: Optional array of key projects
- `skills`: Array of skills used
- `gradient`: Tailwind gradient class for styling

### projects.json
Array of project objects with:
- `title`: Project name
- `description`: Project description
- `technologies`: Array of technologies used
- `projectLink`: Optional live demo link
- `githubLink`: Optional GitHub repository link
- `imageUrl`: Optional project image URL
- `gradient`: Tailwind gradient class for styling
- `featured`: Boolean for featured projects

### skills.json
Array of skill objects with:
- `name`: Skill name
- `iconName`: React icon component name
- `color`: Tailwind gradient class for styling

## TypeScript Interfaces

All data types are defined in `src/types/portfolio.ts` with proper TypeScript interfaces for type safety.

## Benefits

1. **Easy Content Updates**: Modify JSON files instead of component code
2. **Type Safety**: TypeScript interfaces ensure data consistency
3. **Maintainability**: Clear separation of data and presentation logic
4. **Reusability**: Data can be easily imported and used in other components
5. **Version Control**: Changes to content are clearly visible in git diffs

## Usage

Components import data using:
```typescript
import dataName from '@/data/filename.json'
```

Icons are mapped using icon mapping objects to convert string names to React components.
