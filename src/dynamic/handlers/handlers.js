import routes from '../routes.js';

/**
 * 
 * @param {String} route 
 * @param {String} url 
 * @param {import('http').IncomingHttpHeaders} headers 
 * @returns 
 */
export async function getDataFn(route, url, headers) {
  return {};
}

/**
 * 
 * @param {String} url 
 * @param {import('http').IncomingHttpHeaders} headers 
 * @returns 
 */
export async function getRouteFn(url, headers) {
  //console.log(headers);
  //console.log(url);
  let route = url.split('?')[0];
  if (!routes[route]) {
    return '/404/';
  }
  // Simple auth check
  if (route === '/dashboard/' && !headers.cookie?.includes('access_token=')) {
    return  '/login/';
  }
  let cookiesObj = {};
  headers.cookie?.split(';').forEach(cookieStr => {
    let [key, value] = cookieStr.trim().split('=');
    cookiesObj[key] = value;
  });
  if (route === '/dashboard/' && cookiesObj.access_token === '123123') {
    return route;
  } else if (route === '/dashboard/') {
    return '/login/';
  }
  return '';
}