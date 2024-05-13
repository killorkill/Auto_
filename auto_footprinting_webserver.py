import subprocess
import builtwith
import re

def run_whatweb(target_url):
    command = f"whatweb {target_url}"
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    print("Whatweb done!")
    return result.stdout

def run_nmap(target_url):
    command = f"nmap -sV {target_url}"
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    print("Nmap done!")
    return result.stdout

def run_port_scan(target_url):
    nmap_command = f"nmap -p- --open -T4 -n {target_url}"
    nmap_result = subprocess.run(nmap_command, shell=True, capture_output=True, text=True)
    open_ports = re.findall(r"\d+", nmap_result.stdout)
    
    if not open_ports:
        print("Không có cổng nào được mở.")
        return ""
    
    port_output = ""
    for port in open_ports:
        port_command = f"nmap -p {port} -sV -sC -A {target_url}"
        port_result = subprocess.run(port_command, shell=True, capture_output=True, text=True)
        port_output += f"-Thông tin từ cổng {port} -\n"
        port_output += port_result.stdout + "\n"
    
    print("Port_scan done!")
    return port_output 

def run_builtwith(target_url):
    if not target_url.startswith("http://") and not target_url.startswith("https://"):
        target_url = "http://" + target_url
    result = builtwith.parse(target_url)
    output = f"Công nghệ được sử dụng trên trang web {target_url}\n"
    for key, value in result.items():
        output += f"{key}: {', '.join(value)}\n"
    
    print("Builtwith done!")
    return output

def run_httprint(target_url):
    command = f"httprint -h {target_url} -s /usr/share/httprint/signatures.txt"
    result = subprocess.run(command, shell=True, capture_output=True, text=True)
    print("Httprint done!")
    return result.stdout

def main():
    target_url = input("Nhập URL để phân tích : ")

    whatweb_result = run_whatweb(target_url)
    nmap_result = run_nmap(target_url)
    port_result = run_port_scan(target_url)
    builtwith_result = run_builtwith(target_url)
#    httprint_result = run_httprint(target_url)

    with open("report.txt", "w") as report_file:
        report_file.write("=== Kết quả WhatWeb ===\n")
        report_file.write(whatweb_result)
        report_file.write("\n\n")

        report_file.write("=== Kết quả Nmap ===\n")
        report_file.write(nmap_result)
        report_file.write("\n\n")

        report_file.write("=== Kết quả chi tiết các cổng ===\n")
        report_file.write(port_result)
        report_file.write("\n\n")

        report_file.write("=== Kết quả BuiltWith ===\n")
        report_file.write(builtwith_result)
        report_file.write("\n")

#        report_file.write("=== Kết quả Httprint ===\n")
#        report_file.write(httprint_result)
#        report_file.write("\n\n")

    print("Quá trình hoàn tất. Báo cáo đã được lưu vào report.txt")

if __name__ == "__main__":
    main()
