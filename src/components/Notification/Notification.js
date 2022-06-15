import PropTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={s.notification}>{message}</p>;
};

export default Notification;

Notification.prototype = {
  message: PropTypes.string.isRequired,
};
