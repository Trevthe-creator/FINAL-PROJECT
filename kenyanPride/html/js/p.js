// Professional data - Complete with all 8 categories and 5 professionals each
        const professionals = {
            'Software Development': [
                { name: 'MOSES Maina', title: 'Full Stack Developer', avatar: 'M', talents: 'Digital Art & Photography', cv: '5+ years in web development, React, Node.js expert', about: 'Passionate full-stack developer with expertise in modern web technologies.' },
                { name: 'SARAH Achieng', title: 'Mobile App Developer', avatar: 'S', talents: 'Music Production & Guitar', cv: '3+ years iOS/Android development, Swift, Kotlin', about: 'Creative mobile developer who loves building user-friendly applications.' },
                { name: 'MIKE Maina', title: 'DevOps Engineer', avatar: 'M', talents: 'Rock Climbing & Cooking', cv: '6+ years cloud infrastructure, AWS, Docker expert', about: 'DevOps specialist focused on scalable and reliable systems.' },
                { name: 'Emma Jabali', title: 'Frontend Developer', avatar: 'E', talents: 'Dancing & Fashion Design', cv: '4+ years UI/UX development, Vue.js, Angular', about: 'Frontend developer with an eye for beautiful and functional interfaces.' },
                { name: 'David Nyangueso', title: 'Backend Developer', avatar: 'D', talents: 'Chess & Board Games', cv: '7+ years backend systems, Python, Java, microservices', about: 'Backend architect specializing in high-performance server applications.' }
            ],
            'Healthcare': [
                { name: 'Dr. Lisa Mueni', title: 'Cardiologist', avatar: 'L', talents: 'Painting & Yoga', cv: 'MD from Harvard, 10+ years cardiology practice', about: 'Experienced cardiologist dedicated to heart health and patient care.' },
                { name: 'Dr. James Muriithi', title: 'Pediatrician', avatar: 'J', talents: 'Magic Tricks & Storytelling', cv: 'MD in Pediatrics, 8+ years child healthcare', about: 'Pediatrician who makes healthcare fun and comfortable for children.' },
                { name: 'Dr. Maria Kiptrotich', title: 'Surgeon', avatar: 'M', talents: 'Sculpture & Meditation', cv: 'MD Surgery, 12+ years surgical experience', about: 'Skilled surgeon with precision and dedication to patient outcomes.' },
                { name: 'Dr. Robert Awuor', title: 'Psychiatrist', avatar: 'R', talents: 'Poetry & Hiking', cv: 'MD Psychiatry, 9+ years mental health practice', about: 'Compassionate psychiatrist focused on mental wellness and therapy.' },
                { name: 'Dr. Anna Mukami', title: 'Dermatologist', avatar: 'A', talents: 'Gardening & Pottery', cv: 'MD Dermatology, 6+ years skin care specialist', about: 'Dermatologist passionate about skin health and cosmetic treatments.' }
            ],
            'Finance': [
                { name: 'John Mdark', title: 'Financial Analyst', avatar: 'J', talents: 'Jazz Piano & Wine Tasting', cv: 'CFA, MBA Finance, 5+ years investment analysis', about: 'Financial analyst with expertise in market research and investment strategies.' },
                { name: 'Rachel Ruto', title: 'Investment Banker', avatar: 'R', talents: 'Marathon Running & Travel Photography', cv: 'MBA Investment Banking, 7+ years M&A experience', about: 'Investment banker specializing in mergers and acquisitions.' },
                { name: 'Tom Cruise', title: 'Accountant', avatar: 'T', talents: 'Stand-up Comedy & Brewing', cv: 'CPA, 6+ years corporate accounting', about: 'Detail-oriented accountant ensuring financial accuracy and compliance.' },
                { name: 'Linda Mueni', title: 'Financial Advisor', avatar: 'L', talents: 'Salsa Dancing & Cooking', cv: 'CFP, 8+ years wealth management', about: 'Financial advisor helping clients achieve their financial goals.' },
                { name: 'Chris Anita', title: 'Risk Manager', avatar: 'C', talents: 'Mountain Biking & Electronics', cv: 'FRM, 9+ years risk assessment', about: 'Risk management specialist identifying and mitigating financial risks.' }
            ],
            'Marketing': [
                { name: 'Sophie Tumbili', title: 'Digital Marketing Manager', avatar: 'S', talents: 'Blogging & Fashion Styling', cv: '6+ years digital marketing, SEO, social media expert', about: 'Creative marketing manager driving brand growth through digital channels.' },
                { name: 'Mark Thaara', title: 'Content Creator', avatar: 'M', talents: 'Video Editing & Skateboarding', cv: '4+ years content creation, YouTube, TikTok specialist', about: 'Content creator producing engaging multimedia content for various platforms.' },
                { name: 'Amy Chiprotich', title: 'Brand Manager', avatar: 'A', talents: 'Calligraphy & Tea Ceremony', cv: '5+ years brand development, consumer psychology', about: 'Brand manager building strong brand identities and market presence.' },
                { name: 'Carlos Lopez', title: 'Social Media Manager', avatar: 'C', talents: 'DJ & Street Art', cv: '3+ years social media strategy, influencer marketing', about: 'Social media expert creating viral campaigns and community engagement.' },
                { name: 'Jessica Wright', title: 'Marketing Analyst', avatar: 'J', talents: 'Data Visualization & Baking', cv: '4+ years marketing analytics, data-driven insights', about: 'Marketing analyst turning data into actionable marketing strategies.' }
            ],
            'Design': [
                { name: 'Oliver Sara', title: 'UX/UI Designer', avatar: 'O', talents: 'Illustration & Surfing', cv: '5+ years user experience design, Figma, Adobe expert', about: 'UX designer creating intuitive and beautiful user experiences.' },
                { name: 'Maya Papaya', title: 'Graphic Designer', avatar: 'M', talents: 'Hand Lettering & Yoga', cv: '6+ years graphic design, branding, print design', about: 'Graphic designer with a passion for visual storytelling and brand identity.' },
                { name: 'Lucas Bennito', title: 'Product Designer', avatar: 'L', talents: '3D Printing & Coffee Roasting', cv: '4+ years product design, prototyping, user research', about: 'Product designer focused on creating innovative and user-centered products.' },
                { name: 'Zoe Kimani', title: 'Web Designer', avatar: 'Z', talents: 'Watercolor Painting & Pilates', cv: '5+ years web design, responsive design, CSS animations', about: 'Web designer creating visually stunning and functional websites.' },
                { name: 'Ryan Dago', title: 'Motion Graphics Designer', avatar: 'R', talents: 'Drumming & Gaming', cv: '3+ years motion graphics, After Effects, Cinema 4D', about: 'Motion graphics designer bringing static designs to life with animation.' }
            ],
            'Education': [
                { name: 'Dr. Helen Msomi', title: 'Professor', avatar: 'H', talents: 'Classical Music & Chess', cv: 'PhD Education, 15+ years university teaching', about: 'Experienced professor dedicated to academic excellence and student development.' },
                { name: 'Kevin Wainana', title: 'High School Teacher', avatar: 'K', talents: 'Theater & Basketball Coaching', cv: 'MEd Secondary Education, 8+ years teaching', about: 'Passionate educator inspiring students through interactive learning methods.' },
                { name: 'Maria Saraia', title: 'Elementary Teacher', avatar: 'M', talents: 'Puppet Shows & Gardening', cv: 'BA Elementary Education, 6+ years primary teaching', about: 'Elementary teacher creating fun and engaging learning environments.' },
                { name: 'Daniel Pelvick', title: 'Online Course Creator', avatar: 'D', talents: 'Video Production & Martial Arts', cv: '4+ years e-learning development, instructional design', about: 'E-learning specialist creating engaging online educational content.' },
                { name: 'Laura Muriithi', title: 'Education Consultant', avatar: 'L', talents: 'Writing & Photography', cv: 'MEd Curriculum Development, 10+ years educational consulting', about: 'Education consultant helping institutions improve their teaching methodologies.' }
            ],
            'Engineering': [
                { name: 'Robert Gitosh', title: 'Mechanical Engineer', avatar: 'R', talents: 'Woodworking & Model Trains', cv: 'BS Mechanical Engineering, 8+ years automotive industry', about: 'Mechanical engineer specializing in automotive design and manufacturing.' },
                { name: 'Jennifer Linda', title: 'Civil Engineer', avatar: 'J', talents: 'Architecture Photography & Cycling', cv: 'MS Civil Engineering, 7+ years infrastructure projects', about: 'Civil engineer designing sustainable infrastructure and urban development.' },
                { name: 'Michael Tevin', title: 'Electrical Engineer', avatar: 'M', talents: 'Electronics Repair & Astronomy', cv: 'BS Electrical Engineering, 6+ years power systems', about: 'Electrical engineer focused on renewable energy and power distribution.' },
                { name: 'Amanda Fama', title: 'Chemical Engineer', avatar: 'A', talents: 'Perfume Making & Rock Collecting', cv: 'MS Chemical Engineering, 9+ years pharmaceutical industry', about: 'Chemical engineer developing innovative pharmaceutical processes.' },
                { name: 'Steven Lee', title: 'Aerospace Engineer', avatar: 'S', talents: 'Model Rocketry & Flight Simulation', cv: 'MS Aerospace Engineering, 5+ years space technology', about: 'Aerospace engineer working on next-generation spacecraft design.' }
            ],
            'Legal': [
                { name: 'Patricia kareme', title: 'Corporate Lawyer', avatar: 'P', talents: 'Debate & Wine Collection', cv: 'JD Harvard Law, 12+ years corporate law practice', about: 'Corporate attorney specializing in mergers, acquisitions, and business law.' },
                { name: 'Richard Mutugi', title: 'Criminal Defense Attorney', avatar: 'R', talents: 'True Crime Podcasts & Boxing', cv: 'JD Criminal Law, 10+ years defense practice', about: 'Criminal defense attorney fighting for justice and client rights.' },
                { name: 'Monica Gitonga', title: 'Family Lawyer', avatar: 'M', talents: 'Child Psychology & Knitting', cv: 'JD Family Law, 8+ years family practice', about: 'Family attorney helping clients navigate sensitive legal matters.' },
                { name: 'Jonathan kithure', title: 'IP Attorney', avatar: 'J', talents: 'Patent Research & Board Games', cv: 'JD Intellectual Property, 6+ years patent law', about: 'IP attorney protecting innovations and intellectual property rights.' },
                { name: 'Sandra Njeri', title: 'Environmental Lawyer', avatar: 'S', talents: 'Eco-friendly Crafts & Birdwatching', cv: 'JD Environmental Law, 7+ years environmental practice', about: 'Environmental attorney advocating for sustainable practices and policy.' }
            ]
        };

        let currentProfessional = null;
        let slideIndex = 0;

        // Initialize the application
        function initApp() {
            generateCategories();
            generateTalentCards();
            startSlideshow();
        }

        // Generate professional categories
        function generateCategories() {
            const container = document.getElementById('categoriesContainer');
            const categoryIcons = {
                'Software Development': 'fas fa-code',
                'Healthcare': 'fas fa-heartbeat',
                'Finance': 'fas fa-chart-line',
                'Marketing': 'fas fa-bullhorn',
                'Design': 'fas fa-palette',
                'Education': 'fas fa-graduation-cap',
                'Engineering': 'fas fa-cogs',
                'Legal': 'fas fa-balance-scale'
            };

            Object.keys(professionals).forEach(category => {
                const categoryDiv = document.createElement('div');
                categoryDiv.className = 'category';
                
                categoryDiv.innerHTML = `
                    <h2><i class="${categoryIcons[category]}"></i> ${category}</h2>
                    <div class="professionals">
                        ${professionals[category].map(prof => `
                            <div class="professional-card" onclick="openProfile('${category}', '${prof.name}')">
                                <div class="professional-avatar">${prof.avatar}</div>
                                <div class="professional-name">${prof.name}</div>
                                <div class="professional-title">${prof.title}</div>
                            </div>
                        `).join('')}
                    </div>
                `;
                
                container.appendChild(categoryDiv);
            });
        }

        // Generate talent cards
        function generateTalentCards() {
            const container = document.getElementById('talentGrid');
            const allProfessionals = [];
            
            // Flatten all professionals into one array
            Object.keys(professionals).forEach(category => {
                professionals[category].forEach(prof => {
                    allProfessionals.push({...prof, category});
                });
            });

            // Create talent cards
            allProfessionals.forEach(prof => {
                const talentCard = document.createElement('div');
                talentCard.className = 'talent-card';
                talentCard.innerHTML = `
                    <div class="professional-avatar" style="margin-bottom: 1rem;">${prof.avatar}</div>
                    <h3>${prof.name}</h3>
                    <p style="color: #666; margin-bottom: 1rem;">${prof.title}</p>
                    <h4 style="color: #2e3e69ff; margin-bottom: 0.5rem;">🎨 Talents & Hobbies</h4>
                    <p style="font-weight: bold;">${prof.talents}</p>
                    <button class="btn btn-secondary" style="margin-top: 1rem;" onclick="openProfile('${prof.category}', '${prof.name}')">
                        View Professional Profile
                    </button>
                `;
                container.appendChild(talentCard);
            });
        }

        // Open professional profile
        function openProfile(category, name) {
            const prof = professionals[category].find(p => p.name === name);
            if (!prof) return;

            currentProfessional = {...prof, category};
            
            document.getElementById('modalAvatar').textContent = prof.avatar;
            document.getElementById('modalName').textContent = prof.name;
            document.getElementById('modalTitle').textContent = prof.title;
            document.getElementById('modalAbout').textContent = prof.about;
            document.getElementById('modalCV').textContent = prof.cv;
            document.getElementById('modalTalents').textContent = prof.talents;

            // Generate social media links
            const socialContainer = document.getElementById('modalSocial');
            const socialLinks = [
                { platform: 'LinkedIn', icon: 'fab fa-linkedin', url: 'www.linkedin.com/in/trevorgitonga', color: '#0077b5' },
                { platform: 'WhatsApp', icon: 'fab fa-whatsapp', url: 'https://wa.me/<254113787156>?text=Hello%20I%20found%20your%20profile%20online', color: '#25D366' },
                { platform: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/skii._.t', color: '#E4405F' },
                { platform: 'x', icon: 'fab fa-x', url: 'https://twitter.com/GitongaTre81496', color: '#1DA1F2' }
            ];

            socialContainer.innerHTML = socialLinks.map(social => `
                <a href="${social.url}" class="social-link" style="background: ${social.color};">
                    <i class="${social.icon}"></i>
                    ${social.platform}
                </a>
            `).join('');

            document.getElementById('profileModal').style.display = 'block';
        }

        // Close modal
        function closeModal() {
            document.getElementById('profileModal').style.display = 'none';
            document.getElementById('jobOfferForm').style.display = 'none';
        }

        // Show job offer form
        function showJobOfferForm() {
            document.getElementById('jobOfferForm').style.display = 'block';
        }

        // Send job offer
        function sendJobOffer(event) {
            event.preventDefault();
            
            const jobTitle = document.getElementById('jobTitle').value;
            const jobDescription = document.getElementById('jobDescription').value;
            const salary = document.getElementById('salary').value;
            const workingHours = document.getElementById('workingHours').value;
            const location = document.getElementById('location').value;
            const startDate = document.getElementById('startDate').value;

            // Simulate sending job offer
            showNotification(`Job offer sent to ${currentProfessional.name}! They will receive a notification and can choose to accept or decline.`);
            
            // Reset form
            event.target.reset();
            document.getElementById('jobOfferForm').style.display = 'none';
            closeModal();
        }

        // Show notification
        function showNotification(message) {
            const notification = document.getElementById('notification');
            document.getElementById('notificationText').textContent = message;
            notification.style.display = 'block';
            
            setTimeout(() => {
                notification.style.display = 'none';
            }, 5000);
        }

        // View talent profile
        function viewTalentProfile() {
            switchToTalentPage();
            closeModal();
        }

        // Switch to talent page
        function switchToTalentPage() {
            document.getElementById('professionalPage').style.display = 'none';
            document.getElementById('talentPage').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        // Switch to professional page
        function switchToProfessionalPage() {
            document.getElementById('professionalPage').style.display = 'block';
            document.getElementById('talentPage').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Start slideshow
        function startSlideshow() {
            const slides = document.querySelectorAll('.slide');
            
            setInterval(() => {
                slides[slideIndex].classList.remove('active');
                slideIndex = (slideIndex + 1) % slides.length;
                slides[slideIndex].classList.add('active');
            }, 4000);
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('profileModal');
            if (event.target === modal) {
                closeModal();
            }
        }

        // Initialize app when page loads
        document.addEventListener('DOMContentLoaded', initApp);
        