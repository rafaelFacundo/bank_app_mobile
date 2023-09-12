export const handleNextPage = (
  operationType: number,
  navigation: any,
  stacks: string[],
  screens: string[],
  data: any
) => {
  if (operationType === 0) {
    navigation.navigate(stacks[0], {
      screen: screens[0],
      params: data,
    });
  } else if (operationType === 1) {
    navigation.navigate(stacks[1], {
      screen: screens[1],
      params: data,
    });
  }
};
