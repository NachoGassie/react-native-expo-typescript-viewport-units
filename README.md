This is highly based in the [react-native-expo-viewport-units.](https://www.npmjs.com/package/react-native-expo-viewport-units) I have developed for TypeScript support and code reusability.   

The following documentation is based on the original package as well.

## Usage

```
import { vw, vh, vmin, vmax } from 'react-native-expo-typescript-viewport-units';
```

```
const styles = StyleSheet.create({
  Container: {
    width: vmin(95),
    height: vmax(70),
    padding: vw(2.5),
    margin: vh(5),
  },
  Font: {
    fontSize: vw(3.75),
  },
});
```
