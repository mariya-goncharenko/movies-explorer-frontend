// Константы для отображения карточек на странице:
const SHOW_MORE_DECKTOP = 3;
const SHOW_MORE_TABLET = 2;
const SHOW_MORE_MOBILE = 1;
// Длинна короткометражки в минутах:
const SHORTS = 40;

const EMAIL_REGEX =
  "^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$";
const USER_NAME_REGEX = '^[A-Za-zА-Яа-яЁё /s -]+$';

export {
  SHOW_MORE_DECKTOP,
  SHOW_MORE_TABLET,
  SHOW_MORE_MOBILE,
  SHORTS,
  EMAIL_REGEX,
  USER_NAME_REGEX,
};