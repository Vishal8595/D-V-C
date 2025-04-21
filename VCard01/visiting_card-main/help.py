import random
ran=random.randint(1,10)
attempt=1
while attempt<=4:
    user=int(input("enter the value of 1 to 10 number\n"))
    if ran==user:
        print("correct choose the answer given number")
        break
    attempt+=1    
else:
    print("you are looser")     