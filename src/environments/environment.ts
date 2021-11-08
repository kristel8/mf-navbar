const envGlobal: {[key: string]: any} = window;
export const environment = {
  production: false,
  urlGateway: envGlobal['urlGateway'],
  urlReport: envGlobal['urlReport']
};
