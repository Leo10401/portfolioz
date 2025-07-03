// Wait for DOM to be fully loaded before running animations
document.addEventListener('DOMContentLoaded', function() {
  // Animate the image with a more visible effect
  anime({
    targets: '.image',
    translateY: ['0px', '-20px'],
    scale: [1, 1.05],
    duration: 2000,
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true
  });
        // Theme toggle functionality
        const themeToggle = document.getElementById('theme-toggle');
        const html = document.documentElement;
        
        // Check for saved theme preference or default to light
        const savedTheme = localStorage.getItem('theme') || 'light';
        html.className = savedTheme;
        
        // Update theme toggle button state
        function updateThemeToggle() {
            const isDark = html.classList.contains('dark');
            // The CSS handles the visual state of the toggle
        }
        
        // Toggle theme function
        function toggleTheme() {
            const isDark = html.classList.contains('dark');
            if (isDark) {
                html.classList.remove('dark');
                html.classList.add('light');
                localStorage.setItem('theme', 'light');
            } else {
                html.classList.remove('light');
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
            updateThemeToggle();
        }
        
        // Event listener for theme toggle
        themeToggle.addEventListener('click', toggleTheme);
        
        // Initialize theme toggle state
        updateThemeToggle();
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

  
});
