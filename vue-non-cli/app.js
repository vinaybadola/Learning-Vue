
const app = Vue.createApp({
    // template: `<h1>HELLO MY NAME IS VINAY BADOLA</h1>`

    data() {
        return{
            'showBooks': true,
            'name': 'Vinay Badola',
            'books': [
                {title: 'Name of the Wind', author: 'Patrick Rothfuss',  isFav: true, 'img': 'assets/1.jpg'},
                {title: 'The Way of Kings', author: 'Brandon Sanderson', isFav: false , 'img': 'assets/2.jpg'},
                {title: 'Good Omens', author: 'Terry Pratchett', isFav: true, 'img': 'assets/3.jpg'}

            ],
            'age': 25,
            'x': 0,
            'y': 0,
            'doubleClickMessage' : 'Double Clicked',
            'eventColor': {}
        }
    }, 

    methods: {
        changeTitle (name) {
            this.name = name;
        },

        showBooksEvent(){
            this.showBooks = !this.showBooks;
        }, 
        handleEvent(e, data){
            console.log(e.type );
            if(data){
                console.log(data);
            }
            if(e.type === 'dblclick'){
                this.doubleClickMessage = 'You Double Clicked Me!';
                this.eventColor = {backgroundColor: 'red'};
            }
        }, 
        handleMouseMove(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        
        handleIsFav(book){
            book.isFav = !book.isFav;
        }   
        
    },

    computed :{
        filteredBooks(){
            return this.books.filter((book) => book.isFav);
        }
    }

});

app.mount('#app');