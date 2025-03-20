// Sample data for activities
const activitiesData = [
    {
        id: 1,
        title: "Tree Plantation Drive",
        category: "environmental",
        date: "2025-03-15",
        location: "College Campus",
        participants: 75,
        impact: "High",
        description: "A campus-wide initiative to plant 200 saplings of various native species. Students and faculty worked together to improve campus green cover and create awareness about environmental conservation.",
        outcomes: "Successfully planted 200 saplings with 95% survival rate. Created designated green zones across campus that will be maintained by NSS volunteers throughout the year.",
        volunteers: "Coordinator: Rahul Sharma, Assistants: Priya Patel, Ankit Singh, Divya Gupta",
        images: ["tree-planting-1.jpg", "tree-planting-2.jpg", "tree-planting-3.jpg", "tree-planting-4.jpg"],
        year: 2025
    },
    {
        id: 2,
        title: "Blood Donation Camp",
        category: "health",
        date: "2025-02-10",
        location: "College Auditorium",
        participants: 120,
        impact: "High",
        description: "A blood donation camp organized in collaboration with City Blood Bank. Students and staff participated enthusiastically to support the local blood bank's reserves.",
        outcomes: "Collected 85 units of blood which will help save up to 255 lives. Raised awareness about the importance of regular blood donation.",
        volunteers: "Coordinator: Neha Joshi, Assistants: Vikram Rathore, Sneha Desai, Ravi Kumar",
        images: ["blood-donation-1.jpg", "blood-donation-2.jpg", "blood-donation-3.jpg"],
        year: 2025
    },
    {
        id: 3,
        title: "Village School Teaching Program",
        category: "education",
        date: "2025-01-20",
        location: "Rampur Village",
        participants: 30,
        impact: "Medium",
        description: "A month-long teaching program where NSS volunteers taught Math, Science, and English to students of the village primary school. The program aimed to supplement the education of underprivileged children.",
        outcomes: "Improved academic performance of 45 students. Created educational resources that can be used by teachers after the program conclusion.",
        volunteers: "Coordinator: Aditya Kapoor, Assistants: Meera Reddy, Sanjay Joshi",
        images: ["teaching-1.jpg", "teaching-2.jpg"],
        year: 2025
    },
    {
        id: 4,
        title: "Flood Relief Camp",
        category: "disaster",
        date: "2024-08-15",
        location: "Riverside Communities",
        participants: 50,
        impact: "High",
        description: "NSS volunteers participated in relief activities for communities affected by the recent floods. Volunteers helped distribute food, water, medicines, and essential supplies.",
        outcomes: "Distributed relief packages to 200 families. Set up a temporary medical camp that served over 300 patients. Helped clean and sanitize affected areas to prevent disease outbreak.",
        volunteers: "Coordinator: Dr. Suresh Kumar, Assistants: Kavita Singh, Arjun Nair, Deepak Verma",
        images: ["flood-relief-1.jpg", "flood-relief-2.jpg", "flood-relief-3.jpg"],
        year: 2024
    },
    {
        id: 5,
        title: "Digital Literacy Workshop",
        category: "education",
        date: "2024-07-05",
        location: "Community Center",
        participants: 40,
        impact: "Medium",
        description: "A series of workshops to teach basic computer skills and internet safety to senior citizens and adults from nearby communities. The workshop covered topics like email usage, online banking, and protection from internet scams.",
        outcomes: "40 participants learned basic digital skills. 25 participants now regularly use email and online services for daily tasks.",
        volunteers: "Coordinator: Anjali Sharma, Assistants: Rohit Patel, Leela Menon",
        images: ["digital-literacy-1.jpg", "digital-literacy-2.jpg"],
        year: 2024
    },
    {
        id: 6,
        title: "Swachh Bharat Cleanliness Drive",
        category: "social",
        date: "2024-10-02",
        location: "City Market Area",
        participants: 90,
        impact: "Medium",
        description: "A large-scale cleanliness drive conducted on Gandhi Jayanti. NSS volunteers cleaned public spaces, painted walls, and installed waste bins in the local market area.",
        outcomes: "Cleaned 2 km stretch of market area. Installed 15 new waste bins. Created awareness among local shopkeepers about waste management.",
        volunteers: "Coordinator: Manish Tiwari, Assistants: Shreya Das, Karthik Iyer, Neha Sharma",
        images: ["cleanliness-1.jpg", "cleanliness-2.jpg", "cleanliness-3.jpg"],
        year: 2024
    },
    {
        id: 7,
        title: "Health Check-up Camp",
        category: "health",
        date: "2023-11-15",
        location: "Rural Health Center",
        participants: 35,
        impact: "High",
        description: "A comprehensive health check-up camp organized for economically disadvantaged communities. Doctors and medical students provided free check-ups, basic treatments, and health consultations.",
        outcomes: "Served over 300 patients. Identified 25 cases requiring further medical attention and facilitated their treatment. Distributed free medicines worth Rs. 50,000.",
        volunteers: "Coordinator: Dr. Priya Sharma, Assistants: Amit Patel, Sana Khan, Vijay Kumar",
        images: ["health-camp-1.jpg", "health-camp-2.jpg"],
        year: 2023
    },
    {
        id: 8,
        title: "Plastic-Free Campus Campaign",
        category: "environmental",
        date: "2023-09-05",
        location: "College Campus",
        participants: 60,
        impact: "Medium",
        description: "A month-long campaign to reduce single-use plastic on campus. Activities included awareness sessions, alternatives to plastic demonstrations, and collection drives for plastic waste.",
        outcomes: "Reduced campus plastic waste by 40%. Installed recycling bins across campus. Introduced bamboo and paper alternatives in college canteen.",
        volunteers: "Coordinator: Deepak Verma, Assistants: Nisha Reddy, Aryan Shah",
        images: ["plastic-free-1.jpg", "plastic-free-2.jpg"],
        year: 2023
    }
];

// DOM Elements
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const loginModal = document.getElementById('loginModal');
const activityModal = document.getElementById('activityModal');
const addActivityModal = document.getElementById('addActivityModal');
const notification = document.getElementById('notification');
const notificationMessage = document.getElementById('notificationMessage');
const adminActions = document.getElementById('adminActions');
const addActivityBtn = document.getElementById('addActivityBtn');
const activitiesList = document.getElementById('activitiesList');
const categoryTabs = document.getElementById('categoryTabs');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const yearFilter = document.getElementById('yearFilter');
const sortOptions = document.getElementById('sortOptions');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const pageNumbers = document.getElementById('pageNumbers');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegisterForm = document.getElementById('showRegisterForm');
const showLoginForm = document.getElementById('showLoginForm');
const downloadCertificate = document.getElementById('downloadCertificate');

// Global Variables
let currentUser = null;
let isAdmin = false;
let currentPage = 1;
let itemsPerPage = 6;
let filteredActivities = [...activitiesData];
let currentCategory = 'all';
let currentActivityId = null;

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in (from localStorage)
    checkAuthStatus();
    
    // Load activities
    filterAndDisplayActivities();
    
    // Setup event listeners
    setupEventListeners();
});

// Authentication Functions
function checkAuthStatus() {
    const savedUser = localStorage.getItem('nssUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        // Check if the user is an admin (for demo purposes, we'll make specific users admins)
        isAdmin = currentUser.email === 'admin@college.edu';
        updateUIForAuthState();
    }
}

function login(email, password) {
    // This is a simplified login for demo purposes
    // In a real application, this would connect to a backend
    if (email === 'admin@college.edu' && password === 'admin123') {
        currentUser = { name: 'Admin User', email: email };
        isAdmin = true;
        localStorage.setItem('nssUser', JSON.stringify(currentUser));
        updateUIForAuthState();
        showNotification('Logged in successfully as Admin');
        closeModal(loginModal);
        return true;
    } else if (email === 'user@college.edu' && password === 'user123') {
        currentUser = { name: 'Regular User', email: email };
        isAdmin = false;
        localStorage.setItem('nssUser', JSON.stringify(currentUser));
        updateUIForAuthState();
        showNotification('Logged in successfully');
        closeModal(loginModal);
        return true;
    } else {
        showNotification('Invalid credentials', true);
        return false;
    }
}

function register(userData) {
    // This is a simplified registration for demo purposes
    // In a real application, this would connect to a backend
    console.log('Registration data:', userData);
    showNotification('Registration successful! You can now login.');
    toggleAuthForms();
    return true;
}

function logout() {
    currentUser = null;
    isAdmin = false;
    localStorage.removeItem('nssUser');
    updateUIForAuthState();
    showNotification('Logged out successfully');
}

function updateUIForAuthState() {
    if (currentUser) {
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
        
        if (isAdmin) {
            adminActions.style.display = 'block';
        } else {
            adminActions.style.display = 'none';
        }
    } else {
        loginBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'none';
        adminActions.style.display = 'none';
    }
}

// Activity Display and Filtering Functions
function filterAndDisplayActivities() {
    // Apply filters
    applyFilters();
    
    // Calculate pagination
    const totalPages = Math.ceil(filteredActivities.length / itemsPerPage);
    updatePagination(totalPages);
    
    // Display activities for current page
    displayActivities();
}

function applyFilters() {
    // Start with all activities
    let filtered = [...activitiesData];
    
    // Apply category filter
    if (currentCategory !== 'all') {
        filtered = filtered.filter(activity => activity.category === currentCategory);
    }
    
    // Apply search filter if there's a search term
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(activity => 
            activity.title.toLowerCase().includes(searchTerm) || 
            activity.description.toLowerCase().includes(searchTerm) ||
            activity.location.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply year filter if selected
    const selectedYear = yearFilter.value;
    if (selectedYear) {
        filtered = filtered.filter(activity => activity.year.toString() === selectedYear);
    }
    
    // Apply sorting
    const sortBy = sortOptions.value;
    switch (sortBy) {
        case 'date-new':
            filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'date-old':
            filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'impact-high':
            const impactOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
            filtered.sort((a, b) => impactOrder[b.impact] - impactOrder[a.impact]);
            break;
        case 'participants-high':
            filtered.sort((a, b) => b.participants - a.participants);
            break;
    }
    
    // Update global filtered activities
    filteredActivities = filtered;
    
    // Reset to first page when filters change
    currentPage = 1;
}

function displayActivities() {
    // Clear the list
    activitiesList.innerHTML = '';
    
    // Calculate which items to show
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const activitiesToShow = filteredActivities.slice(startIndex, endIndex);
    
    // If no activities match the filters
    if (activitiesToShow.length === 0) {
        activitiesList.innerHTML = `
            <div class="no-activities">
                <p>No activities found matching your criteria.</p>
                <button class="btn-outline" onclick="resetFilters()">Reset Filters</button>
            </div>
        `;
        return;
    }
    
    // Create activity cards
    activitiesToShow.forEach(activity => {
        const date = new Date(activity.date);
        const formattedDate = date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        const card = document.createElement('div');
        card.className = 'activity-card';
        card.setAttribute('data-id', activity.id);
        
        // Determine impact class for color-coding
        let impactClass = '';
        switch (activity.impact) {
            case 'High': impactClass = 'impact-high'; break;
            case 'Medium': impactClass = 'impact-medium'; break;
            case 'Low': impactClass = 'impact-low'; break;
        }
        
        card.innerHTML = `
            <div class="activity-image">
                <img src="${activity.images[0]}" alt="${activity.title}">
                <span class="activity-category">${getCategoryName(activity.category)}</span>
            </div>
            <div class="activity-content">
                <h3>${activity.title}</h3>
                <p class="activity-date">${formattedDate}</p>
                <p class="activity-location"><i class="fas fa-map-marker-alt"></i> ${activity.location}</p>
                <div class="activity-metrics">
                    <span class="participants"><i class="fas fa-users"></i> ${activity.participants} Participants</span>
                    <span class="impact ${impactClass}"><i class="fas fa-chart-line"></i> ${activity.impact} Impact</span>
                </div>
                <p class="activity-excerpt">${activity.description.substring(0, 100)}...</p>
                <button class="btn-outline view-details" data-id="${activity.id}">View Details</button>
            </div>
        `;
        
        activitiesList.appendChild(card);
    });
    
    // Add event listeners to view-details buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function() {
            const activityId = parseInt(this.getAttribute('data-id'));
            openActivityDetails(activityId);
        });
    });
}

function updatePagination(totalPages) {
    // Update page number display
    pageNumbers.innerHTML = '';
    
    // If only a few pages, show all page numbers
    if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) {
            const span = document.createElement('span');
            span.textContent = i;
            if (i === currentPage) span.classList.add('active');
            span.addEventListener('click', () => {
                currentPage = i;
                filterAndDisplayActivities();
            });
            pageNumbers.appendChild(span);
        }
    } else {
        // Show current page and nearby pages
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, startPage + 4);
        
        // Adjust if we're near the end
        if (endPage - startPage < 4) {
            startPage = Math.max(1, endPage - 4);
        }
        
        // First page
        if (startPage > 1) {
            const span = document.createElement('span');
            span.textContent = 1;
            span.addEventListener('click', () => {
                currentPage = 1;
                filterAndDisplayActivities();
            });
            pageNumbers.appendChild(span);
            
            if (startPage > 2) {
                const ellipsis = document.createElement('span');
                ellipsis.textContent = '...';
                ellipsis.classList.add('ellipsis');
                pageNumbers.appendChild(ellipsis);
            }
        }
        
        // Middle pages
        for (let i = startPage; i <= endPage; i++) {
            const span = document.createElement('span');
            span.textContent = i;
            if (i === currentPage) span.classList.add('active');
            span.addEventListener('click', () => {
                currentPage = i;
                filterAndDisplayActivities();
            });
            pageNumbers.appendChild(span);
        }
        
        // Last page
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                const ellipsis = document.createElement('span');
                ellipsis.textContent = '...';
                ellipsis.classList.add('ellipsis');
                pageNumbers.appendChild(ellipsis);
            }
            
            const span = document.createElement('span');
            span.textContent = totalPages;
            span.addEventListener('click', () => {
                currentPage = totalPages;
                filterAndDisplayActivities();
            });
            pageNumbers.appendChild(span);
        }
    }
    
    // Update prev/next buttons
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
}

function openActivityDetails(activityId) {
    const activity = activitiesData.find(a => a.id === activityId);
    if (!activity) return;
    
    currentActivityId = activityId;
    
    // Populate modal with activity details
    document.getElementById('modalTitle').textContent = activity.title;
    document.getElementById('activityDate').textContent = formatDate(activity.date);
    document.getElementById('activityLocation').textContent = activity.location;
    document.getElementById('activityCategory').textContent = getCategoryName(activity.category);
    document.getElementById('activityParticipants').textContent = activity.participants;
    document.getElementById('activityImpact').textContent = activity.impact;
    document.getElementById('activityDescription').textContent = activity.description;
    document.getElementById('activityOutcomes').textContent = activity.outcomes;
    document.getElementById('activityVolunteers').textContent = activity.volunteers;
    
    // Set main image
    const mainImage = document.getElementById('activityMainImage');
    mainImage.src = activity.images[0];
    mainImage.alt = activity.title;
    
    // Generate thumbnails
    const thumbnailsContainer = document.getElementById('activityThumbnails');
    thumbnailsContainer.innerHTML = '';
    
    activity.images.forEach((img, index) => {
        const thumb = document.createElement('div');
        thumb.className = 'thumbnail';
        if (index === 0) thumb.classList.add('active');
        
        thumb.innerHTML = `<img src="${img}" alt="${activity.title} image ${index + 1}">`;
        thumb.addEventListener('click', () => {
            // Update main image when thumbnail is clicked
            mainImage.src = img;
            
            // Update active thumbnail
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
        
        thumbnailsContainer.appendChild(thumb);
    });
    
    // Show certificate download button if the user is logged in and participated
    // This is just a placeholder - in a real application, you'd check against participation records
    if (currentUser) {
        downloadCertificate.style.display = 'block';
    } else {
        downloadCertificate.style.display = 'none';
    }
    
    // Open the modal
    activityModal.style.display = 'block';
}

function resetFilters() {
    searchInput.value = '';
    yearFilter.value = '';
    sortOptions.value = 'date-new';
    
    // Reset category tabs
    const tabs = categoryTabs.querySelectorAll('.category-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    tabs[0].classList.add('active');
    currentCategory = 'all';
    
    // Reapply filters and display
    filterAndDisplayActivities();
}

// Utility Functions
function getCategoryName(categorySlug) {
    switch (categorySlug) {
        case 'social': return 'Social Service';
        case 'environmental': return 'Environmental';
        case 'health': return 'Health & Wellness';
        case 'education': return 'Education';
        case 'disaster': return 'Disaster Management';
        default: return categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

function closeModal(modal) {
    modal.style.display = 'none';
}

function toggleAuthForms() {
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}

function showNotification(message, isError = false) {
    notificationMessage.textContent = message;
    notification.className = isError ? 'notification error' : 'notification success';
    notification.style.display = 'block';
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Event Setup Function
function setupEventListeners() {
    // Login button
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });
    
    // Logout button
    logoutBtn.addEventListener('click', logout);
    
    // Close buttons for modals
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
    
    // Category tabs
    categoryTabs.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            // Update active tab
            categoryTabs.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update category filter
            currentCategory = this.getAttribute('data-category');
            filterAndDisplayActivities();
        });
    });
    
    // Search button
    searchBtn.addEventListener('click', filterAndDisplayActivities);
    
    // Search input (search on enter key)
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            filterAndDisplayActivities();
        }
    });
    
    // Filter dropdowns
    yearFilter.addEventListener('change', filterAndDisplayActivities);
    sortOptions.addEventListener('change', filterAndDisplayActivities);
    
    // Pagination buttons
    prevPageBtn.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            filterAndDisplayActivities();
        }
    });
    
    nextPageBtn.addEventListener('click', function() {
        const totalPages = Math.ceil(filteredActivities.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            filterAndDisplayActivities();
        }
    });
    
    // Login form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        login(email, password);
    });
    
    // Register form submission
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const userData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('regEmail').value,
            password: document.getElementById('regPassword').value,
            department: document.getElementById('department').value,
            year: document.getElementById('year').value,
            section: document.getElementById('section').value,
            batch: document.getElementById('batch').value,
            bloodGroup: document.getElementById('blood-group').value,
            phone: document.getElementById('phone').value
        };
        register(userData);
    });
    
    // Toggle between login and register forms
    showRegisterForm.addEventListener('click', function(event) {
        event.preventDefault();
        toggleAuthForms();
    });
    
    showLoginForm.addEventListener('click', function(event) {
        event.preventDefault();
        toggleAuthForms();
    });
    
    // Add Activity button (admin only)
    addActivityBtn.addEventListener('click', function() {
        addActivityModal.style.display = 'block';
    });
    
    // Add Activity form submission
    document.getElementById('addActivityForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form data
        const newActivity = {
            id: activitiesData.length + 1,
            title: document.getElementById('activityTitle').value,
            category: document.getElementById('activityCategory').value,
            date: document.getElementById('activityDate').value,
            location: document.getElementById('activityLocation').value,
            participants: parseInt(document.getElementById('activityParticipants').value),
            impact: document.getElementById('activityImpact').value,
            description: document.getElementById('activityDescription').value,
            outcomes: document.getElementById('activityOutcomes').value,
            volunteers: document.getElementById('activityVolunteers').value,
            // For demo purposes, we'll use placeholder images
            images: ["placeholder-1.jpg", "placeholder-2.jpg"],
            year: new Date(document.getElementById('activityDate').value).getFullYear()
        };
        
        // Add to activities data
        activitiesData.unshift(newActivity);
        
        // Close modal and show notification
        closeModal(addActivityModal);
        showNotification('Activity added successfully');
        
        // Reset form
        document.getElementById('addActivityForm').reset();
        
        // Refresh activities display
        filterAndDisplayActivities();
    });
    
    // Download certificate button
    downloadCertificate.addEventListener('click', function() {
        // This would typically generate and download a certificate PDF
        // For demo purposes, we'll just show a notification
        showNotification('Certificate download initiated');
    });
    
    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');
    const authButtons = document.getElementById('authButtons');
    
    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        authButtons.classList.toggle('active');
    });
}

// Function to handle image errors
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        // Replace with a placeholder image if the image fails to load
        e.target.src = '/api/placeholder/400/300';
        e.target.alt = 'Image not available';
        return true; // Prevent default error handler
    }
}, true);