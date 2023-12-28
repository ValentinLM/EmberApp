import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export { store } from 'ember-data/store';

export default class IndexRoute extends Route {
  @service store;
  @service session;

  // beforeModel(transition) {
  //   this.session.requiereAuthentication(transition, 'login');
  // }

  async model() {
    // const reponse = await fetch('/api/products.json');
    // const { products } = await reponse.json();
    return this.store.findAll('product');
  }
}
