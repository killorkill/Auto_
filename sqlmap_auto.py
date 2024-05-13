import subprocess

def run_sqlmap(target):

    command = f"sqlmap -u\"{target}\" --batch --tables --columns"
    subprocess.run(command, shell=True)
    
    # command = f"sqlmap -u {target} --batch --all"  # Sử dụng --dump để hiển thị dữ liệu đã thu thập
    # subprocess.run(command, shell=True)

if __name__ == "__main__":
    target = input("Nhập URL mục tiêu: ")
    run_sqlmap(target)
	
