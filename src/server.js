import app from './app';
import nunjucks from 'nunjucks';

nunjucks.configure("./", {
  express: app,
  noCache: true,
});

app.listen(3333);