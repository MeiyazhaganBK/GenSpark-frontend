// Sample activities data
const activitiesData = [
    {
        id: 1,
        title: "VILLAGE ADOPTION PROGRAM",
        date: "2025-02-15",
        location: "Kodaikanal Village",
        category: "social",
        description: "We adopted a village near Kodaikanal and conducted various awareness programs, health checkups, and infrastructure development initiatives to improve the quality of life for the villagers.",
        outcomes: "Improved sanitation facilities, health awareness, and educational support for children in the village. Created a sustainable development plan for the village that will be implemented over the next two years.",
        volunteers: "NSS Social Service Wing & Rural Development Team",
        participants: 45,
        impact: "High",
        images: ["village-adoption1.jpg", "village-adoption2.jpg", "village-adoption3.jpg"]
    },
    {
        id: 2,
        title: "PLASTIC FREE CAMPUS DRIVE",
        date: "2025-01-20",
        location: "College Campus",
        category: "environmental",
        description: "A week-long campaign to make our campus plastic-free. Activities included awareness sessions, collection of plastic waste, and installation of plastic collection bins around campus.",
        outcomes: "Collected over 200 kg of plastic waste, installed 15 segregation bins across campus, and successfully reduced plastic usage in campus by 70% through awareness and alternate solutions.",
        volunteers: "NSS Environmental Wing & Eco Club",
        participants: 75,
        impact: "High",
        images: ["plastic-free1.jpg", "plastic-free2.jpg", "plastic-free3.jpg"]
    },
    {
        id: 3,
        title: "LITERACY DRIVE FOR RURAL CHILDREN",
        date: "2024-12-10",
        location: "Nearby Villages",
        category: "education",
        description: "A month-long literacy program for children in rural areas. NSS volunteers visited villages every weekend to teach children basic reading, writing, and arithmetic skills.",
        outcomes: "Improved literacy skills for 120 children across 5 villages. Created a sustainable education support system with local teachers and volunteers.",
        volunteers: "NSS Education Wing",
        participants: 30,
        impact: "Medium",
        images: ["literacy1.jpg", "literacy2.jpg", "literacy3.jpg"]
    },
    {
        id: 4,
        title: "DENGUE AWARENESS CAMPAIGN",
        date: "2024-11-15",
        location: "College and Surrounding Areas",
        category: "health",
        description: "A campaign to spread awareness about dengue prevention and control. Volunteers conducted door-to-door awareness sessions and organized cleanup drives to eliminate mosquito breeding grounds.",
        outcomes: "Reached over 500 households with dengue prevention information. Eliminated potential breeding sites in college surroundings. Distributed 1000 pamphlets on dengue prevention.",
        volunteers: "NSS Health Wing & Medical Students",
        participants: 50,
        impact: "High",
        images: ["dengue1.jpg", "dengue2.jpg", "dengue3.jpg"]
    },
    {
        id: 5,
        title: "DISASTER MANAGEMENT WORKSHOP",
        date: "2024-10-05",
        location: "College Auditorium",
        category: "disaster",
        description: "A two-day workshop on disaster management and preparedness. Experts from disaster management agencies conducted sessions on various aspects of disaster response and rescue operations.",
        outcomes: "Trained 120 students in basic disaster response techniques. Created a college disaster response team with 25 well-trained volunteers.",
        volunteers: "NSS Disaster Management Wing & Civil Defense",
        participants: 120,
        impact: "Medium",
        images: ["disaster1.jpg", "disaster2.jpg", "disaster3.jpg"]
    },
    {
        id: 6,
        title: "RAINWATER HARVESTING PROJECT",
        date: "2024-09-20",
        location: "College Campus",
        category: "environmental",
        description: "Implementation of rainwater harvesting systems across the campus to conserve water and recharge groundwater. The project included installation of collection systems and creation of recharge pits.",
        outcomes: "Installed 5 rainwater harvesting systems across campus. Estimated to conserve approximately 500,000 liters of water annually.",
        volunteers: "NSS Environmental Wing & Civil Engineering Department",
        participants: 40,
        impact: "High",
        images: ["rainwater1.jpg", "rainwater2.jpg", "rainwater3.jpg"]
    },
    {
        id: 7,
        title: "ORPHANAGE VISIT AND SUPPORT",
        date: "2024-08-15",
        location: "City Orphanage",
        category: "social",
        description: "A visit to the local orphanage to spend time with children and provide them with educational materials, clothes, and essentials. The volunteers also organized recreational activities for the children.",
        outcomes: "Provided support to 45 children with educational materials, clothes, and essentials. Established a regular monthly visit program for continuous support.",
        volunteers: "NSS Social Service Wing",
        participants: 25,
        impact: "Medium",
        images: ["orphanage1.jpg", "orphanage2.jpg", "orphanage3.jpg"]
    },
    {
        id: 8,
        title: "DRUG ABUSE PREVENTION AWARENESS",
        date: "2024-07-10",
        location: "College and Nearby Schools",
        category: "health",
        description: "A series of awareness programs on drug abuse prevention targeting college students and school children. The campaign included educational sessions, street plays, and distribution of awareness materials.",
        outcomes: "Conducted awareness sessions for 1000+ students across 5 schools and our college. Created a peer counseling system for at-risk students.",
        volunteers: "NSS Health Wing & Psychology Department",
        participants: 35,
        impact: "High",
        images: ["drug1.jpg", "drug2.jpg", "drug3.jpg"]
    },
    {
        id: 9,
        title: "ELDER CARE PROGRAM",
        date: "2024-06-25",
        location: "Old Age Home",
        category: "social",
        description: "A support program for the elderly residents of a local old age home. Volunteers spent time with the residents, organized health checkups, and helped with maintenance of the facility.",
        outcomes: "Provided companionship and support to 30 elderly residents. Organized health checkups and donated essential supplies to the facility.",
        volunteers: "NSS Social Service Wing & Medical Students",
        participants: 20,
        impact: "Medium",
        images: ["elder1.jpg", "elder2.jpg", "elder3.jpg"]
    }
];

// Global variables
let currentPage = 1;
const activitiesPerPage = 3;
let filteredActivities = [...activitiesData];
let isLoggedIn = false;
let isAdmin = false;
let currentCategory = 'all';

// DOM Elements
const activitiesList = document.getElementById('activitiesList');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const pageNumbers = document.getElementById('pageNumbers');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const loginModal = document.getElementById('loginModal');
const activityModal = document.getElementById('activityModal');
const addActivityModal = document.getElementById('addActivityModal');
const notificationElement = document.getElementById('notification');
const notificationMessage = document.getElementById('notificationMessage');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const yearFilter = document.getElementById('yearFilter');
const sortOptions = document.getElementById('sortOptions');
const categoryTabs = document.getElementById('categoryTabs');
const adminActions = document.getElementById('adminActions');
const addActivityBtn = document.getElementById('addActivityBtn');
const showRegisterFormLink = document.getElementById('showRegisterForm');
const showLoginFormLink = document.getElementById('showLoginForm');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');
const downloadCertificateBtn = document.getElementById('downloadCertificate');

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    checkLoginStatus();
    
    // Load activities
    displayActivities();
    
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
            activityModal.style.display = 'none';
            addActivityModal.style.display = 'none';
        });
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (e.target === activityModal) {
            activityModal.style.display = 'none';
        }
        if (e.target === addActivityModal) {
            addActivityModal.style.display = 'none';
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
            displayActivities();
            updatePaginationUI();
        }
    });
    
    nextPageBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(filteredActivities.length / activitiesPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displayActivities();
            updatePaginationUI();
        }
    });
    
    // Search
    searchBtn.addEventListener('click', () => {
        filterActivities();
    });
    
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            filterActivities();
        }
    });
    
    // Filters
    yearFilter.addEventListener('change', filterActivities);
    sortOptions.addEventListener('change', filterActivities);
    
    // Category tabs
    categoryTabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-tab')) {
            // Remove active class from all tabs
            document.querySelectorAll('.category-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Add active class to clicked tab
            e.target.classList.add('active');
            
            // Filter activities by category
            currentCategory = e.target.getAttribute('data-category');
            filterActivities();
        }
    });
    
    // Add activity button (for admins)
    addActivityBtn.addEventListener('click', () => {
        addActivityModal.style.display = 'block';
    });
    
    // Add activity form submission
    document.getElementById('addActivityForm').addEventListener('submit', (e) => {
        e.preventDefault();
        addNewActivity();
    });
    
    // Download certificate button
    downloadCertificateBtn.addEventListener('click', () => {
        if (isLoggedIn) {
            showNotification('Certificate downloaded successfully!');
        } else {
            showNotification('Please login to download certificates');
            activityModal.style.display = 'none';
            loginModal.style.display = 'block';
        }
    });
    
    // Mobile menu toggle
    mobileMenu.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Display activities with pagination
function displayActivities() {
    const startIndex = (currentPage - 1) * activitiesPerPage;
    const endIndex = startIndex + activitiesPerPage;
    const currentActivities = filteredActivities.slice(startIndex, endIndex);
    
    // Clear previous activities
    activitiesList.innerHTML = '';
    
    if (currentActivities.length === 0) {
        activitiesList.innerHTML = '<p class="no-activities">No activities found matching your criteria.</p>';
        return;
    }
    
    // Display activities
    currentActivities.forEach(activity => {
        const activityCard = document.createElement('div');
        activityCard.className = 'activity-card';
        
        // Format date
        const activityDate = new Date(activity.date);
        const formattedDate = activityDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        activityCard.innerHTML = `
            <img src="${activity.images[0]}" alt="${activity.title}">
            <div class="activity-card-content">
                <h3>${activity.title}</h3>
                <div class="activity-meta">
                    <span>${formattedDate}</span>
                    <span>${activity.category.charAt(0).toUpperCase() + activity.category.slice(1)}</span>
                </div>
                <p>${activity.description.substring(0, 100)}...</p>
                <div class="activity-stats">
                    <span><i class="fas fa-users"></i> ${activity.participants} Participants</span>
                    <span><i class="fas fa-chart-line"></i> ${activity.impact} Impact</span>
                </div>
                <button class="btn-outline view-details" data-id="${activity.id}">View Details</button>
            </div>
        `;
        
        activitiesList.appendChild(activityCard);
    });
    
    // Add event listeners to view details buttons
    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const activityId = parseInt(e.target.getAttribute('data-id'));
            showActivityDetails(activityId);
        });
    });
}

// Show activity details in modal
function showActivityDetails(activityId) {
    const activity = activitiesData.find(activity => activity.id === activityId);
    if (!activity) return;
    
    // Format date
    const activityDate = new Date(activity.date);
    const formattedDate = activityDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Update modal content
    document.getElementById('modalTitle').textContent = activity.title;
    document.getElementById('activityDate').textContent = formattedDate;
    document.getElementById('activityLocation').textContent = activity.location;
    document.getElementById('activityCategory').textContent = activity.category.charAt(0).toUpperCase() + activity.category.slice(1);
    document.getElementById('activityParticipants').textContent = activity.participants;
    document.getElementById('activityImpact').textContent = activity.impact;
    document.getElementById('activityDescription').textContent = activity.description;
    document.getElementById('activityOutcomes').textContent = activity.outcomes;
    document.getElementById('activityVolunteers').textContent = activity.volunteers;
    
    // Update main image
    document.getElementById('activityMainImage').src = activity.images[0];
    document.getElementById('activityMainImage').alt = activity.title;
    
    // Update thumbnails
    const thumbnailsContainer = document.getElementById('activityThumbnails');
    thumbnailsContainer.innerHTML = '';
    
    activity.images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        thumbnail.innerHTML = `<img src="${image}" alt="Image ${index + 1}">`;
        
        thumbnail.addEventListener('click', () => {
            document.getElementById('activityMainImage').src = image;
        });
        
        thumbnailsContainer.appendChild(thumbnail);
    });
    
    // Show download certificate button if user participated (for this demo, we'll show it for logged-in users)
    downloadCertificateBtn.style.display = isLoggedIn ? 'inline-block' : 'none';
    
    // Show the modal
    activityModal.style.display = 'block';
}

// Filter activities based on search, year, category, and sort
function filterActivities() {
    const searchTerm = searchInput.value.toLowerCase();
    const year = yearFilter.value;
    const sortOption = sortOptions.value;
    
    // Filter by search term, year, and category
    filteredActivities = activitiesData.filter(activity => {
        const matchSearch = activity.title.toLowerCase().includes(searchTerm) || 
                           activity.description.toLowerCase().includes(searchTerm);
        const matchYear = year === '' || activity.date.includes(year);
        const matchCategory = currentCategory === 'all' || activity.category === currentCategory;
        
        return matchSearch && matchYear && matchCategory;
    });
    
    // Sort activities
    sortActivities(sortOption);
    
    // Reset to page 1
    currentPage = 1;
    
    // Update UI
    displayActivities();
    setupPagination();
}

// Sort activities
function sortActivities(sortOption) {
    switch (sortOption) {
        case 'date-new':
            filteredActivities.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'date-old':
            filteredActivities.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'impact-high':
            filteredActivities.sort((a, b) => {
                const impactValues = { 'High': 3, 'Medium': 2, 'Low': 1 };
                return impactValues[b.impact] - impactValues[a.impact];
            });
            break;
        case 'participants-high':
            filteredActivities.sort((a, b) => b.participants - a.participants);
            break;
    }
}

// Setup pagination
function setupPagination() {
    const totalPages = Math.ceil(filteredActivities.length / activitiesPerPage);
    
    pageNumbers.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        const span = document.createElement('span');
        span.textContent = i;
        if (i === currentPage) {
            span.classList.add('active');
        }
        
        span.addEventListener('click', () => {
            currentPage = i;
            displayActivities();
            updatePaginationUI();
        });
        
        pageNumbers.appendChild(span);
    }
    
    updatePaginationUI();
}

// Update pagination UI
function updatePaginationUI() {
    const totalPages = Math.ceil(filteredActivities.length / activitiesPerPage);
    
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
    
    document.querySelectorAll('#pageNumbers span').forEach((span, index) => {
        span.classList.toggle('active', index + 1 === currentPage);
    });
}

// Add new activity (for admins)
function addNewActivity() {
    // Get form values
    const title = document.getElementById('activityTitle').value;
    const category = document.getElementById('activityCategory').value;
    const date = document.getElementById('activityDate').value;
    const location = document.getElementById('activityLocation').value;
    const participants = parseInt(document.getElementById('activityParticipants').value);
    const impact = document.getElementById('activityImpact').value;
    const description = document.getElementById('activityDescription').value;
    const outcomes = document.getElementById('activityOutcomes').value;
    const volunteers = document.getElementById('activityVolunteers').value;
    
    // Simple validation
    if (!title || !category || !date || !location || !participants || !impact || !description || !outcomes || !volunteers) {
        showNotification('Please fill all the fields');
        return;
    }
    
    // Create new activity
    const newActivity = {
        id: activitiesData.length + 1,
        title: title.toUpperCase(),
        date: date,
        location: location,
        category: category,
        description: description,
        outcomes: outcomes,
        volunteers: volunteers,
        participants: participants,
        impact: impact,
        images: ["default1.jpg", "default2.jpg", "default3.jpg"] // Default images
    };
    
    // Add to activities data
    activitiesData.unshift(newActivity);
    filteredActivities = [...activitiesData];
    
    // Reset form
    document.getElementById('addActivityForm').reset();
    
    // Close modal
    addActivityModal.style.display = 'none';
    
    // Show notification
    showNotification('Activity added successfully');
    
    // Update UI
    filterActivities();
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
    
    // Check if admin (for demo purposes)
    isAdmin = email.includes('admin');
    
    // Simulate login (in a real app, this would be a server request)
    localStorage.setItem('nssUserLoggedIn', 'true');
    localStorage.setItem('nssUserEmail', email);
    localStorage.setItem('nssUserIsAdmin', isAdmin.toString());
    
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
    const department = document.getElementById('department').value;
    const phone = document.getElementById('phone').value;
    
    // Simple validation
    if (!fullName || !email || !password || !department || !phone) {
        showNotification('Please fill all the required fields');
        return;
    }
    
    // Simulate registration (in a real app, this would be a server request)
    localStorage.setItem('nssUserLoggedIn', 'true');
    localStorage.setItem('nssUserEmail', email);
    localStorage.setItem('nssUserName', fullName);
    localStorage.setItem('nssUserIsAdmin', 'false');
    
    // Update UI
    isLoggedIn = true;
    isAdmin = false;
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
    localStorage.removeItem('nssUserIsAdmin');
    
    // Update UI
    isLoggedIn = false;
    isAdmin = false;
    updateAuthUI();
    
    // Show notification
    showNotification('Logged out successfully');
}

// Check login status
function checkLoginStatus() {
    isLoggedIn = localStorage.getItem('nssUserLoggedIn') === 'true';
    isAdmin = localStorage.getItem('nssUserIsAdmin') === 'true';
    updateAuthUI();
}

// Update authentication UI
function updateAuthUI() {
    if (isLoggedIn) {
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
        
        // Show admin actions if user is admin
        adminActions.style.display = isAdmin ? 'block' : 'none';
    } else {
        loginBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'none';
        adminActions.style.display = 'none';
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