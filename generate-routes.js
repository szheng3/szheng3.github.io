const fs = require('fs');

// This could be a database query or API call to get your portfolio IDs
const portfolioIds = [1, 2, 3, 4, 5];
const routes = ["/"]

const combine =[...routes, ...portfolioIds.map(id => `/portfolio/${id}`)];

fs.writeFileSync('routes.txt', combine.join('\n'), 'utf-8');
