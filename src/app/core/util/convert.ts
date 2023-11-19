import { HttpParams } from '@angular/common/http';

export function convertToHttpParams(obj: any, parentKey: string = '', params: HttpParams = new HttpParams()): HttpParams {
  Object.keys(obj).forEach(key => {
    if (obj[key] != null) { // Check if the property is not null or undefined
      const value = obj[key];
      const fullKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof value === 'object' && !Array.isArray(value)) {
        // If the value is an object, recurse
        params = convertToHttpParams(value, fullKey, params);
      } else {
        // Set the param, converting arrays to comma-separated values
        params = params.set(fullKey, Array.isArray(value) ? value.join(',') : value.toString());
      }
    }
  });

  return params;
}
