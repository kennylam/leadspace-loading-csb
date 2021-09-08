/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import '@carbon/ibmdotcom-web-components/es/components/leadspace/index.js';
import './index.scss';

setTimeout(() => {
  const leadspace = document.querySelector('dds-leadspace');
  const toggleBtn = document.getElementById('btn-toggle');
  const toggleContainer = document.querySelector('.toggle-container');
  if (leadspace) {
    leadspace.toggleAttribute('loading');
    toggleContainer.classList.remove('hidden');
    toggleBtn.addEventListener('click', () => {
      leadspace.toggleAttribute('loading');
    });
  }
}, 5000);
