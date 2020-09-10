//Data array
const photosArray = [
    {
        name: "Red Bench",
        imgUrl: "images/pic-bench.png",
        bestSeller: true,
        price: "$133.89"
    },
    {
        name: "Egg Ballon",
        imgUrl: "images/pic-egg.png",
        bestSeller: false,
        price: "$43.89"
    },
    {
        name: "Apple",
        imgUrl: "images/pic-apple.png",
        bestSeller: false,
        price: "$23.89"
    },
    {
        name: "Window",
        imgUrl: "images/pic-window.png",
        bestSeller: false,
        price: "$13.89"
    },
    {
        name: "Man",
        imgUrl: "images/pic-man.png",
        bestSeller: false,
        price: "$233.89"
    },
    {
        name: "Architecture",
        imgUrl: "images/pic-archi.png",
        bestSeller: true,
        price: "$173.89"
    },
    {
        name: "Pool",
        imgUrl: "images/pic-pool.png",
        bestSeller: false,
        price: "$93.89"
    },
    {
        name: "Stand",
        imgUrl: "images/pic-stand.png",
        bestSeller: true,
        price: "$333.89"
    },
    {
        name: "Book",
        imgUrl: "images/pic-book.png",
        bestSeller: false,
        price: "$53.89"
    },
    {
        name: "Hotel",
        imgUrl: "images/pic-hotel.png",
        bestSeller: false,
        price: "$63.89"
    },
    {
        name: "Chair",
        imgUrl: "images/pic-chair.png",
        bestSeller: false,
        price: "$65.89"
    },
    {
        name: "Ocean",
        imgUrl: "images/pic-ocean.png",
        bestSeller: false,
        price: "$933.89"
    },
    {
        name: "Plain",
        imgUrl: "images/pic-plain.png",
        bestSeller: false,
        price: "$78.89"
    },
    {
        name: "Boat",
        imgUrl: "images/pic-boat.png",
        bestSeller: false,
        price: "$999.99"
    },
    {
        name: "Window",
        imgUrl: "images/pic-window-2.png",
        bestSeller: false,
        price: "$3.89"
    },
    {
        name: "Yellow",
        imgUrl: "images/pic-yellow.png",
        bestSeller: false,
        price: "$1.89"
    },

]
const comments = [{
    user: "friend1",
    message: "Awesome !"
},
{
    user: "friend2",
    message: "Amazing ! I can’t wait to buy one !"
},
{
    user: "friend3",
    message: "Wow! so Inspiring ! like my front end teacher !"
}
]

//Caaaarrrrddsss
photosArray.forEach(card => {
    //Creating a clone of the first card
    const cardClone = $('.card').eq(0).clone(true)
    //Changing img url
    cardClone.find('img').attr('src', card.imgUrl)
    //Card name
    cardClone.find('h5').text(card.name)
    //Changing price
    cardClone.find('p').text(card.price)
    //Bestseller
    if (card.bestSeller === true) {
        cardClone.find('span').css('display', 'inline')
    }

    //Appending the created clone to the section
    $('#cards').append(cardClone)
});

//Removing the first card we cloned
$('.card').eq(0).remove()

//Same process for comments
comments.forEach(comment => {
    const commentClone = $('.comment').eq(0).clone(true)
    link = "images/" + comment.user + ".png"
    commentClone.find('img').attr('src', link)
    commentClone.find('p').text(comment.message)



    $('#comments').append(commentClone)
});

$('.comment').eq(0).remove()

// Submit event for comment, pushes what we typed to the comment section
$('form').on('submit', function () {
    const newComment = $('.comment').eq(0).clone(true)
    event.preventDefault()
    newComment.find('img').attr('src', 'images/user.png')
    newComment.find('p').text($('textarea').val())
    const commentLength = $('textarea').val().length

    if (commentLength < 4) {
        alert('Please write a comment bigger than 3 letters')
    } else {

        $('#comments').append(newComment)
        $('textarea').val('')
    }
})