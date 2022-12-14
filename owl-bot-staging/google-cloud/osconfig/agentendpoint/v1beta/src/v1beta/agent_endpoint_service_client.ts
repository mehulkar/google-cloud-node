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

/* global window */
import type * as gax from 'google-gax';
import type {Callback, CallOptions, Descriptors, ClientOptions} from 'google-gax';
import {PassThrough} from 'stream';
import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1beta/agent_endpoint_service_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './agent_endpoint_service_client_config.json';
const version = require('../../../package.json').version;

/**
 *  OS Config agent endpoint API.
 * @class
 * @memberof v1beta
 */
export class AgentEndpointServiceClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _providedCustomServicePath: boolean;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  warn: (code: string, message: string, warnType?: string) => void;
  innerApiCalls: {[name: string]: Function};
  agentEndpointServiceStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of AgentEndpointServiceClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#creating-the-client-instance).
   * The common options are:
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
   *     Follows the structure of {@link gapicConfig}.
   * @param {boolean | "rest"} [options.fallback] - Use HTTP fallback mode.
   *     Pass "rest" to use HTTP/1.1 REST API instead of gRPC.
   *     For more information, please check the
   *     {@link https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#http11-rest-api-mode documentation}.
   * @param {gax} [gaxInstance]: loaded instance of `google-gax`. Useful if you
   *     need to avoid loading the default gRPC version and want to use the fallback
   *     HTTP implementation. Load only fallback version and pass it to the constructor:
   *     ```
   *     const gax = require('google-gax/build/src/fallback'); // avoids loading google-gax with gRPC
   *     const client = new AgentEndpointServiceClient({fallback: 'rest'}, gax);
   *     ```
   */
  constructor(opts?: ClientOptions, gaxInstance?: typeof gax | typeof gax.fallback) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof AgentEndpointServiceClient;
    const servicePath = opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    this._providedCustomServicePath = !!(opts?.servicePath || opts?.apiEndpoint);
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback = opts?.fallback ?? (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Load google-gax module synchronously if needed
    if (!gaxInstance) {
      gaxInstance = require('google-gax') as typeof gax;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gaxInstance.fallback : gaxInstance;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = (this._gaxGrpc.auth as gax.GoogleAuth);

    // Set useJWTAccessWithScope on the auth object.
    this.auth.useJWTAccessWithScope = true;

    // Set defaultServicePath on the auth object.
    this.auth.defaultServicePath = staticMembers.servicePath;

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [
      `gax/${this._gaxModule.version}`,
      `gapic/${version}`,
    ];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    } else if (opts.fallback === 'rest' ) {
      clientHeader.push(`rest/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    // Some of the methods on this service provide streaming responses.
    // Provide descriptors for these.
    this.descriptors.stream = {
      receiveTaskNotification: new this._gaxModule.StreamDescriptor(this._gaxModule.StreamType.SERVER_STREAMING, opts.fallback === 'rest')
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
        'google.cloud.osconfig.agentendpoint.v1beta.AgentEndpointService', gapicConfig as gax.ClientConfig,
        opts.clientConfig || {}, {'x-goog-api-client': clientHeader.join(' ')});

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};

    // Add a warn function to the client constructor so it can be easily tested.
    this.warn = this._gaxModule.warn;
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.agentEndpointServiceStub) {
      return this.agentEndpointServiceStub;
    }

    // Put together the "service stub" for
    // google.cloud.osconfig.agentendpoint.v1beta.AgentEndpointService.
    this.agentEndpointServiceStub = this._gaxGrpc.createStub(
        this._opts.fallback ?
          (this._protos as protobuf.Root).lookupService('google.cloud.osconfig.agentendpoint.v1beta.AgentEndpointService') :
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.osconfig.agentendpoint.v1beta.AgentEndpointService,
        this._opts, this._providedCustomServicePath) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const agentEndpointServiceStubMethods =
        ['receiveTaskNotification', 'startNextTask', 'reportTaskProgress', 'reportTaskComplete', 'lookupEffectiveGuestPolicy', 'registerAgent'];
    for (const methodName of agentEndpointServiceStubMethods) {
      const callPromise = this.agentEndpointServiceStub.then(
        stub => (...args: Array<{}>) => {
          if (this._terminated) {
            if (methodName in this.descriptors.stream) {
              const stream = new PassThrough();
              setImmediate(() => {
                stream.emit('error', new this._gaxModule.GoogleError('The client has already been closed.'));
              });
              return stream;
            }
            return Promise.reject('The client has already been closed.');
          }
          const func = stub[methodName];
          return func.apply(stub, args);
        },
        (err: Error|null|undefined) => () => {
          throw err;
        });

      const descriptor =
        this.descriptors.stream[methodName] ||
        undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor,
        this._opts.fallback
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.agentEndpointServiceStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'osconfig.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'osconfig.googleapis.com';
  }

  /**
   * The port for this API service.
   * @returns {number} The default port for this service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   * @returns {string[]} List of default scopes.
   */
  static get scopes() {
    return [];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(callback?: Callback<string, undefined, undefined>):
      Promise<string>|void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
/**
 * Signals the start of a task execution and returns the task info.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.instanceIdToken
 *   Required. This is the Compute Engine instance identity token described in
 *   https://cloud.google.com/compute/docs/instances/verifying-instance-identity
 *   where the audience is 'osconfig.googleapis.com' and the format is 'full'.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [StartNextTaskResponse]{@link google.cloud.osconfig.agentendpoint.v1beta.StartNextTaskResponse}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1beta/agent_endpoint_service.start_next_task.js</caption>
 * region_tag:osconfig_v1beta_generated_AgentEndpointService_StartNextTask_async
 */
  startNextTask(
      request?: protos.google.cloud.osconfig.agentendpoint.v1beta.IStartNextTaskRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.osconfig.agentendpoint.v1beta.IStartNextTaskResponse,
        protos.google.cloud.osconfig.agentendpoint.v1beta.IStartNextTaskRequest|undefined, {}|undefined
      ]>;
  startNextTask(
      request: protos.google.cloud.osconfig.agentendpoint.v1beta.IStartNextTaskRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.osconfig.agentendpoint.v1beta.IStartNextTaskResponse,
          protos.google.cloud.osconfig.agentendpoint.v1beta.IStartNextTaskRequest|null|undefined,
          {}|null|undefined>): void;
  startNextTask(
      request: protos.google.cloud.osconfig.agentendpoint.v1beta.IStartNextTaskRequest,
      callback: Callback<
          protos.google.cloud.osconfig.agentendpoint.v1beta.IStartNextTaskResponse,
          protos.google.cloud.osconfig.agentendpoint.v1beta.IStartNextTaskRequest|null|undefined,
          {}|null|undefined>): void;
  startNextTask(
      request?: protos.google.cloud.osconfig.agentendpoint.v1beta.IStartNextTaskRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.osconfig.agentendpoint.v1beta.IStartNextTaskResponse,
          protos.google.cloud.osconfig.agentendpoint.v1beta.IStartNextTaskRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.osconfig.agentendpoint.v1beta.IStartNextTaskResponse,
          protos.google.cloud.osconfig.agentendpoint.v1beta.IStartNextTaskRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.osconfig.agentendpoint.v1beta.IStartNextTaskResponse,
        protos.google.cloud.osconfig.agentendpoint.v1beta.IStartNextTaskRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    this.initialize();
    return this.innerApiCalls.startNextTask(request, options, callback);
  }
/**
 * Signals an intermediary progress checkpoint in task execution.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.instanceIdToken
 *   Required. This is the Compute Engine instance identity token described in
 *   https://cloud.google.com/compute/docs/instances/verifying-instance-identity
 *   where the audience is 'osconfig.googleapis.com' and the format is 'full'.
 * @param {string} request.taskId
 *   Required. Unique identifier of the task this applies to.
 * @param {google.cloud.osconfig.agentendpoint.v1beta.TaskType} request.taskType
 *   Required. The type of task to report progress on.
 *
 *   Progress must include the appropriate message based on this enum as
 *   specified below:
 *   APPLY_PATCHES = ApplyPatchesTaskProgress
 *   EXEC_STEP = Progress not supported for this type.
 *   APPLY_CONFIG_TASK = ApplyConfigTaskProgress
 * @param {google.cloud.osconfig.agentendpoint.v1beta.ApplyPatchesTaskProgress} request.applyPatchesTaskProgress
 *   Details about the progress of the apply patches task.
 * @param {google.cloud.osconfig.agentendpoint.v1beta.ExecStepTaskProgress} request.execStepTaskProgress
 *   Details about the progress of the exec step task.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [ReportTaskProgressResponse]{@link google.cloud.osconfig.agentendpoint.v1beta.ReportTaskProgressResponse}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1beta/agent_endpoint_service.report_task_progress.js</caption>
 * region_tag:osconfig_v1beta_generated_AgentEndpointService_ReportTaskProgress_async
 */
  reportTaskProgress(
      request?: protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskProgressRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskProgressResponse,
        protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskProgressRequest|undefined, {}|undefined
      ]>;
  reportTaskProgress(
      request: protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskProgressRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskProgressResponse,
          protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskProgressRequest|null|undefined,
          {}|null|undefined>): void;
  reportTaskProgress(
      request: protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskProgressRequest,
      callback: Callback<
          protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskProgressResponse,
          protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskProgressRequest|null|undefined,
          {}|null|undefined>): void;
  reportTaskProgress(
      request?: protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskProgressRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskProgressResponse,
          protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskProgressRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskProgressResponse,
          protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskProgressRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskProgressResponse,
        protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskProgressRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    this.initialize();
    return this.innerApiCalls.reportTaskProgress(request, options, callback);
  }
/**
 * Signals that the task execution is complete and optionally returns the next
 * task.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.instanceIdToken
 *   Required. This is the Compute Engine instance identity token described in
 *   https://cloud.google.com/compute/docs/instances/verifying-instance-identity
 *   where the audience is 'osconfig.googleapis.com' and the format is 'full'.
 * @param {string} request.taskId
 *   Required. Unique identifier of the task this applies to.
 * @param {google.cloud.osconfig.agentendpoint.v1beta.TaskType} request.taskType
 *   Required. The type of task to report completed.
 *
 *   The output must include the appropriate message based on the following
 *   enum values:
 *   APPLY_PATCHES = ApplyPatchesTaskOutput
 *   EXEC_STEP = ExecStepTaskOutput
 *   APPLY_CONFIG_TASK = ApplyConfigTaskOutput
 * @param {string} request.errorMessage
 *   Descriptive error message if the task execution ended in error.
 * @param {google.cloud.osconfig.agentendpoint.v1beta.ApplyPatchesTaskOutput} request.applyPatchesTaskOutput
 *   Final output details of the apply patches task;
 * @param {google.cloud.osconfig.agentendpoint.v1beta.ExecStepTaskOutput} request.execStepTaskOutput
 *   Final output details of the exec step task;
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [ReportTaskCompleteResponse]{@link google.cloud.osconfig.agentendpoint.v1beta.ReportTaskCompleteResponse}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1beta/agent_endpoint_service.report_task_complete.js</caption>
 * region_tag:osconfig_v1beta_generated_AgentEndpointService_ReportTaskComplete_async
 */
  reportTaskComplete(
      request?: protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskCompleteRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskCompleteResponse,
        protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskCompleteRequest|undefined, {}|undefined
      ]>;
  reportTaskComplete(
      request: protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskCompleteRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskCompleteResponse,
          protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskCompleteRequest|null|undefined,
          {}|null|undefined>): void;
  reportTaskComplete(
      request: protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskCompleteRequest,
      callback: Callback<
          protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskCompleteResponse,
          protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskCompleteRequest|null|undefined,
          {}|null|undefined>): void;
  reportTaskComplete(
      request?: protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskCompleteRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskCompleteResponse,
          protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskCompleteRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskCompleteResponse,
          protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskCompleteRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskCompleteResponse,
        protos.google.cloud.osconfig.agentendpoint.v1beta.IReportTaskCompleteRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    this.initialize();
    return this.innerApiCalls.reportTaskComplete(request, options, callback);
  }
/**
 * Lookup the effective guest policy that applies to a VM instance. This
 * lookup merges all policies that are assigned to the instance ancestry.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.instanceIdToken
 *   Required. This is the GCE instance identity token described in
 *   https://cloud.google.com/compute/docs/instances/verifying-instance-identity
 *   where the audience is 'osconfig.googleapis.com' and the format is 'full'.
 * @param {string} request.osShortName
 *   Short name of the OS running on the instance. The OS Config agent only
 *   provideS this field for targeting if OS Inventory is enabled for that
 *   instance.
 * @param {string} request.osVersion
 *   Version of the OS running on the instance. The OS Config agent only
 *   provide this field for targeting if OS Inventory is enabled for that
 *   VM instance.
 * @param {string} request.osArchitecture
 *   Architecture of OS running on the instance. The OS Config agent only
 *   provide this field for targeting if OS Inventory is enabled for that
 *   instance.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [EffectiveGuestPolicy]{@link google.cloud.osconfig.agentendpoint.v1beta.EffectiveGuestPolicy}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1beta/agent_endpoint_service.lookup_effective_guest_policy.js</caption>
 * region_tag:osconfig_v1beta_generated_AgentEndpointService_LookupEffectiveGuestPolicy_async
 */
  lookupEffectiveGuestPolicy(
      request?: protos.google.cloud.osconfig.agentendpoint.v1beta.ILookupEffectiveGuestPolicyRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.osconfig.agentendpoint.v1beta.IEffectiveGuestPolicy,
        protos.google.cloud.osconfig.agentendpoint.v1beta.ILookupEffectiveGuestPolicyRequest|undefined, {}|undefined
      ]>;
  lookupEffectiveGuestPolicy(
      request: protos.google.cloud.osconfig.agentendpoint.v1beta.ILookupEffectiveGuestPolicyRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.osconfig.agentendpoint.v1beta.IEffectiveGuestPolicy,
          protos.google.cloud.osconfig.agentendpoint.v1beta.ILookupEffectiveGuestPolicyRequest|null|undefined,
          {}|null|undefined>): void;
  lookupEffectiveGuestPolicy(
      request: protos.google.cloud.osconfig.agentendpoint.v1beta.ILookupEffectiveGuestPolicyRequest,
      callback: Callback<
          protos.google.cloud.osconfig.agentendpoint.v1beta.IEffectiveGuestPolicy,
          protos.google.cloud.osconfig.agentendpoint.v1beta.ILookupEffectiveGuestPolicyRequest|null|undefined,
          {}|null|undefined>): void;
  lookupEffectiveGuestPolicy(
      request?: protos.google.cloud.osconfig.agentendpoint.v1beta.ILookupEffectiveGuestPolicyRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.osconfig.agentendpoint.v1beta.IEffectiveGuestPolicy,
          protos.google.cloud.osconfig.agentendpoint.v1beta.ILookupEffectiveGuestPolicyRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.osconfig.agentendpoint.v1beta.IEffectiveGuestPolicy,
          protos.google.cloud.osconfig.agentendpoint.v1beta.ILookupEffectiveGuestPolicyRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.osconfig.agentendpoint.v1beta.IEffectiveGuestPolicy,
        protos.google.cloud.osconfig.agentendpoint.v1beta.ILookupEffectiveGuestPolicyRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    this.initialize();
    return this.innerApiCalls.lookupEffectiveGuestPolicy(request, options, callback);
  }
/**
 * Registers the agent running on the VM.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.instanceIdToken
 *   Required. This is the Compute Engine instance identity token described in
 *   https://cloud.google.com/compute/docs/instances/verifying-instance-identity
 *   where the audience is 'osconfig.googleapis.com' and the format is 'full'.
 * @param {string} request.agentVersion
 *   Required. The version of the agent.
 * @param {string[]} request.supportedCapabilities
 *   Required. The capabilities supported by the agent. Supported values are:
 *   PATCH_GA
 *   GUEST_POLICY_BETA
 *   CONFIG_V1
 * @param {string} request.osLongName
 *   The operating system long name.
 *   For example 'Debian GNU/Linux 9' or 'Microsoft Window Server 2019
 *   Datacenter'.
 * @param {string} request.osShortName
 *   The operating system short name.
 *   For example, 'windows' or 'debian'.
 * @param {string} request.osVersion
 *   The version of the operating system.
 * @param {string} request.osArchitecture
 *   The system architecture of the operating system.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [RegisterAgentResponse]{@link google.cloud.osconfig.agentendpoint.v1beta.RegisterAgentResponse}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1beta/agent_endpoint_service.register_agent.js</caption>
 * region_tag:osconfig_v1beta_generated_AgentEndpointService_RegisterAgent_async
 */
  registerAgent(
      request?: protos.google.cloud.osconfig.agentendpoint.v1beta.IRegisterAgentRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.osconfig.agentendpoint.v1beta.IRegisterAgentResponse,
        protos.google.cloud.osconfig.agentendpoint.v1beta.IRegisterAgentRequest|undefined, {}|undefined
      ]>;
  registerAgent(
      request: protos.google.cloud.osconfig.agentendpoint.v1beta.IRegisterAgentRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.osconfig.agentendpoint.v1beta.IRegisterAgentResponse,
          protos.google.cloud.osconfig.agentendpoint.v1beta.IRegisterAgentRequest|null|undefined,
          {}|null|undefined>): void;
  registerAgent(
      request: protos.google.cloud.osconfig.agentendpoint.v1beta.IRegisterAgentRequest,
      callback: Callback<
          protos.google.cloud.osconfig.agentendpoint.v1beta.IRegisterAgentResponse,
          protos.google.cloud.osconfig.agentendpoint.v1beta.IRegisterAgentRequest|null|undefined,
          {}|null|undefined>): void;
  registerAgent(
      request?: protos.google.cloud.osconfig.agentendpoint.v1beta.IRegisterAgentRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.osconfig.agentendpoint.v1beta.IRegisterAgentResponse,
          protos.google.cloud.osconfig.agentendpoint.v1beta.IRegisterAgentRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.osconfig.agentendpoint.v1beta.IRegisterAgentResponse,
          protos.google.cloud.osconfig.agentendpoint.v1beta.IRegisterAgentRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.osconfig.agentendpoint.v1beta.IRegisterAgentResponse,
        protos.google.cloud.osconfig.agentendpoint.v1beta.IRegisterAgentRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    this.initialize();
    return this.innerApiCalls.registerAgent(request, options, callback);
  }

/**
 * Stream established by client to receive Task notifications.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.instanceIdToken
 *   Required. This is the Compute Engine instance identity token described in
 *   https://cloud.google.com/compute/docs/instances/verifying-instance-identity
 *   where the audience is 'osconfig.googleapis.com' and the format is 'full'.
 * @param {string} request.agentVersion
 *   Required. The version of the agent making the request.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Stream}
 *   An object stream which emits [ReceiveTaskNotificationResponse]{@link google.cloud.osconfig.agentendpoint.v1beta.ReceiveTaskNotificationResponse} on 'data' event.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#server-streaming)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1beta/agent_endpoint_service.receive_task_notification.js</caption>
 * region_tag:osconfig_v1beta_generated_AgentEndpointService_ReceiveTaskNotification_async
 */
  receiveTaskNotification(
      request?: protos.google.cloud.osconfig.agentendpoint.v1beta.IReceiveTaskNotificationRequest,
      options?: CallOptions):
    gax.CancellableStream{
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    this.initialize();
    return this.innerApiCalls.receiveTaskNotification(request, options);
  }


  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    if (this.agentEndpointServiceStub && !this._terminated) {
      return this.agentEndpointServiceStub.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}