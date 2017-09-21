/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

let data;

async function fetcher () {
  debugger;

  data = await mockFetch("1");
  console.log(data);

  data = await mockFetch("2");
  console.log(data);

  data = await mockFetch("3");
  console.log(data);
}

function mockFetch (value) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(value), 500);
  });
}

fetcher();