# haunted-app

A small receipt printer that depends on abandoned npm packages: `left-pad`, `trim@0.0.1` (ReDoS advisory CVE-2020-7753), `request` and others. It is the demo target for [Graveyard Shift](https://github.com/Rangesh11/graveyard-shift), which finds dead dependencies and opens pull requests that replace them, with property-based proof that the new code behaves like the old.

The open pull requests here were created by `graveyard resurrect <package> --open-pr`.

```bash
npm install && npm test && npm start
```
