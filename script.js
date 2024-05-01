document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu-link');
    const menuSections = document.querySelectorAll('.menu-section');

    // Smooth scrolling for menu links
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });

    // Add active class to menu link on scroll
    window.addEventListener('scroll', function() {
        let fromTop = window.scrollY + 550;

        menuSections.forEach(section => {
            if (fromTop >= section.offsetTop && fromTop < section.offsetTop + section.offsetHeight) {
                menuLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${section.id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    });
// Display menu items on hover
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.transition = 'transform 0.3s ease';
    });
});

// Add click event listener to menu items
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        const itemName = this.querySelector('.item-name').textContent;
        const itemPrice = this.querySelector('.item-price').textContent;
        alert(`You have added ${itemName} to your cart for ${itemPrice}`);
    });
});
    
});
