document.querySelector('form').addEventListener('submit', function(event) {
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        event.preventDefault(); // Prevent form submission
    }
});
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const services = document.querySelectorAll('#services ul li');
services.forEach(service => {
    service.addEventListener('click', () => {
        alert(`You clicked on: ${service.innerText}`);
        // You can replace this with content loading logic
    });
});
const navToggle = document.createElement('button');
navToggle.innerText = 'Menu';
document.querySelector('header .container').insertBefore(navToggle, document.querySelector('nav'));

navToggle.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active'); // Add a class that toggles visibility
});
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < 50) {
            const id = section.getAttribute('id');
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});
const backToTopButton = document.createElement('button');
backToTopButton.innerText = 'Top';
backToTopButton.style.display = 'none'; // Initially hidden
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});