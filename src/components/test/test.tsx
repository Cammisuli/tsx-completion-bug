import { Component, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'app-tester'
})
export class Test {
  /**
   * The Name of the component to test
   */
  @Prop()
  name: string = '';

  @Watch('name')
  nameHandler(newValue: string, oldValue: string) {
    console.log(`Oldvalue is: ${oldValue}, new value is: ${newValue}`);
  }

  constructor() {}

  componentDidLoad() {
    console.log(this.name);
  }

  render() {
    return <div>{this.name}</div>;
  }
}
