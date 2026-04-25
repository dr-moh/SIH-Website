import re

with open('mcq.html', 'r') as f:
    content = f.read()

# Make a copy of the styles block
style_match = re.search(r'<style>.*?</style>', content, re.DOTALL)
if style_match:
    styles = style_match.group(0)
    
    # Replacements
    replacements = [
        ('#faf7f2', 'var(--bg-primary)'),
        ('#f5ede0', 'var(--bg-secondary)'),
        ('#1a1208', 'var(--text-primary)'),
        ('#6b5a40', 'var(--text-secondary)'),
        ('#a3927a', 'var(--text-muted)'),
        ('rgba(250,247,242,0.92)', 'var(--glass-bg)'),
        (r'rgba\(184,146,42,0\.(25|2|18|15)\)', 'var(--border-color)'),
        ('#b8922a', 'var(--brand-gold)'),
        ('#2b1810', 'var(--brand-burgundy)'),
        ('#16a34a', 'var(--brand-green)'),
        ('#4ade80', 'var(--brand-green)'),
        ('#a31515', 'var(--brand-red)'),
        ('#f87171', 'var(--brand-red)'),
        ('#fff', 'var(--bg-card)'),
    ]
    
    for old, new in replacements:
        styles = re.sub(old, new, styles)
    
    content = content.replace(style_match.group(0), f'<link rel="stylesheet" href="theme.css">\n<link rel="stylesheet" href="shared.css">\n{styles}')

with open('mcq.html', 'w') as f:
    f.write(content)

