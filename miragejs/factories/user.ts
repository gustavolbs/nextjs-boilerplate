import { randomNumber } from './utils';

/*
 * Mirage JS guide on Factories: https://miragejs.com/docs/data-layer/factories
 */
import { Factory } from 'miragejs';

/*
 * Faker Github repository: https://github.com/Marak/Faker.js#readme
 */
import { faker } from '@faker-js/faker';

const userFactory = {
  user: Factory.extend({
    name() {
      return faker.fake('{{name.findName}}');
    },
    age() {
      return faker.datatype.number({ min: 10, max: 100 });
    },
    mobile() {
      return faker.fake('{{phone.phoneNumber}}');
    },
  }),
};

export default userFactory;
