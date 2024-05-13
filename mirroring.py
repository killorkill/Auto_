import subprocess

import requests
from bs4 import BeautifulSoup


def mirror_website(url, save_path):

    # Tải xuống trang chính
    response = requests.get(url)

    # Kiểm tra mã trạng thái HTTP
    if response.status_code == 200:
        # Xử lý nội dung HTML
        soup = BeautifulSoup(response.content, 'html.parser')

        # Tìm tất cả thẻ neo (<a>)
        for link in soup.find_all('a'):
            # Lấy thuộc tính href (URL)
            href = link.get('href')

            # Bỏ qua các liên kết trống và liên kết tương đối không bắt đầu bằng '/'
            if not href or not href.startswith('/'):
                continue

            # Tạo URL tuyệt đối
            absolute_url = url + href

            # Bỏ qua các loại tệp không mong muốn (CSS, JS, hình ảnh)
            if not absolute_url.endswith('.css') and not absolute_url.endswith('.js') and not absolute_url.endswith('.png') and not absolute_url.endswith('.jpg'):
                # Tạo lệnh wget
                command = ["wget", "-P", save_path, absolute_url]

                try:
                    # Thực thi lệnh wget
                    subprocess.call(command)
                    print(f"Tải xuống thành công cho: {absolute_url}")
                except FileNotFoundError:
                    print(f"Lỗi: Không tìm thấy wget.exe. Vui lòng đảm bảo đã cài đặt và có thể truy cập.")
    else:
        print(f"Lỗi khi tải xuống trang web: {url}")


if __name__ == "__main__":
    # URL trang web cần tải xuống
    url = input("Enter target IP or domain: ")

    # Thư mục lưu trữ nội dung tải xuống
    save_path = r"mirror.html"
    

    # Chạy hàm tải xuống
    mirror_website(url, save_path)
