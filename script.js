// Sample event data
const eventsData = [
    {
        id: 1,
        title: "TREE PLANTATION DRIVE",
        date: "2025-03-25",
        location: "College Campus",
        category: "Environmental",
        description: "Join us for a tree plantation drive to make our campus greener. We aim to plant 100 saplings in this event.",
        organizers: "Environment Club & NSS Unit",
        image: "planttrees.jpg"
    },
    {
        id: 2,
        title: "BLOOD DONATION CAMP",
        date: "2025-04-05",
        location: "College Auditorium",
        category: "Health",
        description: "Annual blood donation camp organized in collaboration with City Blood Bank. Your small contribution can save lives.",
        organizers: "NSS Health Wing",
        image: "blooddonation.jpg"
    },
    {
        id: 3,
        title: "DIGITAL LITERACY WORKSHOP",
        date: "2025-04-15",
        location: "Computer Lab",
        category: "Education",
        description: "Workshop aimed at teaching basic computer skills to underprivileged children from nearby communities.",
        organizers: "NSS Education Wing",
        image: "DigitalLiteracy.jpg"
    },
    {
        id: 4,
        title: "CLEANLINESS DRIVE",
        date: "2025-04-22",
        location: "College Surroundings",
        category: "Environmental",
        description: "On Earth Day, let's clean our surroundings and spread awareness about waste management.",
        organizers: "NSS Environmental Wing",
        image: "cleanup.jpg"
    },
    {
        id: 5,
        title: "AWARENESS RALLY ON ROAD SAFETY",
        date: "2025-05-01",
        location: "City Roads",
        category: "Social",
        description: "Rally to spread awareness about road safety rules and the importance of following traffic regulations.",
        organizers: "NSS & Traffic Police",
        image: "roadsafety.jpg"
    },
    {
        id: 6,
        title: "HEALTH CHECK-UP CAMP",
        date: "2025-05-10",
        location: "College Ground",
        category: "Health",
        description: "Free health check-up camp for students and staff. Various tests and consultations will be available.",
        organizers: "NSS Health Wing & Medical College",
        image: "healthcamp.jpg"
    },
    {
        id: 7,
        title: "CAREER COUNSELING FOR SCHOOL STUDENTS",
        date: "2025-05-20",
        location: "Government School",
        category: "Education",
        description: "Career counseling session for high school students to help them make informed decisions about their future.",
        organizers: "NSS Education Wing",
        image: "CAREER-COUNSELING.jpg"
    },
    {
        id: 8,
        title: "DONATION DRIVE FOR ORPHANAGE",
        date: "2025-06-01",
        location: "College Campus",
        category: "Social",
        description: "Collection of clothes, books, and other essentials for children at the local orphanage.",
        organizers: "NSS Social Service Wing",
        image: "Orphan.jpg"
    },
    {
        id: 9,
        title: "YOGA DAY CELEBRATION",
        date: "2025-06-21",
        location: "College Ground",
        category: "Health",
        description: "Join us for International Yoga Day celebrations. Learn yoga from experts and understand its benefits.",
        organizers: "NSS Health Wing & Yoga Club",
        image: "international-yoga-day.jpg"
    }
];

// Global variables
let currentPage = 1;
const eventsPerPage = 3;
let filteredEvents = [...eventsData];
let isLoggedIn = false;

// DOM Elements
const eventsList = document.getElementById('eventsList');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const pageNumbers = document.getElementById('pageNumbers');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const loginModal = document.getElementById('loginModal');
const eventModal = document.getElementById('eventModal');
const notificationElement = document.getElementById('notification');
const notificationMessage = document.getElementById('notificationMessage');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryFilter = document.getElementById('categoryFilter');
const sortOptions = document.getElementById('sortOptions');
const showRegisterFormLink = document.getElementById('showRegisterForm');
const showLoginFormLink = document.getElementById('showLoginForm');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

// Event Listeners
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

// Display events with pagination
function displayEvents() {
    const startIndex = (currentPage - 1) * eventsPerPage;
    const endIndex = startIndex + eventsPerPage;
    const currentEvents = filteredEvents.slice(startIndex, endIndex);
    
    // Clear previous events
    eventsList.innerHTML = '';
    
    if (currentEvents.length === 0) {
        eventsList.innerHTML = '<p class="no-events">No events found matching your criteria.</p>';
        return;
    }
    
    // Display events
    currentEvents.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        
        // Format date
        const eventDate = new Date(event.date);
        const formattedDate = eventDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        eventCard.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <div class="event-card-content">
                <h3>${event.title}</h3>
                <div class="event-meta">
                    <span>${formattedDate}</span>
                    <span>${event.category}</span>
                </div>
                <p>${event.description.substring(0, 100)}...</p>
                <button class="btn-outline view-details" data-id="${event.id}">View Details</button>
            </div>
        `;
        
        eventsList.appendChild(eventCard);
    });
    
    // Add event listeners to view details buttons
    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const eventId = parseInt(e.target.getAttribute('data-id'));
            showEventDetails(eventId);
        });
    });
}

// Show event details in modal
function showEventDetails(eventId) {
    const event = eventsData.find(event => event.id === eventId);
    if (!event) return;
    
    // Format date
    const eventDate = new Date(event.date);
    const formattedDate = eventDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Update modal content
    document.getElementById('modalTitle').textContent = event.title;
    document.getElementById('eventDate').textContent = formattedDate;
    document.getElementById('eventLocation').textContent = event.location;
    document.getElementById('eventCategory').textContent = event.category;
    document.getElementById('eventDescription').textContent = event.description;
    document.getElementById('eventOrganizers').textContent = event.organizers;
    
    // Show the modal
    eventModal.style.display = 'block';
    
    // Event registration button
    const registerEventBtn = document.getElementById('registerEventBtn');
    registerEventBtn.addEventListener('click', () => {
        if (isLoggedIn) {
            showNotification('You have successfully registered for this event!');
            eventModal.style.display = 'none';
        } else {
            showNotification('Please login to register for events');
            eventModal.style.display = 'none';
            loginModal.style.display = 'block';
        }
    });
}

// Filter events based on search, category, and sort
function filterEvents() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const sortOption = sortOptions.value;
    
    // Filter by search term and category
    filteredEvents = eventsData.filter(event => {
        const matchSearch = event.title.toLowerCase().includes(searchTerm) || 
                           event.description.toLowerCase().includes(searchTerm);
        const matchCategory = category === '' || event.category === category;
        
        return matchSearch && matchCategory;
    });
    
    // Sort events
    sortEvents(sortOption);
    
    // Reset to page 1
    currentPage = 1;
    
    // Update UI
    displayEvents();
    setupPagination();
}

// Sort events
function sortEvents(sortOption) {
    switch (sortOption) {
        case 'date-new':
            filteredEvents.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'date-old':
            filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'name-asc':
            filteredEvents.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'name-desc':
            filteredEvents.sort((a, b) => b.title.localeCompare(a.title));
            break;
    }
}

// Setup pagination
function setupPagination() {
    const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
    
    pageNumbers.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        const span = document.createElement('span');
        span.textContent = i;
        if (i === currentPage) {
            span.classList.add('active');
        }
        
        span.addEventListener('click', () => {
            currentPage = i;
            displayEvents();
            updatePaginationUI();
        });
        
        pageNumbers.appendChild(span);
    }
    
    updatePaginationUI();
}

// Update pagination UI
function updatePaginationUI() {
    const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
    
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
    
    document.querySelectorAll('#pageNumbers span').forEach((span, index) => {
        span.classList.toggle('active', index + 1 === currentPage);
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


