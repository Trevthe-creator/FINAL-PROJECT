const blueCollarJobs = [
  {
    icon: 'hard-hat',
    title: "Construction & Building",
    description: "Skilled trades in construction, electrical, plumbing, and more",
    jobs: 1250,
    avgSalary: "$65k",
    backgroundImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&w=800&q=80"
  },
  {
    icon: 'wrench',
    title: "Manufacturing & Production",
    description: "Factory workers, technicians, and production specialists",
    jobs: 980,
    avgSalary: "$58k",
    backgroundImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&w=800&q=80"
  },
  {
    icon: 'cog',
    title: "Maintenance & Repair",
    description: "Equipment maintenance, automotive, and repair services",
    jobs: 750,
    avgSalary: "$55k",
    backgroundImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&w=800&q=80"
  }
];

const whiteCollarJobs = [
  {
    icon: 'laptop',
    title: "Technology & Software",
    description: "Software development, IT support, and digital innovation",
    jobs: 2100,
    avgSalary: "$95k",
    backgroundImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&w=800&q=80"
  },
  {
    icon: 'calculator',
    title: "Finance & Accounting",
    description: "Financial analysis, accounting, and business strategy",
    jobs: 1650,
    avgSalary: "$78k",
    backgroundImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&w=800&q=80"
  },
  {
    icon: 'users',
    title: "Management & Consulting",
    description: "Leadership roles, consulting, and business development",
    jobs: 1420,
    avgSalary: "$105k",
    backgroundImage: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&w=800&q=80"
  }
];

function renderJobCards(containerId, jobs) {
  const container = document.getElementById(containerId);

  jobs.forEach(job => {
    const card = document.createElement('div');
    card.className = 'card-professional';
    card.style.backgroundImage = `url(${job.backgroundImage})`;

    card.innerHTML = `
      <div class="card-overlay"></div>
      <div class="card-content">
        <div>
          <div class="card-header">
            <div class="card-header-icon">
              <i data-lucide="${job.icon}" class="icon"></i>
            </div>
            <div>
              <h4 class="card-title">${job.title}</h4>
              <div class="card-subinfo">
                <span>${job.jobs} jobs</span>
                <span>Avg ${job.avgSalary}</span>
              </div>
            </div>
          </div>
          <p class="card-description">${job.description}</p>
        </div>
        <button class="btn-professional">View Opportunities</button>
      </div>
    `;

    container.appendChild(card);
  });

  lucide.createIcons();
}

renderJobCards('blue-collar-jobs', blueCollarJobs);
renderJobCards('white-collar-jobs', whiteCollarJobs);
