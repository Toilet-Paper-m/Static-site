# Create the directory if it doesn't exist
mkdir -p content/blog

# Create and add content to the blog post
cat > content/blog/hello-world.md << 'EOF'
# Hello World - My First Post

Published: March 20, 2024

Welcome to my first blog post! This is a test to make sure our markdown conversion is working properly.

## What We're Testing

- Markdown headings
- Lists (like this one!)
- **Bold text**
- *Italic text*
- [Links](/)

## Code Example

If you can see this post properly formatted on your website, everything is working!
EOF
