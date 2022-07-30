const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');

const btn = document.getElementsByClassName('.btn-submit');

const ratings = document.querySelectorAll('.buttons button');

for(let i = 0; i< ratings.length;i++){
    ratings[i].addEventListener('click', function(){
        let rating = ratings[i].innerHTML

        for(let i = 0; i< ratings.length;i++){
            ratings[i].classList.contains('active');
            ratings[i].classList.remove('selected');
        }
        ratings[i].classList.add('selected');

        btn.addEventListener('click', function(){
            console.log(rating);
        })
    }
    )
}