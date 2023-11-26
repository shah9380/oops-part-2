// Create classes for books, library members, and library staff.:-
// Books should have properties like title, author, and availability status.
// Members should have properties like name, email, and a list of borrowed books.
// Implement methods for borrowing and returning books, checking the availability of books, and displaying the list of borrowed books for a member.
// Library staff should have additional capabilities, such as adding new books to the library and removing damaged books.

class Book {
    constructor(title, author, availability = true) {
        this.title = title;
        this.author = author;
        this.availability = availability;
    }
}

class LibraryMember {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        if (book.availability) {
            this.borrowedBooks.push(book);
            book.availability = false;
            console.log(`${this.name} borrowed '${book.title}' by ${book.author}.`);
        } else {
            console.log(`Sorry, '${book.title}' is not available.`);
        }
    }

    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
            book.availability = true;
            console.log(`${this.name} returned '${book.title}' by ${book.author}.`);
        } else {
            console.log(`You did not borrow '${book.title}'.`);
        }
    }

    displayBorrowedBooks() {
        if (this.borrowedBooks.length === 0) {
            console.log(`${this.name} has no borrowed books.`);
        } else {
            console.log(`${this.name}'s borrowed books:`);
            this.borrowedBooks.forEach(book => {
                console.log(`- '${book.title}' by ${book.author}`);
            });
        }
    }
}

class LibraryStaff {
    addBook(title, author, availability = true) {
        const newBook = new Book(title, author, availability);
        console.log(`Added '${newBook.title}' by ${newBook.author} to the library.`);
        return newBook;
    }

    removeDamagedBook(book) {
        console.log(`Removed '${book.title}' by ${book.author} from the library due to damage.`);
    }
}

// Example usage:

// Creating books
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");
const book3 = new Book("1984", "George Orwell");

// Creating a library member
const member = new LibraryMember("Alice Johnson", "alice@example.com");

// Creating a library staff
const staff = new LibraryStaff();

// Member borrowing books
member.borrowBook(book1);
member.borrowBook(book2);

// Member displaying borrowed books
member.displayBorrowedBooks();

// Member returning a book
member.returnBook(book1);

// Staff adding a new book
const newBook = staff.addBook("The Catcher in the Rye", "J.D. Salinger");

// Staff removing a damaged book
staff.removeDamagedBook(book2);
