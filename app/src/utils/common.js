import Colors from "../constants/ConstantColors";

export const headerOptions = (headerTitle = "EBUS") => ( {
    title: null,
    headerStyle: {
      // backgroundColor: Colors.tintColor,
      backgroundColor: "transparent",
      elevation: 0,
    },
    headerTintColor: Colors.headerTintColor,
    // headerTitleStyle: {
    //   flex: 1,
    //   fontWeight: "bold",
    //   alignSelf: "center"
    // },
  })
