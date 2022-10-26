import App from './App.js';
import KraftServer from 'kraftjs/ssr';
//@iterate import for in 'pages'
const KraftApp = new KraftServer({
  App: App,
  imports: importsX,
});
// Try not to change anything in this Area!
//#region
//#KRAFT SSR
const app = KraftApp(); // kraft will automatically respond to requsts with html ...

// ... Unless you say otherwise
app.get('/customRoute', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, '0.0.0.0', () => {
  console.log(`${new Date()} Kraft App listening on port 3000`);
});

export default app;
