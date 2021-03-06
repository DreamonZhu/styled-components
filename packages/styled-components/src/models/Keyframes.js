// @flow
import StyleSheet from './StyleSheet';
import StyledError from '../utils/error';

export default class Keyframes {
  id: string;

  name: string;

  rules: Array<string>;

  constructor(name: string, rules: Array<string>) {
    this.name = name;
    this.rules = rules;

    this.id = `sc-keyframes-${name}`;
  }

  inject = (styleSheet: StyleSheet) => {
    if (!styleSheet.hasNameForId(this.id, this.name)) {
      styleSheet.inject(this.id, this.rules, this.name);
    }
  };

  toString = () => {
    throw new StyledError(12, String(this.name));
  };

  getName() {
    return this.name;
  }
}
