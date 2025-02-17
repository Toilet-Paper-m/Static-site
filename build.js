const fs = require('fs');
const path = require('path');
const marked = require('marked');

// Read the HTML template
const template = fs.readFileSync('./templates/post-template.html', 'utf-8');

// Function to convert markdown to HTML
function convertMarkdownToHtml(markdown, title) {
    const htmlContent = marked.parse(markdown);
    return template.replace('{{content}}', htmlContent)
                  .replace('{{title}}', title);
}

// Process blog posts
const blogDir = './content/blog';
fs.readdirSync(blogDir).forEach(file => {
    if (file.endsWith('.md')) {
        const markdown = fs.readFileSync(path.join(blogDir, file), 'utf-8');
        const htmlFile = file.replace('.md', '.html');
        const title = markdown.split('\n')[0].replace('# ', ''); // Get title from first h1
        
        const html = convertMarkdownToHtml(markdown, title);
        fs.writeFileSync(path.join('./blog', htmlFile), html);
    }
});

// Process pages
const pagesDir = './content/pages';
fs.readdirSync(pagesDir).forEach(file => {
    if (file.endsWith('.md')) {
        const markdown = fs.readFileSync(path.join(pagesDir, file), 'utf-8');
        const htmlFile = file.replace('.md', '.html');
        const title = markdown.split('\n')[0].replace('# ', '');
        
        const html = convertMarkdownToHtml(markdown, title);
        fs.writeFileSync(path.join('./pages', htmlFile), html);
    }
}); 