/** */
export type ResponseCode =
  // Các lỗi tự custom hoặc service trả veef
  | number
  // Lỗi khác do service
  | 'Service'
  // Lỗi do FE check sai
  | 'Frontend'
  // Lỗi do mạng
  | 'Network'
  // Lỗi khác
  | 'Unknown';
