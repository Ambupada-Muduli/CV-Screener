console.log("Welcome to cv screener");

const data = [
    {
        name: 'Harini Kashyap',
        age: 23,
        gender: "female",
        city: 'Bengaluru',
        language: 'Java Script',
        framework: 'React.js',
        image: 'https://randomuser.me/api/portraits/women/79.jpg'
    },
    {
        name: 'Ragini Sahu',
        age: 24,
        gender: "female",
        city: 'UP',
        language: 'Java Script',
        framework: 'Angular.js',
        image: 'https://randomuser.me/api/portraits/women/67.jpg'
    },
    {
        name: 'Baluswamy Khadiri',
        age: 27,
        gender: "male",
        city: 'Hyderabad',
        language: 'Java',
        framework: 'Spring',
        image: 'https://randomuser.me/api/portraits/men/55.jpg'
    },
    {
        name: 'K.Balakrishna',
        age: 21,
        gender: "male",
        city: 'Andhra Pradesh',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/64.jpg'
    },
    {
        name: 'Kumari Mohanty',
        age: 23,
        gender: "female",
        city: 'Odisha',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/80.jpg'
    }

]

//CV iterators
function cvIterator(profiles){
    let nextIndex = 0;
    return {
        next: function(){
            return nextIndex < profiles.length ? 
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}
const candidates = cvIterator(data);

//button listner for next button
const next = document.getElementById('next');
next.addEventListener('click' , nextCV);



function nextCV(){
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    image.innerHTML = `<img src ='${currentCandidate.image}>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in: ${currentCandidate.city}</li>
    <li class="list-group-item">Language: ${currentCandidate.language}</li>
    <li class="list-group-item">Framework: ${currentCandidate.framework}</li>
  </ul>`

}