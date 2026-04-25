document.addEventListener('DOMContentLoaded', () => {
  const pills = document.querySelectorAll('.nav-links-pill');
  pills.forEach(pill => {
    // Add highlighter element
    const highlighter = document.createElement('div');
    highlighter.className = 'nav-highlighter';
    pill.appendChild(highlighter);
    
    const links = pill.querySelectorAll('a');
    let activeLink = pill.querySelector('a.active');
    
    function moveHighlighter(link) {
      if (!link) return;
      highlighter.style.opacity = '1';
      highlighter.style.width = `${link.offsetWidth}px`;
      highlighter.style.left = `${link.offsetLeft}px`;
    }
    
    // Ensure all fonts/styles are loaded before calculating initial active element
    setTimeout(() => {
      if (activeLink) {
        moveHighlighter(activeLink);
      }
    }, 100);
    
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        moveHighlighter(link);
      });
    });
    
    pill.addEventListener('mouseleave', () => {
      if (activeLink) {
        moveHighlighter(activeLink);
      } else {
        highlighter.style.opacity = '0';
      }
    });
    
    // Handle resizes for precise tracking
    window.addEventListener('resize', () => {
      if (pill.querySelector(':hover')) {
        moveHighlighter(pill.querySelector('a:hover'));
      } else if (activeLink) {
        moveHighlighter(activeLink);
      }
    });
  });
});
