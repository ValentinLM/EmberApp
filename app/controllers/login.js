import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends Controller {
  @service session;
  @tracked error;
  @tracked username;
  @tracked password;
  @action
  async authenticate(e) {
    e.preventDefault();
    const { username, password } = this;
    try {
      await this.session.authenticate(
        'authenticator:oauth2',
        username,
        password,
      );
    } catch (error) {
      this.errorMessage = error.error || error;
    }
    if (this.session.isAuthenticated) {
      /*Algo porr hacer*/
    }
  }
  @action
  update(attr, event) {
    this[attr] = event.target.value;
  }
  @action
  invalidateSession() {
    this.session.invalidate();
  }
}
