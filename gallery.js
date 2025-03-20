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