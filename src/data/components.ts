import { ROUTES } from '../constants/routes';
import { STRINGS } from '../constants/strings';

export interface ComponentItem {
  name: string;
  route: string;
  title: string;
}

export interface ComponentSection {
  title: string;
  data: ComponentItem[];
}

export const COMPONENT_SECTIONS: ComponentSection[] = [
  {
    title: STRINGS.sections.designs,
    data: [
      { name: 'AppBar', route: ROUTES.APP_BAR, title: 'App Bar' },
      { name: 'Card', route: ROUTES.CARD, title: 'Card' },
      { name: 'Tab View', route: ROUTES.TAB_VIEW, title: 'Tab View' },
      { name: 'Swipe List', route: ROUTES.SWIPE_LIST, title: 'Swipe List' },
      { name: 'Form with Validation', route: ROUTES.FORM_WITH_VALIDATION, title: 'Form with Validation' },
      { name: 'Login/Signup Forms', route: ROUTES.LOGIN_SIGNUP_FORMS, title: 'Login/Signup Forms' },
      { name: 'Search Bar', route: ROUTES.SEARCH_BAR, title: 'Search Bar' },
      { name: 'App Drawer', route: ROUTES.APP_DRAWER, title: 'App Drawer' },
      { name: 'Footer', route: ROUTES.FOOTER, title: 'Footer' },
      { name: 'Todo List', route: ROUTES.TODO_LIST, title: 'Todo List' },
    ],
  },
  {
    title: STRINGS.sections.typography,
    data: [
      { name: 'Heading', route: ROUTES.HEADING, title: 'Heading' },
      { name: 'Text', route: ROUTES.TEXT, title: 'Text' },
      { name: 'Link', route: ROUTES.LINK, title: 'Link' },
      { name: 'Divider', route: ROUTES.DIVIDER, title: 'Divider' },
    ],
  },
  {
    title: STRINGS.sections.layout,
    data: [
      { name: 'Box', route: ROUTES.LAYOUT_BOX, title: 'Box' },
      { name: 'Stack (VStack/HStack)', route: ROUTES.LAYOUT_STACK, title: 'Stack (VStack/HStack)' },
      { name: 'Center', route: ROUTES.LAYOUT_CENTER, title: 'Center' },
      { name: 'ZStack', route: ROUTES.LAYOUT_ZSTACK, title: 'ZStack' },
      { name: 'Pressable', route: ROUTES.PRESSABLE, title: 'Pressable' },
      { name: 'PresenceTransition', route: ROUTES.TRANSITION, title: 'Presence Transition' },
      { name: 'Fab', route: ROUTES.FAB, title: 'Fab' },
    ],
  },
  {
    title: STRINGS.sections.inputs,
    data: [
      { name: 'Button', route: ROUTES.BUTTON, title: 'Button' },
      { name: 'IconButton', route: ROUTES.ICON_BUTTON, title: 'Icon Button' },
      { name: 'Input', route: ROUTES.INPUT, title: 'Input' },
      { name: 'TextArea', route: ROUTES.TEXT_AREA, title: 'Text Area' },
      { name: 'Select', route: ROUTES.SELECT, title: 'Select' },
      { name: 'Checkbox', route: ROUTES.CHECKBOX, title: 'Checkbox' },
      { name: 'Radio', route: ROUTES.RADIO, title: 'Radio' },
      { name: 'Switch', route: ROUTES.SWITCH, title: 'Switch' },
      { name: 'Slider', route: ROUTES.SLIDER, title: 'Slider' },
      { name: 'FormControl', route: ROUTES.FORM_CONTROL, title: 'Form Control' },
      { name: 'Menu', route: ROUTES.MENU, title: 'Menu' },
    ],
  },
  {
    title: STRINGS.sections.dataDisplay,
    data: [
      { name: 'Avatar', route: ROUTES.AVATAR, title: 'Avatar' },
      { name: 'Badge', route: ROUTES.BADGE, title: 'Badge' },
      { name: 'Icon', route: ROUTES.ICON, title: 'Icon' },
      { name: 'Image', route: ROUTES.IMAGE, title: 'Image' },
      { name: 'Progress', route: ROUTES.PROGRESS, title: 'Progress' },
      { name: 'Skeleton', route: ROUTES.SKELETON, title: 'Skeleton' },
      { name: 'Spinner', route: ROUTES.SPINNER, title: 'Spinner' },
    ],
  },
  {
    title: STRINGS.sections.overlay,
    data: [
      { name: 'Alert', route: ROUTES.ALERT, title: 'Alert' },
      { name: 'AlertDialog', route: ROUTES.ALERT_DIALOG, title: 'Alert Dialog' },
      { name: 'ActionSheet', route: ROUTES.ACTION_SHEET, title: 'Action Sheet' },
      { name: 'Modal', route: ROUTES.MODAL, title: 'Modal' },
      { name: 'Tooltip', route: ROUTES.TOOLTIP, title: 'Tooltip' },
      { name: 'Toast', route: ROUTES.TOAST, title: 'Toast' },
    ],
  },
];


