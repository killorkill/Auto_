# Auto_Tools
Là một phần mềm kiểm thử bán tự động với 7 chức năng:
1. Thu thập thông tin
2. Quét dịch vụ
3. Mirroring
4. Quét lỗ hổng
5. Tấn công SQL
6. Crack mật khẩu
7. Session Hijacking
# Cách cài đặt

Đầu tiên tải ZAP nếu chưa có. Ở đây chúng tôi đã có sẵn phiên biển ZAP cho các bạn

Sau đó nhập câu lệnh:

   ```bash
  sudo apt update
  sudo apt install default-jdk
  ```
Di chuyển đến thư mục chứa ZAP và nhập câu lệnh để giải nén

   ```bash
  tar -xvf ZAP_2.10.0_Linux.tar.gz
  ```
Sau đó nhập câu lệnh sau để cài đặt các gói về
  
  ```bash
pip install -r requirements.txt
 ```
Để chạy chương trình chả cần gõ câu lệnh:

 ```bash
python3 auto.py
 ```
![image](https://github.com/killorkill/Auto_/assets/83548177/85ee7c0f-2ed1-4c99-ad2d-938857ef157d)


