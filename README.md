# Kairo - Simple React Boilerplate

A minimal, clean React boilerplate with basic navigation and routing. This project provides a simple foundation for building React applications.

## Features

- ⚛️ **React 18** - Latest React features and hooks
- 🎨 **Tailwind CSS 3** - Utility-first CSS framework
- 🚀 **Vite** - Fast build tool and dev server
- 📱 **React Router** - Simple navigation between pages
- 🔧 **ESLint** - Code quality

## Pages

- **Home** - Embedded directly in the main app
- **Ventures** - Simple page with basic content
- **Team** - Simple page with basic content

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/kairo.git
cd kairo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Build and deploy to GitHub

## Deployment

### GitHub Pages

This project is configured for GitHub Pages deployment. The `deploy` script will:

1. Build the project
2. Stage all changes
3. Commit with "deploy" message
4. Push to the repository

To deploy:

```bash
npm run deploy
```

### Custom Domain

To use a custom domain:

1. Add your domain to the `CNAME` file in the `docs` folder
2. Configure your domain's DNS settings to point to GitHub Pages
3. Update the `vite.config.js` base path if needed

## Project Structure

```
kairo/
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navbar.jsx     # Navigation component
│   │   ├── Footer.jsx     # Footer component
│   │   └── HomeContent.jsx # Home page content
│   ├── pages/             # Page components
│   │   ├── Ventures.jsx   # Ventures page
│   │   └── Team.jsx       # Team page
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── public/                 # Static assets
├── docs/                  # Build output (GitHub Pages)
└── configuration files
```

## Customization

### Content

- Update page content in the respective component files
- Modify navigation items in `src/components/Navbar.jsx`
- Update company information in `src/components/Footer.jsx`

### Styling

- Basic Tailwind CSS utilities are available
- Custom CSS can be added to `src/index.css`

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - CSS framework
- **React Router** - Client-side routing
- **ESLint** - Code linting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please open an issue on GitHub or contact the development team.
