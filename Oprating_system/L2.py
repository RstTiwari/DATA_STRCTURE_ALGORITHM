# Single Process Oprating system  Windows docs
import time


class Single_Process:
    def __init__(self):
        self.current_process = None

    def load_process(self, process_name):
        if self.current_process == None:
            print(f"A new Process has loaded {process_name}")
            self.current_process = process_name
        else:
            print("can not load a process an old process is running ")

    def run_process(self):
        if self.current_process:
            print("A new process is running")
            time.sleep(3)
            print("process has completed")
            self.current_process = None
        else:
            print("No Process is currently loaded")
            
single_os = Single_Process()
single_os.load_process("process A")
single_os.run_process()

class Batch_Process:
    def __init__(self):
        self.process_running =None    
    def load_process(self,processes:list):
        for process in processes:
            self.run_process(process)
        
        