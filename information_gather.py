import subprocess
import whois
from googlesearch import search
import sublist3r

def whois_lookup(domain):
    try:
        info = whois.whois(domain)
        return info
    except Exception as e:
        print("Lỗi trong quá trình WHOIS lookup:", str(e))
        return None

def google_hacking(query):
    try:
        results = search(query, num=10, stop=10, pause=2)
        return list(results)
    except Exception as e:
        print("Lỗi trong quá trình Google search:", str(e))
        return None

def enumerate_subdomains(domain):
    try:
        subdomains = sublist3r.main(domain, 40, None, ports=None, silent=True, verbose=False, enable_bruteforce=False, engines=None)
        return subdomains
    except Exception as e:
        print("Lỗi trong quá trình tìm kiếm tên miền con:", str(e))
        return None

def recon_ng():
    try:
        command = "./recon-ng"
        process = subprocess.Popen(command, shell=True, cwd="/home/kali/Downloads/recon-ng")
        process.wait()
    except Exception as e:
        print("Lỗi khi chạy Recon-ng:", str(e))

def start_netcat():
    try:
        command = "nc -nlvp 4444"
        process = subprocess.Popen(command, shell=True)
        print("Netcat đã bắt đầu lắng nghe trên cổng 4444")
    except Exception as e:
        print("Lỗi khi thực hiện lệnh netcat:", str(e))

def main_menu():
    while True:
        print("1. WHOIS Lookup")
        print("2. Google Hacking")
        print("3. Subdomain Enumeration")
        print("4. Recon-ng")
        print("5. Start Netcat")
        print("99. Thoát")
        choice = input("Chọn một số để thực hiện tương ứng hoạt động:")
        if choice == "99":
            print("Kết thúc chương trình.")
            break
        elif choice == "5":
            start_netcat()
        else:
            domain = input("Nhập tên miền:")
            if choice == "1":
                whois_info = whois_lookup(domain)
                print(whois_info)
            elif choice == "2":
                google_results = google_hacking('site:' + domain)
                print(google_results)
            elif choice == "3":
                subdomains = enumerate_subdomains(domain)
                if subdomains:
                    print("Danh sách tên miền con:")
                    for subdomain in subdomains:
                        print(subdomain)
                else:
                    print("Không tìm thấy tên miền con.")
            elif choice == "4":
                recon_ng()
            else:
                print("Lựa chọn không hợp lệ")

# Chạy menu chính
if __name__ == "__main__":
    main_menu()
