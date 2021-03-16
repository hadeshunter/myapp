interface Translation {
  [key: string]: string;
}

const translation: Translation = {
  INVALID_WARD_ID: "Bạn cần chọn địa chỉ chi tiết đến cấp phường/xã",
  INVALID_STREET: "Bạn cần nhập đúng số nhà, tên đường",
  INVALID_PHONE: "Số điện thoại bạn vừa nhập không hợp lệ",
}

export function translateError(error: string) {
  return translation[error] || "Đã có lỗi xảy ra, xin hãy thử lại";
}