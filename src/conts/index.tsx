import {
  Layout,
  Move,
  Box,
  Layers,
  Grid,
  Palette,
  Zap,
  RotateCcw,
  Maximize,
} from "lucide-react";

export const brainstormingQuestion = [
  {
    category: "Architecture",
    question:
      "How do you approach scalable CSS architecture in large applications?",
    answer: `
          <p>
            I start by creating simple and clear class names using methods like <strong>BEM</strong> or <strong>OOCSS</strong>. This makes the code easier to understand and maintain.<br/>
            Then, I build styles for each component separately, like buttons, cards, or headers, so their styles don't affect other parts of the app.<br/>
            I use <strong>CSS Modules</strong> or <strong>CSS-in-JS</strong> to keep styles limited to the right components. I also create <strong>design tokens</strong> for things like colors, fonts, and spacing to keep everything consistent.<br/>
            To help the team, I make a <strong>style guide</strong> and follow <strong>Atomic Design</strong> to break the UI into small reusable parts. <br/>
            Finally, I clean up the CSS regularly and help other developers understand and follow the same approach.
          </p>
        `,
    color: "from-emerald-500 to-teal-500",
  },
  {
    category: "Architecture",
    question:
      "How do you decide between CSS-in-JS and traditional CSS approaches?",
    answer: `
          <p>
            I consider the project's complexity, team expertise, and performance requirements. <strong>CSS-in-JS</strong> is great for component-heavy applications where you need dynamic styling and scoped styles.<br/>
            Traditional CSS works better for simpler projects or when you need maximum performance and smaller bundle sizes.<br/>
            I also look at the team's JavaScript proficiency and whether they're comfortable with runtime styling decisions.<br/>
            For hybrid approaches, I sometimes use <strong>CSS custom properties</strong> with traditional CSS to get the best of both worlds.
          </p>
        `,
    color: "from-emerald-600 to-teal-600",
  },
  {
    category: "Performance",
    question:
      "What's your strategy for optimizing CSS performance in production?",
    answer: `
          <p>
            I make sure to load only the CSS we need by using <strong>critical CSS extraction</strong> and removing unused styles with purging tools.<br/>
            I optimize how styles load so they don't block the page from showing, and I use browser caching to make the site load faster on repeat visits.<br/>
            I also keep my selectors simple to improve performance and use <strong>lazy loading</strong> for styles that are not needed right away.<br/>
            These steps help the website load faster and work smoothly for users.
          </p>
        `,
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Performance",
    question: "How do you handle CSS specificity to maintain performance?",
    answer: `
          <p>
            I keep specificity low by using <strong>single class selectors</strong> whenever possible and avoiding deeply nested selectors.<br/>
            I use <strong>CSS custom properties</strong> for theming instead of overriding with high-specificity selectors.<br/>
            When I need to override styles, I try to add a class rather than using !important, and I document any necessary specificity decisions.<br/>
            I also use tools like <strong>specificity calculators</strong> to monitor and optimize selector weight across the project.
          </p>
        `,
    color: "from-blue-600 to-cyan-600",
  },
  {
    category: "Problem Solving",
    question: "How do you handle CSS conflicts in a multi-team environment?",
    answer: `
          <p>
            I avoid CSS conflicts by using <strong>namespacing</strong> and keeping styles isolated with tools like <strong>CSS-in-JS</strong> or <strong>Shadow DOM</strong>.<br/>
            I make sure each team knows which parts of the CSS they own and use tools like <strong>PostCSS</strong> to catch possible problems early.<br/>
            Regular <strong>code reviews</strong> and <strong>style audits</strong> also help prevent conflicts and keep the code clean.
          </p>
        `,
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Problem Solving",
    question: "How do you debug complex CSS layout issues?",
    answer: `
          <p>
            I start by using browser <strong>DevTools</strong> to inspect the box model, computed styles, and layout properties.<br/>
            I temporarily add bright background colors to understand element boundaries and use <strong>CSS Grid Inspector</strong> or <strong>Flexbox tools</strong> in DevTools.<br/>
            I also create <strong>minimal reproductions</strong> of the issue to isolate the problem and test solutions.<br/>
            When debugging responsive issues, I use the device simulator and test on actual devices to ensure the fix works across all viewports.
          </p>
        `,
    color: "from-purple-600 to-pink-600",
  },
  {
    category: "Modern CSS",
    question: "When would you choose CSS Grid over Flexbox, and vice versa?",
    answer: `
          <p>
            I use <strong>CSS Grid</strong> when I need to arrange items in both rows and columns for more complex layouts.<br/>
            I prefer <strong>Flexbox</strong> when I'm aligning items in a single row or column, like in buttons, navbars, or small card layouts.<br/>
            In most real-world projects, I combine both Grid and Flexbox to build flexible and easy-to-maintain layouts.
          </p>
        `,
    color: "from-orange-500 to-red-500",
  },
  {
    category: "Modern CSS",
    question: "How do you leverage CSS custom properties effectively?",
    answer: `
          <p>
            I use <strong>CSS custom properties</strong> for theming, creating design tokens that can be easily updated across the entire application.<br/>
            I create <strong>component-level variables</strong> for things like spacing, colors, and sizes that might vary between instances.<br/>
            I also use them for <strong>responsive design</strong> by changing values at different breakpoints, and for <strong>animation</strong> by updating values with JavaScript.<br/>
            They're particularly powerful for creating <strong>dark mode</strong> implementations and maintaining consistent spacing systems.
          </p>
        `,
    color: "from-orange-600 to-red-600",
  },
  {
    category: "Strategy",
    question: "How do you evaluate and adopt new CSS features in production?",
    answer: `
          <p>
            I first check browser support using <strong>caniuse.com</strong> to make sure the feature works on our users' browsers.<br/>
            I use <strong>progressive enhancement</strong> to add new features in a way that doesn't break the experience for older browsers.<br/>
            I test new features across different browsers and sometimes use <strong>PostCSS plugins</strong> to add fallbacks.<br/>
            I also consider how easy it is for the team to learn and maintain these new features over time.
          </p>
        `,
    color: "from-indigo-500 to-blue-500",
  },
  {
    category: "Strategy",
    question:
      "How do you balance consistency with creative freedom in design systems?",
    answer: `
          <p>
            I create a <strong>flexible foundation</strong> with core tokens for spacing, typography, and colors that must be followed consistently.<br/>
            I provide <strong>composition patterns</strong> and utility classes that allow creative combinations while maintaining system integrity.<br/>
            I also establish <strong>escape hatches</strong> for exceptional cases, but require design review for deviations from the system.<br/>
            Regular <strong>design system audits</strong> help identify patterns that should be formalized and added to the system.
          </p>
        `,
    color: "from-indigo-600 to-blue-600",
  },
  {
    category: "Accessibility",
    question: "How do you ensure your CSS is accessible to all users?",
    answer: `
          <p>
            I make sure to use <strong>semantic HTML</strong> first and let CSS style the page without breaking accessibility.<br/>
            I avoid using color alone to show important information and make sure there is enough contrast between text and background.<br/>
            I also test the site with <strong>screen readers</strong> and keyboard navigation, and I respect user settings like <strong>prefers-reduced-motion</strong> for people sensitive to animations.
          </p>
        `,
    color: "from-lime-500 to-green-500",
  },
  {
    category: "Accessibility",
    question:
      "How do you handle focus management and keyboard navigation in CSS?",
    answer: `
          <p>
            I ensure all interactive elements have clear <strong>focus indicators</strong> that meet WCAG contrast requirements.<br/>
            I use <strong>:focus-visible</strong> to show focus rings only when navigating with keyboard, not when clicking with a mouse.<br/>
            I create <strong>skip links</strong> for keyboard users and ensure proper tab order with logical CSS layout.<br/>
            I also test with <strong>screen readers</strong> and keyboard-only navigation to ensure the experience is smooth and predictable.
          </p>
        `,
    color: "from-lime-600 to-green-600",
  },
  {
    category: "Maintainability",
    question: "What practices help you keep CSS maintainable in the long run?",
    answer: `
          <p>
            I break styles into <strong>small, reusable components</strong> and use clear naming so it's easy to know what each style does.<br/>
            I document design choices and keep removing unused styles to keep the codebase clean.<br/>
            I also add automated tools like <strong>Stylelint</strong> to catch mistakes early and do regular <strong>code reviews</strong> to keep the CSS clear and easy to update.
          </p>
        `,
    color: "from-yellow-500 to-amber-500",
  },
  {
    category: "Maintainability",
    question:
      "How do you refactor legacy CSS without breaking existing functionality?",
    answer: `
          <p>
            I start by creating a <strong>comprehensive audit</strong> of existing styles and identifying unused or redundant code.<br/>
            I implement changes <strong>incrementally</strong>, focusing on one component or section at a time with thorough testing.<br/>
            I use <strong>visual regression testing</strong> tools to catch unintended changes and maintain a <strong>style guide</strong> during the refactoring process.<br/>
            I also create <strong>migration guides</strong> for the team and ensure backward compatibility during transition periods.
          </p>
        `,
    color: "from-yellow-600 to-amber-600",
  },
  {
    category: "Tools",
    question: "What tools do you use to streamline your CSS workflow?",
    answer: `
          <p>
            I use tools like <strong>PostCSS</strong> and <strong>Autoprefixer</strong> to make the code work across different browsers.<br/>
            I work with <strong>Tailwind CSS</strong> for fast styling or <strong>Sass</strong> when I need more structure.<br/>
            I also use <strong>Vite</strong> or <strong>Webpack</strong> to bundle and optimize the CSS and <strong>Stylelint</strong> to keep the code clean.
          </p>
        `,
    color: "from-fuchsia-500 to-rose-500",
  },
  {
    category: "Tools",
    question: "How do you set up effective CSS linting and formatting?",
    answer: `
          <p>
            I configure <strong>Stylelint</strong> with rules that match our team's coding standards and integrate it with our IDE and CI/CD pipeline.<br/>
            I use <strong>Prettier</strong> for consistent formatting and set up <strong>pre-commit hooks</strong> to catch issues before they reach the repository.<br/>
            I also create <strong>custom rules</strong> for design system compliance and use <strong>editor extensions</strong> to provide real-time feedback to developers.<br/>
            Regular <strong>rule reviews</strong> help ensure the linting setup evolves with the project's needs.
          </p>
        `,
    color: "from-fuchsia-600 to-rose-600",
  },
  {
    category: "Collaboration",
    question: "How do you manage consistent styles across multiple teams?",
    answer: `
          <p>
            I create a <strong>shared design system</strong> and a <strong>component library</strong> so all teams use the same styles and components.<br/>
            I document <strong>design tokens</strong> (like colors, spacing, and fonts) and write clear contribution guidelines.<br/>
            Regular team meetings and automatic style checks during the CI/CD process help keep everything consistent and aligned.
          </p>
        `,
    color: "from-cyan-500 to-sky-500",
  },
  {
    category: "Collaboration",
    question:
      "How do you bridge the gap between designers and developers in CSS implementation?",
    answer: `
          <p>
            I work closely with designers to understand the <strong>design intent</strong> and establish clear handoff processes with detailed specifications.<br/>
            I create <strong>living style guides</strong> that show both design and code implementation side by side.<br/>
            I also implement <strong>design tokens</strong> that directly translate design decisions into code, and use tools like <strong>Figma to CSS</strong> plugins when appropriate.<br/>
            Regular <strong>design-dev sync meetings</strong> help address inconsistencies and ensure the final product matches the intended design.
          </p>
        `,
    color: "from-cyan-600 to-sky-600",
  },
  {
    category: "Responsive Design",
    question: "What's your approach to building responsive layouts?",
    answer: `
          <p>
            I follow a <strong>mobile-first</strong> approach, starting with small screens and scaling up for larger ones.<br/>
            I use flexible units like <strong>%</strong>, <strong>rem</strong>, and <strong>vw</strong> to make sure layouts adapt to different screen sizes.<br/>
            I apply <strong>media queries</strong> and use <strong>CSS Grid</strong> or <strong>Flexbox</strong> to adjust the layout. I always test on real devices to make sure everything looks and works as expected.
          </p>
        `,
    color: "from-teal-500 to-green-400",
  },
  {
    category: "Responsive Design",
    question: "How do you handle responsive typography and spacing?",
    answer: `
          <p>
            I use <strong>fluid typography</strong> with CSS functions like <strong>clamp()</strong> to create smooth scaling between breakpoints.<br/>
            I establish a <strong>modular scale</strong> for typography and use <strong>rem</strong> units for consistent spacing across different screen sizes.<br/>
            I implement <strong>container queries</strong> when appropriate for component-based responsive design.<br/>
            I also use <strong>CSS custom properties</strong> to create responsive spacing systems that adapt to the viewport.
          </p>
        `,
    color: "from-teal-600 to-green-500",
  },
  {
    category: "Advanced Techniques",
    question:
      "How do you implement complex animations while maintaining performance?",
    answer: `
          <p>
            I use <strong>CSS transforms</strong> and <strong>opacity</strong> for animations since they can be hardware-accelerated and don't trigger layout or paint.<br/>
            I implement <strong>will-change</strong> property carefully to optimize performance and respect <strong>prefers-reduced-motion</strong> for accessibility.<br/>
            I also use <strong>intersection observers</strong> to trigger animations only when elements are visible, and <strong>animation delays</strong> to create smooth orchestrated effects.<br/>
            For complex animations, I sometimes use <strong>CSS custom properties</strong> with JavaScript to create dynamic, performant animations.
          </p>
        `,
    color: "from-violet-500 to-indigo-500",
  },
  {
    category: "Advanced Techniques",
    question: "How do you create reusable component variants with CSS?",
    answer: `
          <p>
            I use <strong>CSS custom properties</strong> as component APIs to create flexible variants without writing multiple CSS classes.<br/>
            I implement <strong>modifier classes</strong> following BEM methodology for different component states and variations.<br/>
            I also use <strong>CSS logical properties</strong> to create components that work well in different writing modes and directions.<br/>
            For complex variants, I sometimes use <strong>CSS Grid</strong> or <strong>Flexbox</strong> with custom properties to create highly flexible layouts.
          </p>
        `,
    color: "from-violet-600 to-indigo-600",
  },
  {
    category: "Testing",
    question: "How do you test your CSS across different browsers and devices?",
    answer: `
          <p>
            I use <strong>browser DevTools</strong> device simulation as a starting point, but always test on <strong>real devices</strong> for accurate results.<br/>
            I implement <strong>visual regression testing</strong> with tools like Percy or Chromatic to catch unintended changes automatically.<br/>
            I also use <strong>cross-browser testing services</strong> like BrowserStack for comprehensive compatibility testing.<br/>
            I create <strong>test cases</strong> for critical user flows and maintain a <strong>device testing matrix</strong> based on our user analytics.
          </p>
        `,
    color: "from-rose-500 to-pink-500",
  },
  {
    category: "Testing",
    question:
      "How do you ensure CSS consistency across development environments?",
    answer: `
          <p>
            I use <strong>Docker</strong> or similar containerization to ensure consistent development environments across the team.<br/>
            I implement <strong>CSS snapshots</strong> and <strong>visual regression tests</strong> in our CI/CD pipeline to catch inconsistencies early.<br/>
            I also maintain <strong>browser compatibility matrices</strong> and use <strong>feature detection</strong> rather than browser detection.<br/>
            Regular <strong>cross-team reviews</strong> and <strong>style audits</strong> help identify and resolve environment-specific issues.
          </p>
        `,
    color: "from-rose-600 to-pink-600",
  },
];
export const cssTopics = [
  {
    id: "display",
    title: "Display",
    description: "Block, inline, flex, grid properties",
    icon: <Layout className="w-8 h-8" />,
    color: "from-blue-500 to-blue-700",
    bgPattern: "bg-gradient-to-br",
  },
  {
    id: "position",
    title: "Position",
    description: "Static, relative, absolute, fixed",
    icon: <Move className="w-8 h-8" />,
    color: "from-purple-500 to-purple-700",
    bgPattern: "bg-gradient-to-br",
  },
  {
    id: "overflow",
    title: "Overflow",
    description: "Hidden, scroll, auto, visible",
    icon: <Box className="w-8 h-8" />,
    color: "from-green-500 to-green-700",
    bgPattern: "bg-gradient-to-br",
  },
  {
    id: "flexbox",
    title: "Flexbox",
    description: "Flexible layout system",
    icon: <Layers className="w-8 h-8" />,
    color: "from-red-500 to-red-700",
    bgPattern: "bg-gradient-to-br",
  },
  {
    id: "grid",
    title: "Grid",
    description: "Two-dimensional layout",
    icon: <Grid className="w-8 h-8" />,
    color: "from-yellow-500 to-yellow-700",
    bgPattern: "bg-gradient-to-br",
  },
  {
    id: "colors",
    title: "Colors",
    description: "RGB, HSL, hex, gradients",
    icon: <Palette className="w-8 h-8" />,
    color: "from-pink-500 to-pink-700",
    bgPattern: "bg-gradient-to-br",
  },
  {
    id: "animations",
    title: "Animations",
    description: "Keyframes, transitions, transforms",
    icon: <Zap className="w-8 h-8" />,
    color: "from-indigo-500 to-indigo-700",
    bgPattern: "bg-gradient-to-br",
  },
  {
    id: "transforms",
    title: "Transforms",
    description: "Scale, rotate, translate, skew",
    icon: <RotateCcw className="w-8 h-8" />,
    color: "from-teal-500 to-teal-700",
    bgPattern: "bg-gradient-to-br",
  },
  {
    id: "responsive",
    title: "Responsive",
    description: "Media queries, breakpoints",
    icon: <Maximize className="w-8 h-8" />,
    color: "from-orange-500 to-orange-700",
    bgPattern: "bg-gradient-to-br",
  },
];
