import subprocess
import keyboard

def open_zap():
    subprocess.Popen(["/home/kali/Downloads/ZAP_2.15.0/zap.sh"])

def main():
 
            open_zap()
       

if __name__ == "__main__":
    main()
