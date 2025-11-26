export const getItemIconName = (name: string): string => {
  const key = name.toLowerCase();
  // Designs section
  if (key.includes('appbar') || key.includes('app bar')) {return 'view-headline';}
  if (key === 'card') {return 'card-text-outline';}
  if (key.includes('tab view')) {return 'tab';}
  if (key.includes('swipe list')) {return 'gesture-swipe-horizontal';}
  if (key.includes('search bar')) {return 'magnify';}
  if (key.includes('form with validation')) {return 'check-decagram-outline';}
  if (key.includes('login/signup') || key.includes('login') || key.includes('signup')) {return 'account-plus-outline';}
  if (key.includes('app drawer') || key.includes('appdrawer')) {return 'view-grid-outline';}
  if (key === 'footer') {return 'dock-bottom';}
  if (key.includes('todo')) {return 'format-list-checkbox';}
  if (key.includes('heading')) {return 'format-title';}
  if (key === 'text') {return 'format-text';}
  if (key.includes('link')) {return 'link-variant';}
  if (key.includes('divider')) {return 'drag-horizontal-variant';}
  if (key === 'box') {return 'cube-outline';}
  if (key.includes('stack') && !key.includes('zstack')) {return 'layers-outline';}
  if (key.includes('center')) {return 'align-horizontal-center';}
  if (key.includes('zstack')) {return 'layers-triple-outline';}
  if (key.includes('pressable')) {return 'gesture-tap';}
  if (key.includes('presence') || key.includes('transition')) {return 'animation-outline';}
  if (key.includes('tabs')) {return 'tab';}
  if (key === 'fab') {return 'plus-circle';}
  if (key.includes('icon button') || key.includes('iconbutton')) {return 'gesture-tap-button';}
  if (key === 'button') {return 'gesture-tap';}
  if (key === 'icon') {return 'star-four-points-outline';}
  if (key.includes('input')) {return 'form-textbox';}
  if (key.includes('text area') || key.includes('textarea')) {return 'text-box-outline';}
  if (key.includes('select')) {return 'form-select';}
  if (key.includes('checkbox')) {return 'checkbox-marked-outline';}
  if (key.includes('radio')) {return 'radiobox-marked';}
  if (key.includes('switch')) {return 'toggle-switch';}
  if (key.includes('slider')) {return 'tune-vertical';}
  if (key.includes('formcontrol') || key.includes('form control')) {return 'form-dropdown';}
  if (key.includes('avatar')) {return 'account-circle-outline';}
  if (key.includes('badge')) {return 'certificate-outline';}
  if (key.includes('image')) {return 'image-outline';}
  if (key.includes('progress')) {return 'progress-check';}
  if (key.includes('skeleton')) {return 'contrast-box';}
  if (key.includes('spinner')) {return 'loading';}
  if (key.includes('alert dialog') || key.includes('alertdialog')) {return 'alert-box-outline';}
  if (key === 'alert') {return 'alert-circle-outline';}
  if (key.includes('action sheet') || key.includes('actionsheet')) {return 'tray-arrow-up';}
  if (key.includes('modal')) {return 'window-maximize';}
  if (key.includes('tooltip')) {return 'tooltip-outline';}
  if (key.includes('toast')) {return 'message-alert-outline';}
  if (key === 'menu') {return 'dots-grid';}
  if (key === 'settings') {return 'cog-outline';}
  return 'checkbox-blank-circle-outline';
};


