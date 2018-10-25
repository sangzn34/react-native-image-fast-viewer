import { TextStyle, ViewStyle } from 'react-native';

export interface ImageViewerStyles {
  modalContainer?: ViewStyle,
  watchOrigin?: ViewStyle,
  watchOriginTouchable?: ViewStyle,
  watchOriginText?: TextStyle,
  imageStyle?: ViewStyle,
  container?: ViewStyle,
  moveBox?: ViewStyle,
  menuContainer?: ViewStyle,
  menuShadow?: ViewStyle,
  menuContent?: ViewStyle,
  operateContainer?: ViewStyle,
  operateText?: TextStyle,
  loadingTouchable?: ViewStyle,
  loadingContainer?: ViewStyle,
  arrowLeftContainer?: ViewStyle,
  arrowRightContainer?: ViewStyle
}

export default (
  width: number,
  height: number,
  backgroundColor: string,
  mixinStyles: ImageViewerStyles
): ImageViewerStyles => {
  return {
    modalContainer: { backgroundColor, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', ...mixinStyles.modalContainer },
    watchOrigin: { position: 'absolute', width, bottom: 20, justifyContent: 'center', alignItems: 'center', ...mixinStyles.watchOrigin },
    watchOriginTouchable: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5,
      paddingBottom: 5,
      borderRadius: 30,
      borderColor: 'white',
      borderWidth: 0.5,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      ...mixinStyles.watchOriginTouchable
    },
    watchOriginText: { color: 'white', backgroundColor: 'transparent', ...mixinStyles.watchOriginText },
    imageStyle: { ...mixinStyles.imageStyle },
    container: { backgroundColor, ...mixinStyles.container }, // 多图浏览需要调整整体位置的盒子
    moveBox: { flexDirection: 'row', alignItems: 'center', ...mixinStyles.moveBox },
    menuContainer: { position: 'absolute', width, height, left: 0, bottom: 0, zIndex: 12, ...mixinStyles.menuContainer },
    menuShadow: {
      position: 'absolute',
      width,
      height,
      backgroundColor: 'black',
      left: 0,
      bottom: 0,
      opacity: 0.2,
      zIndex: 10,
      ...mixinStyles.menuShadow
    },
    menuContent: { position: 'absolute', width, left: 0, bottom: 0, zIndex: 11, ...mixinStyles.menuContent },
    operateContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      height: 40,
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      ...mixinStyles.operateContainer
    },
    operateText: { color: '#333', ...mixinStyles.operateText },
    loadingTouchable: { width, height, ...mixinStyles.loadingTouchable },
    loadingContainer: { justifyContent: 'center', alignItems: 'center', ...mixinStyles.loadingContainer },
    arrowLeftContainer: { position: 'absolute', top: 0, bottom: 0, left: 0, justifyContent: 'center', zIndex: 13, ...mixinStyles.arrowLeftContainer },
    arrowRightContainer: { position: 'absolute', top: 0, bottom: 0, right: 0, justifyContent: 'center', zIndex: 13, ...mixinStyles.arrowRightContainer },
  };
};

export const simpleStyle: {
  [x: string]: ViewStyle | TextStyle;
} = {
  count: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 38,
    zIndex: -1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  countText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {
      width: 0,
      height: 0.5
    },
    textShadowRadius: 0
  }
};
