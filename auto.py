import os

def function1():
    os.system("python information_gather.py")

def function2():
    os.system("python auto_footprinting_webserver.py")

def function3():
    os.system("python mirroring.py")

def function4():
    os.system("python python4.py")

def function5():
    os.system("python sqlmap_auto.py")

def function6():
    os.system("python WebServer-Password-Hacking.py")
    
def function7():
    os.system("python session-hijacking.py")

def main():
    print("Chọn một số từ 1 đến 6:")
    print("1. Thu thap thong tin")
    print("2. Quet dich vu")
    print("3. Mirroring")
    print("4. Quet lo hong")
    print("5. Tan cong Sql")
    print("6. Crack mat khau")
    print("7. Session Hijacking")
    
    try:
        option = int(input())
        if 1 <= option <= 7:
            if option == 1:
                function1()
            elif option == 2:
                function2()
            elif option == 3:
                function3()
            elif option == 4:
                function4()
            elif option == 5:
                function5()
            elif option == 6:
                function6()
            elif option == 7:
                function7()
        else:
            print("Số bạn chọn không hợp lệ. Vui lòng chọn lại.")
    except ValueError:
        print("Bạn cần phải nhập một số.")

if __name__ == "__main__":
    main()
