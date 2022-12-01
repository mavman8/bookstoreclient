const environmentUrls = new Map();
environmentUrls.set('localhost', 'http://localhost:8080');
environmentUrls.set('www.google.com', 'https://book-demo.com/');
environmentUrls.set('www.google.com', 'https://book-demo.com/');

console.log('test: '+ window.location.hostname);
export default environmentUrls.get(window.location.hostname);