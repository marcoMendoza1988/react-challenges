export interface Elements {
      first: Array<string>;
      last: Array<string>;
  }
  
  // export interface ElementState {
  //   elements: any[];
  // }
  
  export const ADD_ELEMENT = 'ADD_ELEMENT';
  
  export interface AddElementAction {
    type: typeof ADD_ELEMENT;
    payload: Elements;
  }
  
  export type ElementActionTypes = AddElementAction;
  