# Gemini Component Instructions

This file provides instructions for creating and modifying React components in this project.

## Component Structure

- All components should be functional components written in TypeScript.
- Each component should be in its own file, located in the `src/components/` directory.
- Component file names should be in PascalCase (e.g., `MyComponent.tsx`).

## Props

- Define component props using a TypeScript `interface` named `Props`.
- Example:
  ```typescript
  interface Props {
    title: string;
    isVisble: boolean;
  }

  const MyComponent = ({ title, isVisble }: Props) => {
    // ...
  };
  ```

## Styling

- Use Tailwind CSS for styling components.
- If a component requires complex or isolated styles, use CSS Modules by creating a `[ComponentName].module.css` file.

## Animations

- This project uses `framer-motion` for animations.
- When creating new animations, use `framer-motion` and follow the patterns in existing animated components like `AnimatedSection.tsx`.
