# Create a queue using 2 stacks. A hint: stack1 will hold the contents of the actual queue, stack2 will be used in the enQueueing
# Efficiency is not the goal!
# Efficiency is not the goal!
# Efficiency is not the goal!
# The goal is to practice using one data structure to implement another one, in our case Queue from 2 Stacks
# Queue is FIFO --> First In First out
# Stack is LIFO --> Last  In First Out
from dayOne import Stack, Node

class QueueOfStacks:
    def __init__(self):
        self.stack1 = Stack()
        self.stack2 = Stack()

    def front(self):
        if self.stack1.head is None:
            print('the queue is empty')
            return False
        else:
            return self.stack1.head.value
    
    def isEmpty(self):
        if self.stack1.head is None:
            return True
        else:
            return False

    def size(self):
        if self.stack1.head is None:
            return "List is empty"
        else:
            runner = self.stack1.head
            counter = 0
            while runner:
                counter += 1
                runner = runner.next
            return counter

    def deQueue(self):
        self.stack1.pop()

    def enQueue(self, value): 
        # self.stack2.head = self.stack1.head
        # self.stack1.head = None
        
        # runner = self.stack1.head

        # while runner:
        #     self.stack2.push(runner.value)
        #     runner = runner.next
        # self.stack1.push(value)
        
        while self.stack1.isEmpty() == False:
            self.stack2.push(self.stack1.pop())
        

        self.stack1.push(value)

        while self.stack2.isEmpty() == False:
            self.stack1.push(self.stack2.pop())

    # Optional
    def showQS(self):
        self.stack1.printValues()

my_queue_stack = QueueOfStacks()
# print("is empty",my_queue_stack.isEmpty())
# print("size",my_queue_stack.size())
my_queue_stack.enQueue(1)
my_queue_stack.enQueue(2)
my_queue_stack.enQueue(3)
my_queue_stack.enQueue(4)
my_queue_stack.enQueue(5)
my_queue_stack.deQueue()
my_queue_stack.showQS()
print("size",my_queue_stack.size())


# [Unit]
# Description=gunicorn daemon
# After=network.target
# [Service]
# User=ubuntu
# Group=www-data
# WorkingDirectory=/home/ubuntu/the-wall-django
# ExecStart=/home/ubuntu/the-wall-django/venv/bin/gunicorn --workers 3 --bind unix:/home/ubuntu/the-wall-django/the_wall_proj.sock the_wall_proj.wsgi:application
# [Install]
# WantedBy=multi-user.target

# server {
#   listen 80;
#   server_name 3.138.151.225;
#   location = /favicon.ico { access_log off; log_not_found off; }
#   location /static/ {
#       root /home/ubuntu/the_wall_django;
#   }
#   location / {
#       include proxy_params;
#       proxy_pass http://unix:/home/ubuntu/the_wall_django/the-_wall_proj.sock;
#   }
# }