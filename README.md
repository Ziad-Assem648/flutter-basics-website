# Flutter Basics - Complete Widget Guide

تعليم شامل لأدوات فلاتر مع أمثلة عملية وشرح مفصل / Complete Flutter widgets education with practical examples and detailed explanations.

## Features / الميزات

### 🎨 Design
- Beautiful gradient color palette (Cyan, Teal, Emerald)
- Smooth animations and transitions
- Modern UI with glassmorphism effects
- Professional typography

### 🌍 Multilingual Support
- Full English and Arabic support
- RTL (Right-to-Left) for Arabic
- Seamless language switching
- Translated descriptions and tips

### 🌙 Dark & Light Modes
- Beautiful light theme with vibrant colors
- Dark theme optimized for comfortable reading
- Smooth theme transitions
- Persistent theme preference

### 📚 Comprehensive Widget Library
Over 30+ Flutter widgets with:
- Detailed descriptions
- Properties documentation
- Real code examples
- Usage tips and best practices
- Icon representation

### 🔍 Search & Filter
- Real-time widget search
- Filter by widget category
- Quick navigation
- Result counter

### ✨ Interactive Features
- Smooth animations on all interactions
- Copy code to clipboard
- Syntax-highlighted code blocks
- Hover effects and transitions
- Mobile-responsive design

## Widgets Covered

### Basic Widgets
- Text
- Icon
- Image

### Layout Widgets
- Column
- Row
- Container
- Stack
- Center
- Align
- Padding
- SizedBox
- AspectRatio
- Expanded

### Scrolling Widgets
- ListView
- GridView

### Interactive Widgets
- ElevatedButton
- FloatingActionButton
- GestureDetector
- InkWell
- Switch
- Checkbox
- Radio
- Slider
- DropdownButton

### Input Widgets
- TextField

### Navigation Widgets
- Scaffold
- AppBar
- Drawer
- Navigator
- BottomNavigationBar

### Animation Widgets
- AnimatedBuilder
- Tween Animation
- Opacity
- Transform

### Material Design Widgets
- Card

## Technology Stack

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Icons**: Lucide React
- **UI Components**: shadcn/ui

## Installation & Usage

### Clone and Install
\`\`\`bash
git clone <repo-url>
cd flutter-basics-website
npm install
\`\`\`

### Development Server
\`\`\`bash
npm run dev
\`\`\`

Visit `http://localhost:3000` to see the application.

### Production Build
\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout
│   ├── ClientLayout.tsx    # Client-side layout wrapper
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── header.tsx          # Header with theme/language toggle
│   ├── sidebar.tsx         # Widget navigation sidebar
│   ├── widget-card.tsx     # Widget detail display
│   ├── search-bar.tsx      # Search functionality
│   ├── category-filter.tsx # Category filtering
│   └── code-block.tsx      # Code snippet display
├── lib/
│   ├── flutter-data.ts     # Widget database
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
\`\`\`

## Features Breakdown

### 1. Widget Documentation
Each widget includes:
- Icon and name
- Widget type classification
- Detailed description (EN/AR)
- Properties with types and explanations
- Real Dart code examples
- Usage tips and best practices

### 2. Search System
- Real-time filtering
- Search by name or description
- Works in both languages
- Result counter

### 3. Category System
- Filter by widget type
- Shows count per category
- All Widgets view
- Visual category badges

### 4. Responsive Design
- Mobile-first approach
- Sidebar collapses on mobile
- Touch-friendly interface
- Adapts to all screen sizes

### 5. Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- High contrast support
- RTL support for Arabic

## Customization

### Add New Widget
Edit `/lib/flutter-data.ts`:
\`\`\`typescript
{
  id: "new-widget",
  name: "WidgetName",
  icon: "🎨",
  type: "Category",
  description: {
    en: "English description",
    ar: "الوصف العربي"
  },
  properties: [
    // Add properties
  ],
  code: "// Dart code example",
  tips: {
    en: ["Tip 1", "Tip 2"],
    ar: ["نصيحة 1", "نصيحة 2"]
  }
}
\`\`\`

### Change Color Scheme
Edit `/app/globals.css` and modify the CSS variables in `:root` and `.dark`

### Add New Language
Update components with new language locale and add translations

## Performance Optimizations

- Server-side rendering for better SEO
- Client-side caching with localStorage
- Optimized images and icons
- Efficient re-renders with React hooks
- Lazy loading for large lists
- CSS animations instead of JS where possible

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Author

Created with ❤️ for Flutter developers

---

**Happy Learning! 🚀**

For more information about Flutter, visit [flutter.dev](https://flutter.dev)
\`\`\`

الآن سأقوم بإضافة ملف package.json محدث للتأكد من أن كل الـ dependencies موجودة:

```json file="" isHidden
