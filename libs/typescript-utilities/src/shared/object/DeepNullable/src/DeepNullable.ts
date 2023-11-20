import { BuiltIn, TakeIfIsTupleOrNever } from '../../../@essentials';

/**
 * Recursively transform all properties of an object, including nested objects, into nullable properties.
 * @param {object} sourceObject Source object.
 * @example ```typescript
type UserProfile = {
  id: number;
  details: {
    name: string;
    age: number;
  };
};
type NullableUserProfile = DeepNullable<UserProfile>;
// Result type:
// {
//   id?: number | null;
//   details?: {
//     name?: string | null;
//     age?: number | null;
//   } | null;
// }
  ```
 */
export type DeepNullable<T> = T extends BuiltIn
  ? T | null
  : T extends Map<infer K, infer V>
  ? Map<DeepNullable<K>, DeepNullable<V>>
  : T extends ReadonlyMap<infer K, infer V>
  ? ReadonlyMap<DeepNullable<K>, DeepNullable<V>>
  : T extends WeakMap<infer K, infer V>
  ? WeakMap<DeepNullable<K>, DeepNullable<V>>
  : T extends Set<infer U>
  ? Set<DeepNullable<U>>
  : T extends ReadonlySet<infer U>
  ? ReadonlySet<DeepNullable<U>>
  : T extends WeakSet<infer U>
  ? WeakSet<DeepNullable<U>>
  : T extends Array<infer U>
  ? T extends TakeIfIsTupleOrNever<T>
    ? { [K in keyof T]: DeepNullable<T[K]> | null }
    : Array<DeepNullable<U>>
  : T extends Promise<infer U>
  ? Promise<DeepNullable<U>>
  : T extends {}
  ? { [K in keyof T]: DeepNullable<T[K]> }
  : T | null;
