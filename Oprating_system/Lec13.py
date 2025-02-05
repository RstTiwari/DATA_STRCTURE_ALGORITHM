# Designing the SJF algorithm
processes = [
    {'process_id': 'P2', 'arrival_time': 1, 'burst_time': 8},
    {'process_id': 'P3', 'arrival_time': 2, 'burst_time': 7},
    {'process_id': 'P4', 'arrival_time': 3, 'burst_time': 3},
    {'process_id': 'P5', 'arrival_time': 4, 'burst_time': 4},
    {'process_id': 'P1', 'arrival_time': 0, 'burst_time': 6},
    
]


def calculate_time(processes:list):
    current_time = 0
    for process in  processes:
        current_time += process["burst_time"]
        process["completion_time"] = current_time
        process["turnaround_time"] = process['completion_time'] - process['arrival_time']
        process["waiting_time"] = process['turnaround_time'] - process['burst_time']
    return processes


def SJF_NO_PREEMTIVE(process:list):
    process.sort(key = lambda x:(x["arrival_time"],x["burst_time"]))
    process = calculate_time(process)
    for process in process:
        print(f'{process["process_id"]} : {process["completion_time"]}')


def SJF_PRMEETIVE(processes:list):
    processes.sort(key=lambda x:x["arrival_time"])
    print(processes)
    n = len(processes)
    completed = 0
    current_time = 0
    remaining_burst_time = [p['burst_time']  for p in processes]
    waiting_time = {p['process_id']:0  for p in processes}
    turn_around_time = {p["process_id"]:0  for p in processes}
    completion_time = {p["process_id"]:0 for p in processes}

    while completed < n:
        available_processes = [i for i in range(n) if processes[i]['arrival_time'] <= current_time and remaining_burst_time[i] > 0]
        if available_processes:
            shortest_job = min(available_processes,key=lambda x:remaining_burst_time[x])
            remaining_burst_time[shortest_job] -= 1
            current_time +=1

            if remaining_burst_time[shortest_job] == 0:
                completed += 1
                completion_time[processes[shortest_job]["process_id"]] = current_time
                turn_around_time[processes[shortest_job]["process_id"]] = current_time - processes[shortest_job]["arrival_time"]
                waiting_time[processes[shortest_job]["process_id"]] = turn_around_time[processes[shortest_job]["process_id"]] - processes[shortest_job]["burst_time"]
        else:
            current_time += 1

    print(f"{'Process':<10} {"Arrival Time":<15}  {"Burst Time":<15} {"Completion Time":<15} {"turn Around time":<15} {"Waiting Time":<15}")
    for process in processes:
        print(
            f"{process['process_id']:<10}  {process["arrival_time"]:<15}  {process["burst_time"]} {completion_time[process["process_id"]]} {turn_around_time[process['process_id']]} {waiting_time[process['process_id']]}"
        )


processes1 = [
    {'process_id': 'P2', 'arrival_time': 0,'burst_time': 8,"priority":6},
    {'process_id': 'P3', 'arrival_time': 2, 'burst_time': 7,"priority":3 },
    {'process_id': 'P4', 'arrival_time': 3, 'burst_time': 3 ,"priority":4},
    {'process_id': 'P5', 'arrival_time': 4, 'burst_time': 4,"priority":5},
    {'process_id': 'P1', 'arrival_time': 0, 'burst_time': 6,"priority":7},
    
]

def priority_schduling_preemtive(processes):
    processes1.sort(key=lambda x: x["priority"])
    n = len(processes)
    current_time = 0
    completed = 0
    completed_time = {p["process_id"]: 0 for p in processes}
    turnaround_time = {p["process_id"]: 0 for p in processes}
    waiting_time = {p["process_id"]: 0 for p in processes}
    while completed < n:
        available_process = [ i for i in range(n) if  processes[i]["arrival_time"]<= current_time]    


if __name__ == "__main__":
    SJF_NO_PREEMTIVE(processes)
    SJF_PRMEETIVE(processes)
