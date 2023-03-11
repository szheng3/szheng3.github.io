import {HttpParams} from "@angular/common/http";

export const getUrlParam = ({
                              uri,
                              obj = {}
                            }: any) => {
  const param = Object.keys(obj)
    .map(key => {
      return key + '=' + obj[key];
    })
    .join('&');

  return uri + (param ? '?' + param : '');
};


export const buildParam = (param: any) => {
  let httpParams = new HttpParams();
  Object.keys(param).forEach((key) => {
    let value = param[key];
    if (value) {
      httpParams = httpParams.append(key, value);
    }
  });
  return httpParams;
}
