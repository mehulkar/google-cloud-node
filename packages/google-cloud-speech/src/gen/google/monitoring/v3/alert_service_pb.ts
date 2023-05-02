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
// @generated from file google/monitoring/v3/alert_service.proto (package google.monitoring.v3, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { FieldMask, Message, proto3 } from "@bufbuild/protobuf";
import { AlertPolicy } from "./alert_pb.js";

/**
 * The protocol for the `CreateAlertPolicy` request.
 *
 * @generated from message google.monitoring.v3.CreateAlertPolicyRequest
 */
export class CreateAlertPolicyRequest extends Message<CreateAlertPolicyRequest> {
  /**
   * Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) in
   * which to create the alerting policy. The format is:
   *
   *     projects/[PROJECT_ID_OR_NUMBER]
   *
   * Note that this field names the parent container in which the alerting
   * policy will be written, not the name of the created policy. |name| must be
   * a host project of a Metrics Scope, otherwise INVALID_ARGUMENT error will
   * return. The alerting policy that is returned will have a name that contains
   * a normalized representation of this name as a prefix but adds a suffix of
   * the form `/alertPolicies/[ALERT_POLICY_ID]`, identifying the policy in the
   * container.
   *
   * @generated from field: string name = 3;
   */
  name = "";

  /**
   * Required. The requested alerting policy. You should omit the `name` field in this
   * policy. The name will be returned in the new policy, including
   * a new `[ALERT_POLICY_ID]` value.
   *
   * @generated from field: google.monitoring.v3.AlertPolicy alert_policy = 2;
   */
  alertPolicy?: AlertPolicy;

  constructor(data?: PartialMessage<CreateAlertPolicyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.monitoring.v3.CreateAlertPolicyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "alert_policy", kind: "message", T: AlertPolicy },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateAlertPolicyRequest {
    return new CreateAlertPolicyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateAlertPolicyRequest {
    return new CreateAlertPolicyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateAlertPolicyRequest {
    return new CreateAlertPolicyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateAlertPolicyRequest | PlainMessage<CreateAlertPolicyRequest> | undefined, b: CreateAlertPolicyRequest | PlainMessage<CreateAlertPolicyRequest> | undefined): boolean {
    return proto3.util.equals(CreateAlertPolicyRequest, a, b);
  }
}

/**
 * The protocol for the `GetAlertPolicy` request.
 *
 * @generated from message google.monitoring.v3.GetAlertPolicyRequest
 */
export class GetAlertPolicyRequest extends Message<GetAlertPolicyRequest> {
  /**
   * Required. The alerting policy to retrieve. The format is:
   *
   *     projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID]
   *
   * @generated from field: string name = 3;
   */
  name = "";

  constructor(data?: PartialMessage<GetAlertPolicyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.monitoring.v3.GetAlertPolicyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAlertPolicyRequest {
    return new GetAlertPolicyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAlertPolicyRequest {
    return new GetAlertPolicyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAlertPolicyRequest {
    return new GetAlertPolicyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetAlertPolicyRequest | PlainMessage<GetAlertPolicyRequest> | undefined, b: GetAlertPolicyRequest | PlainMessage<GetAlertPolicyRequest> | undefined): boolean {
    return proto3.util.equals(GetAlertPolicyRequest, a, b);
  }
}

/**
 * The protocol for the `ListAlertPolicies` request.
 *
 * @generated from message google.monitoring.v3.ListAlertPoliciesRequest
 */
export class ListAlertPoliciesRequest extends Message<ListAlertPoliciesRequest> {
  /**
   * Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name)
   * whose alert policies are to be listed. The format is:
   *
   *     projects/[PROJECT_ID_OR_NUMBER]
   *
   * Note that this field names the parent container in which the alerting
   * policies to be listed are stored. To retrieve a single alerting policy
   * by name, use the
   * [GetAlertPolicy][google.monitoring.v3.AlertPolicyService.GetAlertPolicy]
   * operation, instead.
   *
   * @generated from field: string name = 4;
   */
  name = "";

  /**
   * If provided, this field specifies the criteria that must be met by
   * alert policies to be included in the response.
   *
   * For more details, see [sorting and
   * filtering](https://cloud.google.com/monitoring/api/v3/sorting-and-filtering).
   *
   * @generated from field: string filter = 5;
   */
  filter = "";

  /**
   * A comma-separated list of fields by which to sort the result. Supports
   * the same set of field references as the `filter` field. Entries can be
   * prefixed with a minus sign to sort by the field in descending order.
   *
   * For more details, see [sorting and
   * filtering](https://cloud.google.com/monitoring/api/v3/sorting-and-filtering).
   *
   * @generated from field: string order_by = 6;
   */
  orderBy = "";

  /**
   * The maximum number of results to return in a single response.
   *
   * @generated from field: int32 page_size = 2;
   */
  pageSize = 0;

  /**
   * If this field is not empty then it must contain the `nextPageToken` value
   * returned by a previous call to this method.  Using this field causes the
   * method to return more results from the previous method call.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken = "";

  constructor(data?: PartialMessage<ListAlertPoliciesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.monitoring.v3.ListAlertPoliciesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "filter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "order_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAlertPoliciesRequest {
    return new ListAlertPoliciesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAlertPoliciesRequest {
    return new ListAlertPoliciesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAlertPoliciesRequest {
    return new ListAlertPoliciesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListAlertPoliciesRequest | PlainMessage<ListAlertPoliciesRequest> | undefined, b: ListAlertPoliciesRequest | PlainMessage<ListAlertPoliciesRequest> | undefined): boolean {
    return proto3.util.equals(ListAlertPoliciesRequest, a, b);
  }
}

/**
 * The protocol for the `ListAlertPolicies` response.
 *
 * @generated from message google.monitoring.v3.ListAlertPoliciesResponse
 */
export class ListAlertPoliciesResponse extends Message<ListAlertPoliciesResponse> {
  /**
   * The returned alert policies.
   *
   * @generated from field: repeated google.monitoring.v3.AlertPolicy alert_policies = 3;
   */
  alertPolicies: AlertPolicy[] = [];

  /**
   * If there might be more results than were returned, then this field is set
   * to a non-empty value. To see the additional results,
   * use that value as `page_token` in the next call to this method.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  /**
   * The total number of alert policies in all pages. This number is only an
   * estimate, and may change in subsequent pages. https://aip.dev/158
   *
   * @generated from field: int32 total_size = 4;
   */
  totalSize = 0;

  constructor(data?: PartialMessage<ListAlertPoliciesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.monitoring.v3.ListAlertPoliciesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 3, name: "alert_policies", kind: "message", T: AlertPolicy, repeated: true },
    { no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "total_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAlertPoliciesResponse {
    return new ListAlertPoliciesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAlertPoliciesResponse {
    return new ListAlertPoliciesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAlertPoliciesResponse {
    return new ListAlertPoliciesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListAlertPoliciesResponse | PlainMessage<ListAlertPoliciesResponse> | undefined, b: ListAlertPoliciesResponse | PlainMessage<ListAlertPoliciesResponse> | undefined): boolean {
    return proto3.util.equals(ListAlertPoliciesResponse, a, b);
  }
}

/**
 * The protocol for the `UpdateAlertPolicy` request.
 *
 * @generated from message google.monitoring.v3.UpdateAlertPolicyRequest
 */
export class UpdateAlertPolicyRequest extends Message<UpdateAlertPolicyRequest> {
  /**
   * Optional. A list of alerting policy field names. If this field is not
   * empty, each listed field in the existing alerting policy is set to the
   * value of the corresponding field in the supplied policy (`alert_policy`),
   * or to the field's default value if the field is not in the supplied
   * alerting policy.  Fields not listed retain their previous value.
   *
   * Examples of valid field masks include `display_name`, `documentation`,
   * `documentation.content`, `documentation.mime_type`, `user_labels`,
   * `user_label.nameofkey`, `enabled`, `conditions`, `combiner`, etc.
   *
   * If this field is empty, then the supplied alerting policy replaces the
   * existing policy. It is the same as deleting the existing policy and
   * adding the supplied policy, except for the following:
   *
   * +   The new policy will have the same `[ALERT_POLICY_ID]` as the former
   *     policy. This gives you continuity with the former policy in your
   *     notifications and incidents.
   * +   Conditions in the new policy will keep their former `[CONDITION_ID]` if
   *     the supplied condition includes the `name` field with that
   *     `[CONDITION_ID]`. If the supplied condition omits the `name` field,
   *     then a new `[CONDITION_ID]` is created.
   *
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  /**
   * Required. The updated alerting policy or the updated values for the
   * fields listed in `update_mask`.
   * If `update_mask` is not empty, any fields in this policy that are
   * not in `update_mask` are ignored.
   *
   * @generated from field: google.monitoring.v3.AlertPolicy alert_policy = 3;
   */
  alertPolicy?: AlertPolicy;

  constructor(data?: PartialMessage<UpdateAlertPolicyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.monitoring.v3.UpdateAlertPolicyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "update_mask", kind: "message", T: FieldMask },
    { no: 3, name: "alert_policy", kind: "message", T: AlertPolicy },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateAlertPolicyRequest {
    return new UpdateAlertPolicyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateAlertPolicyRequest {
    return new UpdateAlertPolicyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateAlertPolicyRequest {
    return new UpdateAlertPolicyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateAlertPolicyRequest | PlainMessage<UpdateAlertPolicyRequest> | undefined, b: UpdateAlertPolicyRequest | PlainMessage<UpdateAlertPolicyRequest> | undefined): boolean {
    return proto3.util.equals(UpdateAlertPolicyRequest, a, b);
  }
}

/**
 * The protocol for the `DeleteAlertPolicy` request.
 *
 * @generated from message google.monitoring.v3.DeleteAlertPolicyRequest
 */
export class DeleteAlertPolicyRequest extends Message<DeleteAlertPolicyRequest> {
  /**
   * Required. The alerting policy to delete. The format is:
   *
   *     projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID]
   *
   * For more information, see [AlertPolicy][google.monitoring.v3.AlertPolicy].
   *
   * @generated from field: string name = 3;
   */
  name = "";

  constructor(data?: PartialMessage<DeleteAlertPolicyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.monitoring.v3.DeleteAlertPolicyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteAlertPolicyRequest {
    return new DeleteAlertPolicyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteAlertPolicyRequest {
    return new DeleteAlertPolicyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteAlertPolicyRequest {
    return new DeleteAlertPolicyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteAlertPolicyRequest | PlainMessage<DeleteAlertPolicyRequest> | undefined, b: DeleteAlertPolicyRequest | PlainMessage<DeleteAlertPolicyRequest> | undefined): boolean {
    return proto3.util.equals(DeleteAlertPolicyRequest, a, b);
  }
}
