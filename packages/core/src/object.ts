import { object } from "prop-types";

/**
 * Generates unique ids.
 * @param prefix (optional) The `id` prefix.
 * @return The generated `id`.
 */
export const guid = (prefix?: string) => `${prefix || ''}${(Math.random() * (1 << 30)).toString(16).replace('.', '')}`;

/**
 * Encodes an Object, Array or other value.
 * @param o The variable to encode.
 * @return The JSON string.
 */
export const encode = (o: any) => JSON.stringify(o);

/**
 * Decodes (parses) a JSON string to an object. If the JSON is invalid, this function throws a SyntaxError.
 * @param json The JSON string.
 * @return The resulting object.
 */
export const decode = (json: string) => JSON.parse(json);

/**
 * Clone simple variables including array, {}-like objects, DOM nodes and Date without
 * keeping the old reference. A reference for the object itself is returned if it's not
 * a direct descendant of Object.
 * @param item The variable to clone
 */
export const clone = (item: any) => decode(encode(item));

/**
 * Merges any number of objects recursively without referencing them or their children.
 * @param destination The object into which all subsequent objects are merged.
 * @param object Any number of objects to merge into the destination.
 * @return The destination object with all passed objects merged in.
 */
export const merge = (destination: any, ...object: any[]) => Object.assign(destination, ...object)