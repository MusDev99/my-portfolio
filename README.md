# Modern Software Engineer Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This portfolio showcases professional experience, skills, and projects with smooth animations and a beautiful dark theme.

## 🚀 Features

### Core Features
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Theme**: Modern dark theme with gradient accents
- **Smooth Animations**: Interactive animations using Framer Motion
- **SEO Optimized**: Built with Next.js for optimal SEO performance
- **TypeScript**: Type-safe code for better development experience

### Sections
1. **Hero Section**
   - Animated profile introduction
   - Professional photo with gradient effects
   - Call-to-action buttons

2. **About Section**
   - Professional summary
   - Animated content reveal
   - Clean, modern layout

3. **Experience Section**
   - Timeline-based work history
   - Staggered animations for each experience
   - Skills tags with hover effects

4. **Education Section**
   - Academic background
   - Achievements and grades
   - Smooth reveal animations

5. **Certifications Section**
   - Grid layout for certifications
   - Interactive cards with hover effects
   - Direct links to verify credentials

6. **Projects Section**
   - Project showcase with descriptions
   - Technology stack tags
   - Live demo and GitHub links

7. **Skills Section**
   - Categorized skills display
   - Progress indicators
   - Animated skill bars

8. **Contact Section**
   - Interactive contact form
   - Social media links
   - Location information

## 🛠️ Technologies Used

### Core Technologies
- **Next.js 14**: React framework for production
- **TypeScript**: For type-safe code
- **Tailwind CSS**: For styling
- **Framer Motion**: For animations

### Key Libraries
- `framer-motion`: Smooth animations and transitions
- `react-icons`: Icon library for social links and UI elements
- `@heroicons/react`: Additional UI icons

### Development Tools
- ESLint: Code linting
- Prettier: Code formatting
- TypeScript: Type checking

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Install dependencies:
   ```bash
   cd portfolio
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information
- Update personal details in respective component files
- Add your own projects in the Projects component
- Modify the skills list in the Skills component

### Styling
- Customize colors in `tailwind.config.ts`
- Modify animations in component files
- Update layout in respective section components

### Images
- Replace profile photo in `public/images/`
- Add project screenshots in `public/projects/`

## 🎨 Design Features

### Animations
- Scroll-triggered animations
- Hover effects on interactive elements
- Staggered reveals for lists and grids
- Smooth transitions between sections

### UI Components
- Gradient text effects
- Card-based layouts
- Interactive buttons
- Responsive navigation

### Performance
- Optimized images with Next.js Image
- Lazy loading for better performance
- Smooth scrolling behavior
- Efficient animations

## 📱 Responsive Design
- Mobile-first approach
- Breakpoints for all device sizes
- Optimized layouts for different screens
- Touch-friendly interactions

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_EMAIL_SERVICE=your_email_service
NEXT_PUBLIC_EMAIL_TEMPLATE=your_template_id
```

### Tailwind Configuration
Customize in `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
      accent: '#your-color',
    }
  }
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For any questions or suggestions, please reach out through:
- GitHub Issues
- LinkedIn: [Your LinkedIn Profile]
- Email: [Your Email]
