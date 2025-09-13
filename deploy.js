// deploy.js
const ghpages = require('gh-pages');

ghpages.publish(
    'dist', // path to the build output directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/developer-akash9/Akash-Portfolio.git', // Replace with your GitHub repository URL
        user: {
            name: 'Your Name', // Replace with your name
            email: 'your.email@example.com' // Replace with your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);
