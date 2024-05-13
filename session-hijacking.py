import subprocess
import datetime

def run_nikto(url):
    # Thư mục đầu ra cho báo cáo
    output_dir = "nikto_reports"

    # Tạo thư mục đầu ra nếu nó chưa tồn tại
    subprocess.run(["mkdir", "-p", output_dir])

    # Tạo tên file báo cáo dựa trên thời gian hiện tại
    report_filename = f"nikto_report_{datetime.datetime.now().strftime('%Y-%m-%d_%H-%M-%S')}.txt"
    report_path = f"{output_dir}/{report_filename}"

    # Chạy Nikto và ghi kết quả vào file báo cáo
    subprocess.run(["nikto", "-h", url, "-o", report_path])

    return report_path

if __name__ == "__main__":
    # Yêu cầu người dùng nhập URL của trang web cần quét
    target_url = input("Nhập URL của trang web muốn quét: ")

    # Chạy Nikto và lưu kết quả vào một file báo cáo
    report_path = run_nikto(target_url)
    print(f"Quét hoàn tất. Kết quả được lưu vào file: {report_path}")
