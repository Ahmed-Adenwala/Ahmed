
document.addEventListener('DOMContentLoaded', function () {
    const fanLogo = document.querySelector('.fanlogo img');
    fanLogo.classList.add('spin');
});

    const dynamicText = document.getElementById('dynamic-text');
    const words = ['Ahmed', 'Accountant', 'Web Developer'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];

        if (!isDeleting) {
            dynamicText.textContent = currentWord.slice(0, charIndex + 1);
            charIndex++;
        } else {
            dynamicText.textContent = currentWord.slice(0, charIndex - 1);
            charIndex--;
        }


        let typingSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && charIndex === currentWord.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500;
        }


        setTimeout(type, typingSpeed);
    }


    window.addEventListener('load', () => {
        setTimeout(type, 500); 
    });

    document.querySelector('a[href="#contact"]').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        window.scrollTo({
            top: document.body.scrollHeight, // Scroll to the end of the page
            behavior: 'smooth' // Smooth scroll effect
        });
    });


