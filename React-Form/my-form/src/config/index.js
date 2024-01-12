import routes from './routes';
import table from './table';
const config = {
    routes,
    table
}
const buildUrl = (url) => { //de them /
    return "/" + url
  }
export {config, buildUrl};