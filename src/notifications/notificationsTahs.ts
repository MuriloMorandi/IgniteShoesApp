import OneSignal from 'react-native-onesignal';

export function tagUserEmailCreate(email: string) {
  OneSignal.sendTag('user_email', email);
}

export function tagUserEmailDelete() {
  OneSignal.deleteTag('user_email');
}

export function tagUserInfoCreate(user:{ name:string, email:string }) {
  OneSignal.sendTags({
    'user_name': user.name,
    'user_email': user.email
  });
}