movies = []
users = []
class User:
    def __init__(self, name, phone_number, age):
        self.name = name
        self.age = age
        self.phone_number = phone_number
        self.ticket = ''

    def view_movies(self):
        view_movies()

    def choose_movie(self):
        pass

    def buy_ticket(self):
        pass

class Movie:
    def __init__(self, title, category, age_restriction, room_number, price=10):
        self.title = title
        self.category = category
        self.age_restriction = age_restriction
        self.room = Room(room_number, seats_count = 20)
        self.price = price
        movies.append(f'Title: {self.title}, Category: {self.category}, Age Restriction: +{self.age_restriction}, Room: {self.room.room_number}')

    def display_movie_info(self):
        print(f'Title: {self.title}, Category: {self.category}, Age Restriction: +{self.age_restriction}, Room: {self.room.room_number}')
        return self
    # def view_movies(self):
    #     for i in range(0, len(movies)):
    #         print(f'{i+1}- {movies[i]}')
    #     return self
    

class Ticket:
    def __init__(self, owner, movie_title, room_number, seat_number, date_time):
        self.owner = owner
        self.movie_title = movie_title
        self.room_number = room_number
        self.seat_number = seat_number
        self.date_time = date_time
    def display_ticket_info(self):
        print(f'Movie: {self.movie_title}, Room: {self.room_number}, Seat Number: {self.seat_number}, Date-Time: {self.date_time}')

class Room:
    def __init__(self, room_number, seats_count):
        self.room_number = room_number
        self.seats_count = seats_count
        self.available_seats = seats_count

    def display_room_info(self):
            print(f'Room: {self.room_number}, Capacity: {self.seats_count}, Available Seats: {self.available_seats}')
    def booking_seat(self, owner,movie_title):
        if self.available_seats > 1:
            owner.ticket =  Ticket(owner,movie_title.title, movie_title.room.room_number,self.available_seats,10)
            self.available_seats -= 1
            # return Ticket(owner,movie_title, movie_title.room.room_number,self.available_seats+1,10)
        else:
            print('there is no seats')
        return self


def view_movies():
    for i in range(0, len(movies)):
        print(f'{i+1}- {movies[i]}')
mulan = Movie('mulan', 'action', '15', 1)
wijdan = User('wijdan', '0532018811', 26)
# mulan.display_movie_info()
# mulan.room.booking_seat(wijdan, mulan)
# mulan.room.display_room_info()
# view_movies()
# wijdan.ticket.display_ticket_info()
print('Welcome to WY cinema')
print('Please enter your informations')
name = input("name: ")
phone_number = input("phone number: ")
age = input("age: ")
# User(name, phone_number, age)
user = User(name, phone_number, age)
users.append(user)
# print(users[0].name)

print('Welcome', users[0].name)

print('This is the list of our movies')
view_movies()

choice = input("Enter the movie number")

# ticket = Ticket()










