document.addEventListener('DOMContentLoaded', function () {
    // Sample activities data
    const activities = [
        {
            id: 1,
            title: 'Tree Plantation Drive',
            date: '2023-10-15',
            location: 'College Campus',
            category: 'environmental',
            participants: 50,
            impact: 'High',
            description: 'A tree plantation drive was organized to promote environmental awareness and increase green cover on the campus. Volunteers planted over 100 saplings.',
            outcomes: 'Increased green cover and awareness about environmental conservation.',
            volunteers: 'John Doe, Jane Smith',
            images: ['planttrees.jpg', 'tree2.jpg']
        },
        {
            id: 2,
            title: 'Health Camp for Rural Areas',
            date: '2023-11-20',
            location: 'Local Village',
            category: 'health',
            participants: 30,
            impact: 'Medium',
            description: 'A health camp was organized in a nearby village to provide free health check-ups, medicines, and medical advice to underprivileged communities.',
            outcomes: 'Over 200 villagers received medical check-ups and free medicines.',
            volunteers: 'Alice Johnson, Bob Brown',
            images: ['healthcamp.jpg', 'health2.jpg']
        },
        {
            id: 3,
            title: 'Blood Donation Camp',
            date: '2023-12-10',
            location: 'College Auditorium',
            category: 'health',
            participants: 80,
            impact: 'High',
            description: 'A blood donation camp was organized in collaboration with the local blood bank. Students and faculty actively participated in donating blood.',
            outcomes: 'Collected over 150 units of blood for the local blood bank.',
            volunteers: 'Sarah Lee, Michael Wang',
            images: ['blooddonation.jpg', 'blood2.jpg']
        },
        {
            id: 4,
            title: 'Literacy Drive for Children',
            date: '2024-01-05',
            location: 'Local School',
            category: 'education',
            participants: 40,
            impact: 'Medium',
            description: 'A literacy drive was conducted to teach basic reading and writing skills to underprivileged children in a local school.',
            outcomes: 'Over 50 children benefited from the program, improving their literacy skills.',
            volunteers: 'Emily Davis, Robert Green',
            images: ['DigitalLiteracy.jpg', 'literacy2.jpg']
        },
        {
            id: 5,
            title: 'Disaster Relief Camp',
            date: '2024-02-15',
            location: 'Flood-Affected Area',
            category: 'disaster',
            participants: 60,
            impact: 'High',
            description: 'A disaster relief camp was organized to provide food, water, and medical aid to people affected by recent floods in the region.',
            outcomes: 'Provided relief to over 500 affected families.',
            volunteers: 'David Wilson, Maria Garcia',
            images: ['Orphan.jpg', 'disaster2.jpg']
        },
        {
            id: 6,
            title: 'Cleanliness Drive in the City',
            date: '2024-03-22',
            location: 'City Park',
            category: 'social',
            participants: 70,
            impact: 'Medium',
            description: 'A cleanliness drive was organized to clean a public park and raise awareness about the importance of maintaining cleanliness in public spaces.',
            outcomes: 'Collected over 200 kg of waste and improved the park\'s cleanliness.',
            volunteers: 'Laura Martinez, James Brown',
            images: ['cleanup.jpg', 'clean2.jpg']
        }
    ];



    let isLoggedIn = false;

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

    // Display activities on the page
    function displayActivities(filteredActivities) {
        activitiesList.innerHTML = '';
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedActivities = filteredActivities.slice(start, end);

        paginatedActivities.forEach(activity => {
            const activityCard = document.createElement('div');
            activityCard.className = 'activity-card';
            activityCard.innerHTML = `
                <div class="activity-card-image">
                    <img src="${activity.images[0]}" alt="${activity.title}">
                    <div class="activity-category-badge">${activity.category}</div>
                </div>
                <div class="activity-card-content">
                    <h3 class="activity-card-title">${activity.title}</h3>
                    <div class="activity-meta">
                        <span>${activity.date}</span>
                        <span>${activity.location}</span>
                    </div>
                    <div class="activity-stats">
                        <div class="activity-stat">
                            <i class="fas fa-users"></i> ${activity.participants} Participants
                        </div>
                        <div class="activity-stat">
                            <i class="fas fa-chart-line"></i> ${activity.impact} Impact
                        </div>
                    </div>
                    <button class="btn-outline view-details" data-id="${activity.id}">View Details</button>
                </div>
            `;
            activitiesList.appendChild(activityCard);
        });

        updatePagination(filteredActivities.length);
    }

    // Update pagination
    function updatePagination(totalItems) {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        pageNumbers.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageNumber = document.createElement('span');
            pageNumber.textContent = i;
            if (i === currentPage) {
                pageNumber.classList.add('active');
            }
            pageNumber.addEventListener('click', () => {
                currentPage = i;
                displayActivities(filteredActivities);
            });
            pageNumbers.appendChild(pageNumber);
        }

        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages;
    }

    // Filter activities based on search, category, year, and sort options
    function filterActivities() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedYear = yearFilter.value;
        const selectedCategory = document.querySelector('.category-tab.active').dataset.category;
        const sortOption = sortOptions.value;

        let filteredActivities = activities.filter(activity => {
            return (activity.title.toLowerCase().includes(searchTerm) || activity.description.toLowerCase().includes(searchTerm)) &&
                   (selectedYear ? activity.date.startsWith(selectedYear) : true) &&
                   (selectedCategory !== 'all' ? activity.category === selectedCategory : true);
        });

        switch (sortOption) {
            case 'date-new':
                filteredActivities.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'date-old':
                filteredActivities.sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            case 'impact-high':
                filteredActivities.sort((a, b) => b.impact.localeCompare(a.impact));
                break;
            case 'participants-high':
                filteredActivities.sort((a, b) => b.participants - a.participants);
                break;
        }

        displayActivities(filteredActivities);
    }

    // Show activity details in modal
    function showActivityDetails(activity) {
        modalTitle.textContent = activity.title;
        activityDate.textContent = activity.date;
        activityLocation.textContent = activity.location;
        activityCategory.textContent = activity.category;
        activityParticipants.textContent = activity.participants;
        activityImpact.textContent = activity.impact;
        activityDescription.textContent = activity.description;
        activityOutcomes.textContent = activity.outcomes;
        activityVolunteers.textContent = activity.volunteers;

        activityMainImage.src = activity.images[0];
        activityThumbnails.innerHTML = '';

        activity.images.forEach((image, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'activity-thumbnail';
            if (index === 0) {
                thumbnail.classList.add('active');
            }
            thumbnail.innerHTML = `<img src="${image}" alt="Thumbnail ${index + 1}">`;
            thumbnail.addEventListener('click', () => {
                activityMainImage.src = image;
                document.querySelectorAll('.activity-thumbnail').forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
            });
            activityThumbnails.appendChild(thumbnail);
        });

        activityModal.style.display = 'block';
    }

    // Event listeners for category tabs
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelector('.category-tab.active').classList.remove('active');
            tab.classList.add('active');
            filterActivities();
        });
    });

    // Event listeners for search, filters, and sort
    searchInput.addEventListener('input', filterActivities);
    yearFilter.addEventListener('change', filterActivities);
    sortOptions.addEventListener('change', filterActivities);

    // Event listeners for pagination
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            filterActivities();
        }
    });

    nextPageBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(filteredActivities.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            filterActivities();
        }
    });

    // Event listener for viewing activity details
    activitiesList.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-details')) {
            const activityId = parseInt(e.target.dataset.id);
            const activity = activities.find(a => a.id === activityId);
            showActivityDetails(activity);
        }
    });

    // Event listeners for closing the modal
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activityModal.style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target === activityModal) {
            activityModal.style.display = 'none';
        }
    });

    // Initial display of activities
    let filteredActivities = activities;
    displayActivities(filteredActivities);
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