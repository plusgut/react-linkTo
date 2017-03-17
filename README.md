React-LinkTo
===

This is a simple component for generating an a-tag.
The given onClick property will only be executed, when no modifier key is pressed.
Else the normal browser behaviour will be done.

As modifier-keys are used ctrl, shift, alt and the mac-cmd

```jsx
  <LinkTo href="/path/to/something" onClick={this.doSomethingElse}>
    Text to click
  </LinkTo>
```