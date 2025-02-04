'''
Feature 	    Abstraction	                                     Arbitration
Definition	Hides complexity of hardware/software	         Resolves conflicts between competing processes
Purpose 	Simplifies user interaction with the system      Ensures fair and efficient resource allocation
Examples	File system, virtual memory, system calls	     CPU scheduling, disk access, memory allocation
Analogy 	A car dashboard hiding the engine mechanics 	 A traffic light controlling vehicle 

'''
#Abstraction=> we are dealing with OS with write and open command
with open("example.txt","w") as file:
    file.write("hello")

