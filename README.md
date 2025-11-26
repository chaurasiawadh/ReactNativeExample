# NativeBase Component Explorer (React Native)

An interactive tutorial app showcasing all NativeBase 3.4.x components, built with React Native and React Navigation. Browse components, view multiple variants, and toggle light/dark themes globally.

## Prerequisites

- Node.js 16+
- React Native CLI environment (Android Studio and/or Xcode)
- CocoaPods (for iOS): `sudo gem install cocoapods`

## Installation

1) Install dependencies

```bash
# From project root
npm install
```

2) iOS pods

```bash
cd ios && pod install && cd ..
```

3) Android additional steps (Reanimated)

- Ensure `babel.config.js` includes the plugin: `react-native-reanimated/plugin` (already configured)
- If you see any Android Gradle sync issues, clean and rebuild

## Run the App

```bash
# iOS
npm run ios

# Android (emulator or device)
npm run android
```

## Project Structure

```
src/
  components/
    demo-wrapper/
    section-header/
    theme-toggle/
  constants/
    routes.ts
    strings.ts
  data/
    components.ts
  navigation/
    app-navigation.tsx
    index.ts
  screens/
    home/
    settings/
    components/
      layout-box/
      layout-center/
      layout-stack/
      layout-zstack/
      ui-action-sheet/
      ui-alert/
      ui-alert-dialog/
      ui-avatar/
      ui-badge/
      ui-button/
      ui-checkbox/
      ui-divider/
      ui-fab/
      ui-form-control/
      ui-icon/
      ui-icon-button/
      ui-image/
      ui-input/
      ui-link/
      ui-menu/
      ui-modal/
      ui-pressable/
      ui-presence-transition/
      ui-progress/
      ui-radio/
      ui-select/
      ui-skeleton/
      ui-slider/
      ui-spinner/
      ui-tabs/
      ui-text/
      ui-text-area/
      ui-tooltip/
      ui-toast/
  theme/
    colors.ts
    index.ts
    spacing.ts
    typography.ts
    color-mode-manager.ts
```

## Theme

The app uses `NativeBaseProvider` with a custom theme (`src/theme`). It defines:
- Primary/secondary palettes
- Typography font mapping
- Spacing and radii tokens
- Color mode (light/dark) persisted with AsyncStorage

Use the Theme toggle in Settings to switch modes.

## Navigation

- Drawer with:
  - Components (stack of all component demo screens)
  - Settings
- Components list screen includes search and logical grouping.

## How to Add a New NativeBase Component Demo

1) Create a screen folder in `src/screens/components/` using kebab-case:
```
src/screens/components/ui-my-component/
  index.ts
  ui-my-component.tsx
  ui-my-component.styles.ts
```

2) Implement the demo as a functional component:
```tsx
// ui-my-component.tsx
export const MyComponentDemoScreen: React.FC = () => {
  return <DemoWrapper title="MyComponent">...</DemoWrapper>;
};
```

3) Export it from `src/screens/components/index.ts`:
```ts
export {MyComponentDemoScreen} from './ui-my-component';
```

4) Add a route name to `src/constants/routes.ts` and include it in `src/data/components.ts` under a section.

5) Register the screen in `src/navigation/app-navigation.tsx` (in `ComponentsStack`).

That’s it — it will appear in the Components list and be navigable.

## Coding Standards

- TypeScript, functional components, no `any`
- Small, reusable components with clear names
- No hardcoded colors — use theme tokens
- Separate styles in `*.styles.ts` (kebab-case)
- Components exported with `export const`
- Keep conditional rendering outside JSX via memoization when needed

## References

- NativeBase docs: https://docs.nativebase.io/getting-started
- React Navigation: https://reactnavigation.org/
*** End Patch

