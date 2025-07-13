import './css/vars.css';
import './css/general.css';
import './css/settings.css';
import './css/app.css';

// import { CONFIG } from './config/index'
import { Modal } from './modules/modal';
const settingsModal = new Modal(
  '[data-settings-modal]',
  '[data-open-settings-modal]',
  '[data-close-settings-modal]',
  'settings-window--active',
);

settingsModal.init();