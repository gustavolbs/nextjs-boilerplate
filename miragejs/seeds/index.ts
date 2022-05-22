/*
 * Mirage JS guide on Seeds: https://miragejs.com/docs/data-layer/factories#in-development
 */

import { Server } from 'miragejs';

const usersSeeder = (server: Server) => {
  /*
   * This will create in the in memory DB 10 objects
   * of the Factory `user`. Moreover it creates a
   * random number of messages and assign to each
   * and every user, making use of relationships.
   */
  server.createList('user', 10);
};

export default function seeds(server: Server) {
  server.loadFixtures();
  usersSeeder(server);
}
