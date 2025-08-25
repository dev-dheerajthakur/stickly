// export default class CreateNewStyle {
//     constructor(styles: StyleSheet) {
//         return { name: " dheeraj "};
//     }
// }

import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";



// Union of all style props
type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

class CreateNewStyle {
    constructor(styles: NamedStyles<any>) {
        return styles;
    }
}

new CreateNewStyle({
    container: {
        color: "333"
    }
})