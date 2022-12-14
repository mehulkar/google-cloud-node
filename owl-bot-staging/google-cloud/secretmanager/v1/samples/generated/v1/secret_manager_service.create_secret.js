// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent, secretId, secret) {
  // [START secretmanager_v1_generated_SecretManagerService_CreateSecret_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the project to associate with the
   *  Secret google.cloud.secretmanager.v1.Secret, in the format `projects/*`.
   */
  // const parent = 'abc123'
  /**
   *  Required. This must be unique within the project.
   *  A secret ID is a string with a maximum length of 255 characters and can
   *  contain uppercase and lowercase letters, numerals, and the hyphen (`-`) and
   *  underscore (`_`) characters.
   */
  // const secretId = 'abc123'
  /**
   *  Required. A Secret google.cloud.secretmanager.v1.Secret  with initial field values.
   */
  // const secret = {}

  // Imports the Secretmanager library
  const {SecretManagerServiceClient} = require('@google-cloud/secret-manager').v1;

  // Instantiates a client
  const secretmanagerClient = new SecretManagerServiceClient();

  async function callCreateSecret() {
    // Construct request
    const request = {
      parent,
      secretId,
      secret,
    };

    // Run request
    const response = await secretmanagerClient.createSecret(request);
    console.log(response);
  }

  callCreateSecret();
  // [END secretmanager_v1_generated_SecretManagerService_CreateSecret_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));