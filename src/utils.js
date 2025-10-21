import dayjs from 'dayjs';

export const getMedbookStatus = (dateStr) => {
  if (!dateStr) return 'unknown';
  const today = dayjs();
  const expiry = dayjs(dateStr);
  const diff = expiry.diff(today, 'day');

  if (diff < 0) return 'expired';
  if (diff <= 7) return 'warning';
  return 'valid';
};

export const statusColor = {
  valid: '#E6F4EA',
  warning: '#FFF4E5',
  expired: '#FCE8E6',
  unknown: '#E0E0E0',
};
