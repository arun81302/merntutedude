Laundry Wallah - Responsive Landing Page

A modern and responsive landing page for a laundry service website built using HTML5 and CSS3. It showcases layout structuring, flexbox usage, and responsive design.

Features
Clean and modern UI
Fully responsive (Desktop, Tablet, Mobile)
Flexbox-based layout
Interactive hover effects
Reusable CSS
Hamburger menu for mobile navigation
Mid nav menu reused inside hamburger

In the button section, I used CSS transform and transition to create smooth hover effects.

transform: scale() is used to slightly enlarge the button
transform: rotate() adds a subtle tilt effect
transition ensures smooth animation when hovering
Technologies Used
HTML5
CSS3
Flexbox
Media Queries
Responsive Design
Responsive Design
Desktop: Two-column layout with full navigation bar
Tablet: Adjusted spacing and font sizes
Mobile: Stacked layout with hamburger menu navigation
Hamburger Menu (CSS-only)

This project uses a CSS-only approach to implement the hamburger menu without JavaScript.

The menu toggle is achieved using the :focus pseudo-class.
When the hamburger icon receives focus (e.g., clicked or tabbed), the adjacent navigation menu is displayed using CSS sibling selectors.
Example concept:
.icon:focus ~ .mid {
  display: block;
}
This allows the menu to open and close based on user interaction without any JavaScript.
It improves performance and keeps the implementation lightweight and simple.
Learnings
Flexbox layout
Responsive images (object-fit)
Overflow handling
Clean CSS structure
Mobile navigation using hamburger menu
CSS-only interactivity using :focus and sibling selectors
How to Run
Download or clone the project
Open index.html in your browser