/**
 * Simple hasher, used to hash Strings for IDs, React Keys, etc...
 * This hasher was extracted from: https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
 * Original URL is dead...
 */
const simpleHash = (str: String) => {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    let chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

export default simpleHash;
