import { createServer } from 'miragejs';
import factories from './factories';
import fixtures from './fixtures';
import models from './models';
import seeds from './seeds';

const config = (environment: string) => {
  const config = {
    environment,
    factories,
    fixtures,
    models,
    seeds,
  };

  if (Object.keys(fixtures).length) {
    config.fixtures = fixtures;
  }

  return config;
};

export function makeServer({ environment = 'development' } = {}) {
  return createServer({
    ...config(environment),
    routes() {
      this.namespace = 'api';

      /*
       * A resource comprises all operations for a CRUD
       * operation. .get(), .post(), .put() and delete().
       * Mirage JS guide on Resource: https://miragejs.com/docs/route-handlers/shorthands#resource-helper
       */
      this.get('users');
      this.get('products');

      /*
       * From your component use fetch('api/messages?userId=<a user id>')
       * replacing <a user id> with a real ID
       */
      // context.get('messages', (schema, request) => {
      //   const {
      //     queryParams: { userId },
      //   } = request;

      //   return schema.messages.where({ userId });
      // });
    },
  });
}
