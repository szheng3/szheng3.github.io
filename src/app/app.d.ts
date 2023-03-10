// declare var $: JQueryStatic;

interface JQuery {
  // tslint:disable-next-line:ban-types
  daterangepicker(options?: any, callback?: Function): any;

  buttonState(options: 'reset' | 'loading'): any;

  modal(method: 'open' | 'close' | 'destroy' | 'hide'): JQuery;

  selectpicker(): void;
}

declare var gallery: any;
