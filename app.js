let age = document.querySelector('input');

age.onchange =() => {
    if (age.value == 14){
        alert("Your age is the same as mine 🤗");
        document.body.style.background = 'yellow';
        alert("People born in the same year have the same age and they can differ only in months. People of the same age have competition with each other, they study with few peers in school. Their year of birth is also the same, for example, the year of the mouse or the year of the snake, etc.")
        document.querySelector('p').innerHTML = '🤗';
        document.querySelector('h1').innerHTML = 'Hello my peer👇';
        document.querySelector('h3').innerHTML = 'Good bye!';


    }if (age.value > 14){
        alert("Your age is older than mine 😊");
        alert("A child who is older than a child is older and has more life experience. Because an older person is considered to have lived and seen more in life than a small child. Younger people should always respect older people😊")
        document.querySelector('p').innerHTML = '😊';
        document.body.style.background = 'yellow';
        document.querySelector('h1').innerHTML = 'Hello, a person older than me👇';
        document.querySelector('h3').innerHTML = 'Good bye!';


    }if (age.value < 14){
        alert("Your age is younger than mine😎");
        alert('The knowledge of a small person is smaller than that of a big person. Their experience in life is less than that of older people, but now there are people who surprised the world even though they were small');
        document.body.style.background = 'yellow';
        document.querySelector('p').innerHTML = '😎';
        document.querySelector('h1').innerHTML = 'Hello, little boy than me';
        document.querySelector('h3').innerHTML = 'Good bye!';
       
    }
}