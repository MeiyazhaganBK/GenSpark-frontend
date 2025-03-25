document.addEventListener('DOMContentLoaded', function () {
    // Sample gallery data
    const galleryData = [
        {
            id: 1,
            type: 'image',
            src: 'planttrees.jpg',
            category: 'environmental',
            caption: 'Tree Plantation Drive - 2023'
        },
        {
            id: 2,
            type: 'image',
            src: 'healthcamp.jpg',
            category: 'health',
            caption: 'Health Camp for Rural Areas - 2023'
        },
        {
            id: 3,
            type: 'video',
            src: 'Blood donation_ an act of solidarity - World Blood Donor Day 2022.mp4',
            category: 'health',
            caption: 'Blood Donation Camp - 2023'
        },
        {
            id: 4,
            type: 'image',
            src: 'DigitalLiteracy.jpg',
            category: 'education',
            caption: 'Literacy Drive for Children - 2024'
        },
        {
            id: 5,
            type: 'image',
            src: 'Orphan.jpg',
            category: 'disaster',
            caption: 'Disaster Relief Camp - 2024'
        },
        {
            id: 6,
            type: 'image',
            src: 'cleanup.jpg',
            category: 'social',
            caption: 'Cleanliness Drive in the City - 2024'
        }
    ];

    
    // DOM Elements
    const galleryContainer = document.getElementById('galleryContainer');
    const categoryTabs = document.querySelectorAll('.category-tab');
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxContent = document.getElementById('lightboxContent');
    const closeBtn = document.querySelector('.close-btn');

    // Display gallery items
    function displayGallery(filteredData) {
        galleryContainer.innerHTML = '';
        filteredData.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.dataset.category = item.category;

            if (item.type === 'image') {
                galleryItem.innerHTML = `
                    <img src="${item.src}" alt="${item.caption}">
                    <div class="gallery-caption">${item.caption}</div>
                `;
            } else if (item.type === 'video') {
                galleryItem.innerHTML = `
                    <video controls>
                        <source src="${item.src}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div class="gallery-caption">${item.caption}</div>
                `;
            }

            galleryItem.addEventListener('click', () => openLightbox(item));
            galleryContainer.appendChild(galleryItem);
        });
    }

    // Open lightbox with media
    function openLightbox(item) {
        lightboxContent.innerHTML = '';
        if (item.type === 'image') {
            lightboxContent.innerHTML = `
                <img src="${item.src}" alt="${item.caption}">
                <p>${item.caption}</p>
            `;
        } else if (item.type === 'video') {
            lightboxContent.innerHTML = `
                <video controls autoplay>
                    <source src="${item.src}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <p>${item.caption}</p>
            `;
        }
        lightboxModal.style.display = 'block';
    }

    // Close lightbox
    closeBtn.addEventListener('click', () => {
        lightboxModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
            lightboxModal.style.display = 'none';
        }
    });

    // Filter gallery by category
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelector('.category-tab.active').classList.remove('active');
            tab.classList.add('active');
            const category = tab.dataset.category;
            const filteredData = category === 'all' ? galleryData : galleryData.filter(item => item.category === category);
            displayGallery(filteredData);
        });
    });

    // Initial display of all gallery items
    displayGallery(galleryData);
});



// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function () {
            // Toggle the display of the navigation links
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none'; // Hide the menu
            } else {
                navLinks.style.display = 'flex'; // Show the menu
            }
        });
    }
});






    // DOM Elements
    const activitiesList = document.getElementById('activitiesList');
    const categoryTabs = document.querySelectorAll('.category-tab');
    const searchInput = document.getElementById('searchInput');
    const yearFilter = document.getElementById('yearFilter');
    const sortOptions = document.getElementById('sortOptions');
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');
    const pageNumbers = document.getElementById('pageNumbers');
    const activityModal = document.getElementById('activityModal');
    const modalTitle = document.getElementById('modalTitle');
    const activityMainImage = document.getElementById('activityMainImage');
    const activityThumbnails = document.getElementById('activityThumbnails');
    const activityDate = document.getElementById('activityDate');
    const activityLocation = document.getElementById('activityLocation');
    const activityCategory = document.getElementById('activityCategory');
    const activityParticipants = document.getElementById('activityParticipants');
    const activityImpact = document.getElementById('activityImpact');
    const activityDescription = document.getElementById('activityDescription');
    const activityOutcomes = document.getElementById('activityOutcomes');
    const activityVolunteers = document.getElementById('activityVolunteers');
    const downloadCertificate = document.getElementById('downloadCertificate');

    let currentPage = 1;
    const itemsPerPage = 3; // Display 3 cards per page
    let isLoggedIn = false;


document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    checkLoginStatus();
    
    // Load events
    displayEvents();
    
    // Setup pagination
    setupPagination();
    
    // Setup event listeners
    setupEventListeners();
});

function setupEventListeners() {
    // Login button
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });
    
    // Logout button
    logoutBtn.addEventListener('click', () => {
        logout();
    });
    
    // Close modal buttons
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            loginModal.style.display = 'none';
            eventModal.style.display = 'none';
        });
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (e.target === eventModal) {
            eventModal.style.display = 'none';
        }
    });
    
    // Form toggle
    showRegisterFormLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });
    
    showLoginFormLink.addEventListener('click', (e) => {
        e.preventDefault();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });
    
    // Login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        login();
    });
    
    // Register form submission
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        register();
    });
    
    // Pagination
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayEvents();
            updatePaginationUI();
        }
    });
    
    nextPageBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displayEvents();
            updatePaginationUI();
        }
    });
    
    // Search
    searchBtn.addEventListener('click', () => {
        filterEvents();
    });
    
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            filterEvents();
        }
    });
    
    // Filters
    categoryFilter.addEventListener('change', filterEvents);
    sortOptions.addEventListener('change', filterEvents);
    
    // Mobile menu toggle
    mobileMenu.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Login function
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (!email || !password) {
        showNotification('Please enter both email and password');
        return;
    }
    
    // Simulate login (in a real app, this would be a server request)
    localStorage.setItem('nssUserLoggedIn', 'true');
    localStorage.setItem('nssUserEmail', email);
    
    // Update UI
    isLoggedIn = true;
    updateAuthUI();
    
    // Close modal and show notification
    loginModal.style.display = 'none';
    showNotification('Login successful');
}

// Register function
function register() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const college = document.getElementById('college').value;
    const phone = document.getElementById('phone').value;
    
    // Simple validation
    if (!fullName || !email || !password || !college || !phone) {
        showNotification('Please fill all the fields');
        return;
    }
    
    // Simulate registration (in a real app, this would be a server request)
    localStorage.setItem('nssUserLoggedIn', 'true');
    localStorage.setItem('nssUserEmail', email);
    localStorage.setItem('nssUserName', fullName);
    
    // Update UI
    isLoggedIn = true;
    updateAuthUI();
    
    // Close modal and show notification
    loginModal.style.display = 'none';
    showNotification('Registration successful');
}

// Logout function
function logout() {
    // Clear localStorage
    localStorage.removeItem('nssUserLoggedIn');
    localStorage.removeItem('nssUserEmail');
    localStorage.removeItem('nssUserName');
    
    // Update UI
    isLoggedIn = false;
    updateAuthUI();
    
    // Show notification
    showNotification('Logged out successfully');
}

// Check login status
function checkLoginStatus() {
    isLoggedIn = localStorage.getItem('nssUserLoggedIn') === 'true';
    updateAuthUI();
}

// Update authentication UI
function updateAuthUI() {
    if (isLoggedIn) {
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
    } else {
        loginBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'none';
    }
}

// Show notification
function showNotification(message) {
    notificationMessage.textContent = message;
    notificationElement.style.display = 'block';
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notificationElement.style.display = 'none';
    }, 3000);
}

