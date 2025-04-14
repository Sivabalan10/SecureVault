import requests
import threading
import time

BASE_URL = "http://127.0.0.1:5000/log"
HEADERS = {"Content-Type": "application/json"}
TEST_IP = "192.168.1.101"  

NUM_REQUESTS =15 
THREADS = 5

def send_request():
    """Function to send a single request"""
    try:
        response = requests.post(BASE_URL, json={"page": "/test-page"}, headers=HEADERS)
        print(f"Response: {response.status_code}, Message: {response.text}")
    except requests.exceptions.RequestException as e:
        print(f"Request failed: {e}")

def load_test():
    """Simulate multiple requests from multiple threads"""
    threads = []
    
    for _ in range(NUM_REQUESTS):
        t = threading.Thread(target=send_request)
        t.start()
        threads.append(t)
        time.sleep(0.1)  
    
    for t in threads:
        t.join()  

if __name__ == "__main__":
    print("Starting Load Test...")
    load_test()
    print("Load Test Completed!")
