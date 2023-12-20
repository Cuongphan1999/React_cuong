import routes from './routes';
import table from './table';
const config = {
    routes,
    table
}
const buildUrl = (url) => {
    return "/" + url
  }
export {config, buildUrl};