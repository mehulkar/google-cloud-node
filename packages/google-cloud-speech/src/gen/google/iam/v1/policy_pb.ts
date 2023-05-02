// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file google/iam/v1/policy.proto (package google.iam.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Expr } from "../../type/expr_pb.js";

/**
 * An Identity and Access Management (IAM) policy, which specifies access
 * controls for Google Cloud resources.
 *
 *
 * A `Policy` is a collection of `bindings`. A `binding` binds one or more
 * `members`, or principals, to a single `role`. Principals can be user
 * accounts, service accounts, Google groups, and domains (such as G Suite). A
 * `role` is a named list of permissions; each `role` can be an IAM predefined
 * role or a user-created custom role.
 *
 * For some types of Google Cloud resources, a `binding` can also specify a
 * `condition`, which is a logical expression that allows access to a resource
 * only if the expression evaluates to `true`. A condition can add constraints
 * based on attributes of the request, the resource, or both. To learn which
 * resources support conditions in their IAM policies, see the
 * [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
 *
 * **JSON example:**
 *
 *     {
 *       "bindings": [
 *         {
 *           "role": "roles/resourcemanager.organizationAdmin",
 *           "members": [
 *             "user:mike@example.com",
 *             "group:admins@example.com",
 *             "domain:google.com",
 *             "serviceAccount:my-project-id@appspot.gserviceaccount.com"
 *           ]
 *         },
 *         {
 *           "role": "roles/resourcemanager.organizationViewer",
 *           "members": [
 *             "user:eve@example.com"
 *           ],
 *           "condition": {
 *             "title": "expirable access",
 *             "description": "Does not grant access after Sep 2020",
 *             "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')",
 *           }
 *         }
 *       ],
 *       "etag": "BwWWja0YfJA=",
 *       "version": 3
 *     }
 *
 * **YAML example:**
 *
 *     bindings:
 *     - members:
 *       - user:mike@example.com
 *       - group:admins@example.com
 *       - domain:google.com
 *       - serviceAccount:my-project-id@appspot.gserviceaccount.com
 *       role: roles/resourcemanager.organizationAdmin
 *     - members:
 *       - user:eve@example.com
 *       role: roles/resourcemanager.organizationViewer
 *       condition:
 *         title: expirable access
 *         description: Does not grant access after Sep 2020
 *         expression: request.time < timestamp('2020-10-01T00:00:00.000Z')
 *     etag: BwWWja0YfJA=
 *     version: 3
 *
 * For a description of IAM and its features, see the
 * [IAM documentation](https://cloud.google.com/iam/docs/).
 *
 * @generated from message google.iam.v1.Policy
 */
export class Policy extends Message<Policy> {
  /**
   * Specifies the format of the policy.
   *
   * Valid values are `0`, `1`, and `3`. Requests that specify an invalid value
   * are rejected.
   *
   * Any operation that affects conditional role bindings must specify version
   * `3`. This requirement applies to the following operations:
   *
   * * Getting a policy that includes a conditional role binding
   * * Adding a conditional role binding to a policy
   * * Changing a conditional role binding in a policy
   * * Removing any role binding, with or without a condition, from a policy
   *   that includes conditions
   *
   * **Important:** If you use IAM Conditions, you must include the `etag` field
   * whenever you call `setIamPolicy`. If you omit this field, then IAM allows
   * you to overwrite a version `3` policy with a version `1` policy, and all of
   * the conditions in the version `3` policy are lost.
   *
   * If a policy does not include any conditions, operations on that policy may
   * specify any valid version or leave the field unset.
   *
   * To learn which resources support conditions in their IAM policies, see the
   * [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
   *
   * @generated from field: int32 version = 1;
   */
  version = 0;

  /**
   * Associates a list of `members`, or principals, with a `role`. Optionally,
   * may specify a `condition` that determines how and when the `bindings` are
   * applied. Each of the `bindings` must contain at least one principal.
   *
   * The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250
   * of these principals can be Google groups. Each occurrence of a principal
   * counts towards these limits. For example, if the `bindings` grant 50
   * different roles to `user:alice@example.com`, and not to any other
   * principal, then you can add another 1,450 principals to the `bindings` in
   * the `Policy`.
   *
   * @generated from field: repeated google.iam.v1.Binding bindings = 4;
   */
  bindings: Binding[] = [];

  /**
   * Specifies cloud audit logging configuration for this policy.
   *
   * @generated from field: repeated google.iam.v1.AuditConfig audit_configs = 6;
   */
  auditConfigs: AuditConfig[] = [];

  /**
   * `etag` is used for optimistic concurrency control as a way to help
   * prevent simultaneous updates of a policy from overwriting each other.
   * It is strongly suggested that systems make use of the `etag` in the
   * read-modify-write cycle to perform policy updates in order to avoid race
   * conditions: An `etag` is returned in the response to `getIamPolicy`, and
   * systems are expected to put that etag in the request to `setIamPolicy` to
   * ensure that their change will be applied to the same version of the policy.
   *
   * **Important:** If you use IAM Conditions, you must include the `etag` field
   * whenever you call `setIamPolicy`. If you omit this field, then IAM allows
   * you to overwrite a version `3` policy with a version `1` policy, and all of
   * the conditions in the version `3` policy are lost.
   *
   * @generated from field: bytes etag = 3;
   */
  etag = new Uint8Array(0);

  constructor(data?: PartialMessage<Policy>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.iam.v1.Policy";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "bindings", kind: "message", T: Binding, repeated: true },
    { no: 6, name: "audit_configs", kind: "message", T: AuditConfig, repeated: true },
    { no: 3, name: "etag", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Policy {
    return new Policy().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Policy {
    return new Policy().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Policy {
    return new Policy().fromJsonString(jsonString, options);
  }

  static equals(a: Policy | PlainMessage<Policy> | undefined, b: Policy | PlainMessage<Policy> | undefined): boolean {
    return proto3.util.equals(Policy, a, b);
  }
}

/**
 * Associates `members`, or principals, with a `role`.
 *
 * @generated from message google.iam.v1.Binding
 */
export class Binding extends Message<Binding> {
  /**
   * Role that is assigned to the list of `members`, or principals.
   * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
   *
   * @generated from field: string role = 1;
   */
  role = "";

  /**
   * Specifies the principals requesting access for a Cloud Platform resource.
   * `members` can have the following values:
   *
   * * `allUsers`: A special identifier that represents anyone who is
   *    on the internet; with or without a Google account.
   *
   * * `allAuthenticatedUsers`: A special identifier that represents anyone
   *    who is authenticated with a Google account or a service account.
   *
   * * `user:{emailid}`: An email address that represents a specific Google
   *    account. For example, `alice@example.com` .
   *
   *
   * * `serviceAccount:{emailid}`: An email address that represents a service
   *    account. For example, `my-other-app@appspot.gserviceaccount.com`.
   *
   * * `group:{emailid}`: An email address that represents a Google group.
   *    For example, `admins@example.com`.
   *
   * * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique
   *    identifier) representing a user that has been recently deleted. For
   *    example, `alice@example.com?uid=123456789012345678901`. If the user is
   *    recovered, this value reverts to `user:{emailid}` and the recovered user
   *    retains the role in the binding.
   *
   * * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus
   *    unique identifier) representing a service account that has been recently
   *    deleted. For example,
   *    `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`.
   *    If the service account is undeleted, this value reverts to
   *    `serviceAccount:{emailid}` and the undeleted service account retains the
   *    role in the binding.
   *
   * * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique
   *    identifier) representing a Google group that has been recently
   *    deleted. For example, `admins@example.com?uid=123456789012345678901`. If
   *    the group is recovered, this value reverts to `group:{emailid}` and the
   *    recovered group retains the role in the binding.
   *
   *
   * * `domain:{domain}`: The G Suite domain (primary) that represents all the
   *    users of that domain. For example, `google.com` or `example.com`.
   *
   *
   *
   * @generated from field: repeated string members = 2;
   */
  members: string[] = [];

  /**
   * The condition that is associated with this binding.
   *
   * If the condition evaluates to `true`, then this binding applies to the
   * current request.
   *
   * If the condition evaluates to `false`, then this binding does not apply to
   * the current request. However, a different role binding might grant the same
   * role to one or more of the principals in this binding.
   *
   * To learn which resources support conditions in their IAM policies, see the
   * [IAM
   * documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
   *
   * @generated from field: google.type.Expr condition = 3;
   */
  condition?: Expr;

  constructor(data?: PartialMessage<Binding>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.iam.v1.Binding";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "role", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "members", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "condition", kind: "message", T: Expr },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Binding {
    return new Binding().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Binding {
    return new Binding().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Binding {
    return new Binding().fromJsonString(jsonString, options);
  }

  static equals(a: Binding | PlainMessage<Binding> | undefined, b: Binding | PlainMessage<Binding> | undefined): boolean {
    return proto3.util.equals(Binding, a, b);
  }
}

/**
 * Specifies the audit configuration for a service.
 * The configuration determines which permission types are logged, and what
 * identities, if any, are exempted from logging.
 * An AuditConfig must have one or more AuditLogConfigs.
 *
 * If there are AuditConfigs for both `allServices` and a specific service,
 * the union of the two AuditConfigs is used for that service: the log_types
 * specified in each AuditConfig are enabled, and the exempted_members in each
 * AuditLogConfig are exempted.
 *
 * Example Policy with multiple AuditConfigs:
 *
 *     {
 *       "audit_configs": [
 *         {
 *           "service": "allServices",
 *           "audit_log_configs": [
 *             {
 *               "log_type": "DATA_READ",
 *               "exempted_members": [
 *                 "user:jose@example.com"
 *               ]
 *             },
 *             {
 *               "log_type": "DATA_WRITE"
 *             },
 *             {
 *               "log_type": "ADMIN_READ"
 *             }
 *           ]
 *         },
 *         {
 *           "service": "sampleservice.googleapis.com",
 *           "audit_log_configs": [
 *             {
 *               "log_type": "DATA_READ"
 *             },
 *             {
 *               "log_type": "DATA_WRITE",
 *               "exempted_members": [
 *                 "user:aliya@example.com"
 *               ]
 *             }
 *           ]
 *         }
 *       ]
 *     }
 *
 * For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ
 * logging. It also exempts jose@example.com from DATA_READ logging, and
 * aliya@example.com from DATA_WRITE logging.
 *
 * @generated from message google.iam.v1.AuditConfig
 */
export class AuditConfig extends Message<AuditConfig> {
  /**
   * Specifies a service that will be enabled for audit logging.
   * For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
   * `allServices` is a special value that covers all services.
   *
   * @generated from field: string service = 1;
   */
  service = "";

  /**
   * The configuration for logging of each type of permission.
   *
   * @generated from field: repeated google.iam.v1.AuditLogConfig audit_log_configs = 3;
   */
  auditLogConfigs: AuditLogConfig[] = [];

  constructor(data?: PartialMessage<AuditConfig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.iam.v1.AuditConfig";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "service", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "audit_log_configs", kind: "message", T: AuditLogConfig, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditConfig {
    return new AuditConfig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditConfig {
    return new AuditConfig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditConfig {
    return new AuditConfig().fromJsonString(jsonString, options);
  }

  static equals(a: AuditConfig | PlainMessage<AuditConfig> | undefined, b: AuditConfig | PlainMessage<AuditConfig> | undefined): boolean {
    return proto3.util.equals(AuditConfig, a, b);
  }
}

/**
 * Provides the configuration for logging a type of permissions.
 * Example:
 *
 *     {
 *       "audit_log_configs": [
 *         {
 *           "log_type": "DATA_READ",
 *           "exempted_members": [
 *             "user:jose@example.com"
 *           ]
 *         },
 *         {
 *           "log_type": "DATA_WRITE"
 *         }
 *       ]
 *     }
 *
 * This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting
 * jose@example.com from DATA_READ logging.
 *
 * @generated from message google.iam.v1.AuditLogConfig
 */
export class AuditLogConfig extends Message<AuditLogConfig> {
  /**
   * The log type that this config enables.
   *
   * @generated from field: google.iam.v1.AuditLogConfig.LogType log_type = 1;
   */
  logType = AuditLogConfig_LogType.LOG_TYPE_UNSPECIFIED;

  /**
   * Specifies the identities that do not cause logging for this type of
   * permission.
   * Follows the same format of [Binding.members][google.iam.v1.Binding.members].
   *
   * @generated from field: repeated string exempted_members = 2;
   */
  exemptedMembers: string[] = [];

  constructor(data?: PartialMessage<AuditLogConfig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.iam.v1.AuditLogConfig";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "log_type", kind: "enum", T: proto3.getEnumType(AuditLogConfig_LogType) },
    { no: 2, name: "exempted_members", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditLogConfig {
    return new AuditLogConfig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditLogConfig {
    return new AuditLogConfig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditLogConfig {
    return new AuditLogConfig().fromJsonString(jsonString, options);
  }

  static equals(a: AuditLogConfig | PlainMessage<AuditLogConfig> | undefined, b: AuditLogConfig | PlainMessage<AuditLogConfig> | undefined): boolean {
    return proto3.util.equals(AuditLogConfig, a, b);
  }
}

/**
 * The list of valid permission types for which logging can be configured.
 * Admin writes are always logged, and are not configurable.
 *
 * @generated from enum google.iam.v1.AuditLogConfig.LogType
 */
export enum AuditLogConfig_LogType {
  /**
   * Default case. Should never be this.
   *
   * @generated from enum value: LOG_TYPE_UNSPECIFIED = 0;
   */
  LOG_TYPE_UNSPECIFIED = 0,

  /**
   * Admin reads. Example: CloudIAM getIamPolicy
   *
   * @generated from enum value: ADMIN_READ = 1;
   */
  ADMIN_READ = 1,

  /**
   * Data writes. Example: CloudSQL Users create
   *
   * @generated from enum value: DATA_WRITE = 2;
   */
  DATA_WRITE = 2,

  /**
   * Data reads. Example: CloudSQL Users list
   *
   * @generated from enum value: DATA_READ = 3;
   */
  DATA_READ = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(AuditLogConfig_LogType)
proto3.util.setEnumType(AuditLogConfig_LogType, "google.iam.v1.AuditLogConfig.LogType", [
  { no: 0, name: "LOG_TYPE_UNSPECIFIED" },
  { no: 1, name: "ADMIN_READ" },
  { no: 2, name: "DATA_WRITE" },
  { no: 3, name: "DATA_READ" },
]);

/**
 * The difference delta between two policies.
 *
 * @generated from message google.iam.v1.PolicyDelta
 */
export class PolicyDelta extends Message<PolicyDelta> {
  /**
   * The delta for Bindings between two policies.
   *
   * @generated from field: repeated google.iam.v1.BindingDelta binding_deltas = 1;
   */
  bindingDeltas: BindingDelta[] = [];

  /**
   * The delta for AuditConfigs between two policies.
   *
   * @generated from field: repeated google.iam.v1.AuditConfigDelta audit_config_deltas = 2;
   */
  auditConfigDeltas: AuditConfigDelta[] = [];

  constructor(data?: PartialMessage<PolicyDelta>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.iam.v1.PolicyDelta";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "binding_deltas", kind: "message", T: BindingDelta, repeated: true },
    { no: 2, name: "audit_config_deltas", kind: "message", T: AuditConfigDelta, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PolicyDelta {
    return new PolicyDelta().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PolicyDelta {
    return new PolicyDelta().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PolicyDelta {
    return new PolicyDelta().fromJsonString(jsonString, options);
  }

  static equals(a: PolicyDelta | PlainMessage<PolicyDelta> | undefined, b: PolicyDelta | PlainMessage<PolicyDelta> | undefined): boolean {
    return proto3.util.equals(PolicyDelta, a, b);
  }
}

/**
 * One delta entry for Binding. Each individual change (only one member in each
 * entry) to a binding will be a separate entry.
 *
 * @generated from message google.iam.v1.BindingDelta
 */
export class BindingDelta extends Message<BindingDelta> {
  /**
   * The action that was performed on a Binding.
   * Required
   *
   * @generated from field: google.iam.v1.BindingDelta.Action action = 1;
   */
  action = BindingDelta_Action.ACTION_UNSPECIFIED;

  /**
   * Role that is assigned to `members`.
   * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
   * Required
   *
   * @generated from field: string role = 2;
   */
  role = "";

  /**
   * A single identity requesting access for a Cloud Platform resource.
   * Follows the same format of Binding.members.
   * Required
   *
   * @generated from field: string member = 3;
   */
  member = "";

  /**
   * The condition that is associated with this binding.
   *
   * @generated from field: google.type.Expr condition = 4;
   */
  condition?: Expr;

  constructor(data?: PartialMessage<BindingDelta>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.iam.v1.BindingDelta";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "action", kind: "enum", T: proto3.getEnumType(BindingDelta_Action) },
    { no: 2, name: "role", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "member", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "condition", kind: "message", T: Expr },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BindingDelta {
    return new BindingDelta().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BindingDelta {
    return new BindingDelta().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BindingDelta {
    return new BindingDelta().fromJsonString(jsonString, options);
  }

  static equals(a: BindingDelta | PlainMessage<BindingDelta> | undefined, b: BindingDelta | PlainMessage<BindingDelta> | undefined): boolean {
    return proto3.util.equals(BindingDelta, a, b);
  }
}

/**
 * The type of action performed on a Binding in a policy.
 *
 * @generated from enum google.iam.v1.BindingDelta.Action
 */
export enum BindingDelta_Action {
  /**
   * Unspecified.
   *
   * @generated from enum value: ACTION_UNSPECIFIED = 0;
   */
  ACTION_UNSPECIFIED = 0,

  /**
   * Addition of a Binding.
   *
   * @generated from enum value: ADD = 1;
   */
  ADD = 1,

  /**
   * Removal of a Binding.
   *
   * @generated from enum value: REMOVE = 2;
   */
  REMOVE = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(BindingDelta_Action)
proto3.util.setEnumType(BindingDelta_Action, "google.iam.v1.BindingDelta.Action", [
  { no: 0, name: "ACTION_UNSPECIFIED" },
  { no: 1, name: "ADD" },
  { no: 2, name: "REMOVE" },
]);

/**
 * One delta entry for AuditConfig. Each individual change (only one
 * exempted_member in each entry) to a AuditConfig will be a separate entry.
 *
 * @generated from message google.iam.v1.AuditConfigDelta
 */
export class AuditConfigDelta extends Message<AuditConfigDelta> {
  /**
   * The action that was performed on an audit configuration in a policy.
   * Required
   *
   * @generated from field: google.iam.v1.AuditConfigDelta.Action action = 1;
   */
  action = AuditConfigDelta_Action.ACTION_UNSPECIFIED;

  /**
   * Specifies a service that was configured for Cloud Audit Logging.
   * For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
   * `allServices` is a special value that covers all services.
   * Required
   *
   * @generated from field: string service = 2;
   */
  service = "";

  /**
   * A single identity that is exempted from "data access" audit
   * logging for the `service` specified above.
   * Follows the same format of Binding.members.
   *
   * @generated from field: string exempted_member = 3;
   */
  exemptedMember = "";

  /**
   * Specifies the log_type that was be enabled. ADMIN_ACTIVITY is always
   * enabled, and cannot be configured.
   * Required
   *
   * @generated from field: string log_type = 4;
   */
  logType = "";

  constructor(data?: PartialMessage<AuditConfigDelta>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.iam.v1.AuditConfigDelta";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "action", kind: "enum", T: proto3.getEnumType(AuditConfigDelta_Action) },
    { no: 2, name: "service", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "exempted_member", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "log_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditConfigDelta {
    return new AuditConfigDelta().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditConfigDelta {
    return new AuditConfigDelta().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditConfigDelta {
    return new AuditConfigDelta().fromJsonString(jsonString, options);
  }

  static equals(a: AuditConfigDelta | PlainMessage<AuditConfigDelta> | undefined, b: AuditConfigDelta | PlainMessage<AuditConfigDelta> | undefined): boolean {
    return proto3.util.equals(AuditConfigDelta, a, b);
  }
}

/**
 * The type of action performed on an audit configuration in a policy.
 *
 * @generated from enum google.iam.v1.AuditConfigDelta.Action
 */
export enum AuditConfigDelta_Action {
  /**
   * Unspecified.
   *
   * @generated from enum value: ACTION_UNSPECIFIED = 0;
   */
  ACTION_UNSPECIFIED = 0,

  /**
   * Addition of an audit configuration.
   *
   * @generated from enum value: ADD = 1;
   */
  ADD = 1,

  /**
   * Removal of an audit configuration.
   *
   * @generated from enum value: REMOVE = 2;
   */
  REMOVE = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(AuditConfigDelta_Action)
proto3.util.setEnumType(AuditConfigDelta_Action, "google.iam.v1.AuditConfigDelta.Action", [
  { no: 0, name: "ACTION_UNSPECIFIED" },
  { no: 1, name: "ADD" },
  { no: 2, name: "REMOVE" },
]);
