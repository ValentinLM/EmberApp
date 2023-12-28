import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class GeneralContainerComponent extends Component {
  @service shoppingCart;

  get itemCount() {
    return this.shoppingCart.itemList.reduce((total, item) => {
      console.log('---itemCount');
      console.log('total: ', total);
      console.log('item.count', item.count);
      return total + item.count;
    }, 0);
  }
}
