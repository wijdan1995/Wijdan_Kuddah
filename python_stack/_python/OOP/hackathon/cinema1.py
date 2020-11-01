movies = []
class User:
    def __init__(self, name, phone_number, age):
        self.name = name
        self.age = age
        self.phone_number = phone_number

    # def view_movies(self):
    #     pass

    # def choose_movie(self):
    #     pass

    # def buy_ticket():
    #     pass

class Movie:
    def __init__(self, title, category, age_restriction, room_number, price=10):
        self.title = title
        self.category = category
        self.age_restriction = age_restriction
        self.room = Room(room_number, seats_count=2)
        self.price = price

    def view_movie_info(self):
        print(f'Title: {self.title}, Category: {self.category}, Age Restriction: +{self.age_restriction}, Room: {self.room.room_number}')
        

class Ticket:
    def __init__(self, owner, movie, room_number, seat_number):
        self.owner = owner
        self.movie = movie
        self.room_number = room_number
        self.seat_number = seat_number
        #self.date_time = date_time

class Room:
    def __init__(self, room_number, seats_count):
        self.room_number = room_number
        self.seats_count = seats_count
        self.available_seats = seats_count

    def booking_seat(self):
        self.available_seats -= 1
        return self.available_seats + 1
##############################################################################
# Actions By Cinema Employee
movie1 = Movie('Mulan1', 'Action', '12', 1)
movie2 = Movie('Mulan2', 'Action', '12', 2) 
movie3 = Movie('Mulan3', 'Action', '12', 3) 
movie4 = Movie('Mulan4', 'Action', '12', 4) 
movie5 = Movie('Mulan5', 'Action', '12', 5) 

movies = []
movies.extend([movie1, movie2, movie3, movie4, movie5])

def view_movies():
    for i in range(0, len(movies)):
        print(f'{i+1}- ', end='')
        movies[i].view_movie_info()

###############################################################################


print('Welcome to WY cinema')
end = 0
while end == 0:
    print('Please enter your informations')
    name = input("name: ")
    phone_number = input("phone number: ")
    age = input("age: ")
    user = User(name, phone_number, age)

    print('Welcome', user.name)
    print('This is the list of our movies')
    view_movies()
    booked = 0
    while booked == 0:
        choice = input("Enter the number of the movie: ")
        if movies[int(choice)-1].room.available_seats > 1:
            ticket = Ticket(user.name, movies[int(choice)-1], movies[int(choice)-1].room.room_number , movies[int(choice)-1].room.booking_seat())
            print(ticket.owner, ticket.movie.title, ticket.room_number)
            booked = 1
            exit =  input("Do you want to buy another ticket? y/n")
            if exit == 'n':
                end = 1

        else:
            print('there is no seats available, please choose anothe movie')
