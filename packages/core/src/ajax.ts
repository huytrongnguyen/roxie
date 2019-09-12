import $ from 'jquery';

export type HttpParams = {
  pathParams?: { [key:string]: any },
  queryParams?: { [key:string]: any },
  body?: any;
}

export type AjaxSettings = {
  url: string,
  method?: string,
  params?: HttpParams,
  onError?: (msg: string) => void,
  onComplete?: () => void,
}

export const Ajax = {
  request: async <T>(settings: AjaxSettings) => {
    const { method = 'get', params = {}, onError, onComplete } = settings;
    let { url } = settings;

    if (params.pathParams) {
      Object.entries(params.pathParams).forEach(([key,value]) => url = url.replace(`{${key}}`, value))
    }

    if (params.queryParams) {
      url = `${url}?${Object.entries(params.queryParams).map(([key,value]) => `${key}=${value}`).join('&')}`
    }

    try {
      const jqAjaxSettings: JQueryAjaxSettings = { url, method, contentType: 'application/json;charset=UTF-8' };
      params.body && (jqAjaxSettings.data = JSON.stringify(params.body));
      return (await $.ajax(jqAjaxSettings)) as T;
    } catch (jqXHR) {
      const { responseText, status, statusText } = jqXHR,
            msg = `Http failure response for "${url}": ${responseText || `${status} ${statusText}`}`;
      console.error(msg);
      onError && onError(msg);
      return null;
    } finally {
      onComplete && onComplete();
    }
  },
}