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
// @generated from file google/api/expr/v1alpha1/eval.proto (package google.api.expr.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Value } from "./value_pb.js";
import { Status } from "../../../rpc/status_pb.js";

/**
 * The state of an evaluation.
 *
 * Can represent an inital, partial, or completed state of evaluation.
 *
 * @generated from message google.api.expr.v1alpha1.EvalState
 */
export class EvalState extends Message<EvalState> {
  /**
   * The unique values referenced in this message.
   *
   * @generated from field: repeated google.api.expr.v1alpha1.ExprValue values = 1;
   */
  values: ExprValue[] = [];

  /**
   * An ordered list of results.
   *
   * Tracks the flow of evaluation through the expression.
   * May be sparse.
   *
   * @generated from field: repeated google.api.expr.v1alpha1.EvalState.Result results = 3;
   */
  results: EvalState_Result[] = [];

  constructor(data?: PartialMessage<EvalState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.expr.v1alpha1.EvalState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "values", kind: "message", T: ExprValue, repeated: true },
    { no: 3, name: "results", kind: "message", T: EvalState_Result, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EvalState {
    return new EvalState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EvalState {
    return new EvalState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EvalState {
    return new EvalState().fromJsonString(jsonString, options);
  }

  static equals(a: EvalState | PlainMessage<EvalState> | undefined, b: EvalState | PlainMessage<EvalState> | undefined): boolean {
    return proto3.util.equals(EvalState, a, b);
  }
}

/**
 * A single evalution result.
 *
 * @generated from message google.api.expr.v1alpha1.EvalState.Result
 */
export class EvalState_Result extends Message<EvalState_Result> {
  /**
   * The id of the expression this result if for.
   *
   * @generated from field: int64 expr = 1;
   */
  expr = protoInt64.zero;

  /**
   * The index in `values` of the resulting value.
   *
   * @generated from field: int64 value = 2;
   */
  value = protoInt64.zero;

  constructor(data?: PartialMessage<EvalState_Result>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.expr.v1alpha1.EvalState.Result";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "expr", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "value", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EvalState_Result {
    return new EvalState_Result().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EvalState_Result {
    return new EvalState_Result().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EvalState_Result {
    return new EvalState_Result().fromJsonString(jsonString, options);
  }

  static equals(a: EvalState_Result | PlainMessage<EvalState_Result> | undefined, b: EvalState_Result | PlainMessage<EvalState_Result> | undefined): boolean {
    return proto3.util.equals(EvalState_Result, a, b);
  }
}

/**
 * The value of an evaluated expression.
 *
 * @generated from message google.api.expr.v1alpha1.ExprValue
 */
export class ExprValue extends Message<ExprValue> {
  /**
   * An expression can resolve to a value, error or unknown.
   *
   * @generated from oneof google.api.expr.v1alpha1.ExprValue.kind
   */
  kind: {
    /**
     * A concrete value.
     *
     * @generated from field: google.api.expr.v1alpha1.Value value = 1;
     */
    value: Value;
    case: "value";
  } | {
    /**
     * The set of errors in the critical path of evalution.
     *
     * Only errors in the critical path are included. For example,
     * `(<error1> || true) && <error2>` will only result in `<error2>`,
     * while `<error1> || <error2>` will result in both `<error1>` and
     * `<error2>`.
     *
     * Errors cause by the presence of other errors are not included in the
     * set. For example `<error1>.foo`, `foo(<error1>)`, and `<error1> + 1` will
     * only result in `<error1>`.
     *
     * Multiple errors *might* be included when evaluation could result
     * in different errors. For example `<error1> + <error2>` and
     * `foo(<error1>, <error2>)` may result in `<error1>`, `<error2>` or both.
     * The exact subset of errors included for this case is unspecified and
     * depends on the implementation details of the evaluator.
     *
     * @generated from field: google.api.expr.v1alpha1.ErrorSet error = 2;
     */
    value: ErrorSet;
    case: "error";
  } | {
    /**
     * The set of unknowns in the critical path of evaluation.
     *
     * Unknown behaves identically to Error with regards to propagation.
     * Specifically, only unknowns in the critical path are included, unknowns
     * caused by the presence of other unknowns are not included, and multiple
     * unknowns *might* be included included when evaluation could result in
     * different unknowns. For example:
     *
     *     (<unknown[1]> || true) && <unknown[2]> -> <unknown[2]>
     *     <unknown[1]> || <unknown[2]> -> <unknown[1,2]>
     *     <unknown[1]>.foo -> <unknown[1]>
     *     foo(<unknown[1]>) -> <unknown[1]>
     *     <unknown[1]> + <unknown[2]> -> <unknown[1]> or <unknown[2[>
     *
     * Unknown takes precidence over Error in cases where a `Value` can short
     * circuit the result:
     *
     *     <error> || <unknown> -> <unknown>
     *     <error> && <unknown> -> <unknown>
     *
     * Errors take precidence in all other cases:
     *
     *     <unknown> + <error> -> <error>
     *     foo(<unknown>, <error>) -> <error>
     *
     * @generated from field: google.api.expr.v1alpha1.UnknownSet unknown = 3;
     */
    value: UnknownSet;
    case: "unknown";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<ExprValue>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.expr.v1alpha1.ExprValue";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "message", T: Value, oneof: "kind" },
    { no: 2, name: "error", kind: "message", T: ErrorSet, oneof: "kind" },
    { no: 3, name: "unknown", kind: "message", T: UnknownSet, oneof: "kind" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExprValue {
    return new ExprValue().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExprValue {
    return new ExprValue().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExprValue {
    return new ExprValue().fromJsonString(jsonString, options);
  }

  static equals(a: ExprValue | PlainMessage<ExprValue> | undefined, b: ExprValue | PlainMessage<ExprValue> | undefined): boolean {
    return proto3.util.equals(ExprValue, a, b);
  }
}

/**
 * A set of errors.
 *
 * The errors included depend on the context. See `ExprValue.error`.
 *
 * @generated from message google.api.expr.v1alpha1.ErrorSet
 */
export class ErrorSet extends Message<ErrorSet> {
  /**
   * The errors in the set.
   *
   * @generated from field: repeated google.rpc.Status errors = 1;
   */
  errors: Status[] = [];

  constructor(data?: PartialMessage<ErrorSet>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.expr.v1alpha1.ErrorSet";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "errors", kind: "message", T: Status, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ErrorSet {
    return new ErrorSet().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ErrorSet {
    return new ErrorSet().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ErrorSet {
    return new ErrorSet().fromJsonString(jsonString, options);
  }

  static equals(a: ErrorSet | PlainMessage<ErrorSet> | undefined, b: ErrorSet | PlainMessage<ErrorSet> | undefined): boolean {
    return proto3.util.equals(ErrorSet, a, b);
  }
}

/**
 * A set of expressions for which the value is unknown.
 *
 * The unknowns included depend on the context. See `ExprValue.unknown`.
 *
 * @generated from message google.api.expr.v1alpha1.UnknownSet
 */
export class UnknownSet extends Message<UnknownSet> {
  /**
   * The ids of the expressions with unknown values.
   *
   * @generated from field: repeated int64 exprs = 1;
   */
  exprs: bigint[] = [];

  constructor(data?: PartialMessage<UnknownSet>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.api.expr.v1alpha1.UnknownSet";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "exprs", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnknownSet {
    return new UnknownSet().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnknownSet {
    return new UnknownSet().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnknownSet {
    return new UnknownSet().fromJsonString(jsonString, options);
  }

  static equals(a: UnknownSet | PlainMessage<UnknownSet> | undefined, b: UnknownSet | PlainMessage<UnknownSet> | undefined): boolean {
    return proto3.util.equals(UnknownSet, a, b);
  }
}
