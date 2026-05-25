/* ==========================================================================
   PR WEBSITE - DYNAMIC ENGINE (BRITISH ENGLISH EDITION)
   Theme: NZ Business PR Platform / The Press Release
   Features: British English, 8 Premium Categories, Autocomplete Search, Submission Modal
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- DATABASE: HIGH-FIDELITY NEW ZEALAND NEWS ARTICLES (BRITISH ENGLISH) ---
  const newsDatabase = [
    {
      id: "news-1",
      title: "AI-powered fintech startup secures £12M Series A funding",
      kicker: "Auckland / Fintech",
      summary: "Leading AI fintech platform announces major funding round to accelerate product development and expand operations across Asia-Pacific markets.",
      category: "technology",
      region: "auckland",
      date: "25 May 2026",
      readTime: "4 min read",
      tags: ["Technology", "Startup", "Fintech"]
    },
    {
      id: "news-2",
      title: "Enterprise software company reaches $100M ARR milestone",
      kicker: "Wellington / SaaS",
      summary: "Leading workplace collaboration platform announces record growth, launches three new product lines, and expands leadership team across EMEA and APAC regions.",
      category: "technology",
      region: "wellington",
      date: "24 May 2026",
      readTime: "6 min read",
      tags: ["SaaS", "Growth", "Business"]
    },
    {
      id: "news-3",
      title: "Real estate tech startup launches new automated valuation platform",
      kicker: "Christchurch / Property",
      summary: "Streamlined property assessment tool and optimised valuation features are now available across all major New Zealand metropolitan markets.",
      category: "business",
      region: "canterbury",
      date: "23 May 2026",
      readTime: "3 min read",
      tags: ["Property", "Innovation", "Business"]
    },
    {
      id: "news-4",
      title: "Industrial supplier announces carbon-neutral operations initiative",
      kicker: "Hamilton / Manufacturing",
      summary: "Carbon-neutral operations milestone reached across all facilities as part of a major eco-conscious green manufacturing programme.",
      category: "environment",
      region: "waikato",
      date: "22 May 2026",
      readTime: "2 min read",
      tags: ["Manufacturing", "Green", "Environment"]
    },
    {
      id: "news-5",
      title: "Coastal harbour operator invests in cargo automation programme",
      kicker: "Tauranga / Logistics",
      summary: "A massive £50M infrastructure upgrade has been finalised to boost throughput and logistical efficiency at the Bay of Plenty port.",
      category: "business",
      region: "bay-of-plenty",
      date: "21 May 2026",
      readTime: "5 min read",
      tags: ["Logistics", "Investment", "Business"]
    },
    {
      id: "news-6",
      title: "EdTech platform launches AI-powered personalised learning engine",
      kicker: "Auckland / Technology",
      summary: "Personalised education technology utilising optimised machine learning is now serving over 100,000 students across New Zealand secondary schools.",
      category: "technology",
      region: "auckland",
      date: "20 May 2026",
      readTime: "4 min read",
      tags: ["EdTech", "AI", "Technology"]
    },
    {
      id: "news-7",
      title: "Management consulting firm opens regional APAC advisory hub",
      kicker: "Wellington / Business",
      summary: "Strategic expansion brings highly specialised offshore advisory talent directly into domestic management consulting operations.",
      category: "business",
      region: "wellington",
      date: "19 May 2026",
      readTime: "3 min read",
      tags: ["Expansion", "Corporate", "Business"]
    },
    {
      id: "news-8",
      title: "Medical device manufacturer secures urgent regulatory approval",
      kicker: "Christchurch / Healthcare",
      summary: "Formal international healthcare clearance enables worldwide distribution of Canterbury-developed therapeutic devices starting Q3 2026.",
      category: "health",
      region: "canterbury",
      date: "18 May 2026",
      readTime: "5 min read",
      tags: ["Healthcare", "Approval", "Medical"]
    },
    {
      id: "news-9",
      title: "Local primary sector cooperative partners with global export brand",
      kicker: "Hamilton / Agribusiness",
      summary: "Five-year export supply agreement supports Waikato agribusiness growth and secures hundreds of local farming jobs.",
      category: "agribusiness",
      region: "waikato",
      date: "17 May 2026",
      readTime: "4 min read",
      tags: ["Agribusiness", "Trade", "Farming"]
    },
    {
      id: "news-10",
      title: "Wānaka food producer achieves carbon neutrality milestone",
      kicker: "Wānaka / Food & Beverage",
      summary: "Transition to 100% renewable energy completed ahead of schedule at the Otago sustainable production facility.",
      category: "environment",
      region: "otago",
      date: "16 May 2026",
      readTime: "3 min read",
      tags: ["Food", "Carbon-Neutral", "Environment"]
    },
    {
      id: "news-11",
      title: "Eco-tourism operator wins national industry excellence award",
      kicker: "Queenstown / Tourism",
      summary: "Alpine adventure company recognised for outstanding innovations in eco-travel and strict guest safety standards.",
      category: "tourism",
      region: "otago",
      date: "15 May 2026",
      readTime: "3 min read",
      tags: ["Tourism", "Awards", "Adventure"]
    },
    {
      id: "news-12",
      title: "Primary industries forestry venture secures £15M timber export deal",
      kicker: "Gisborne / Agribusiness",
      summary: "Major agribusiness partnership with international distributors to supply sustainably managed timber from regional land blocks.",
      category: "agribusiness",
      region: "gisborne",
      date: "14 May 2026",
      readTime: "4 min read",
      tags: ["Forestry", "Agribusiness", "Export"]
    },
    {
      id: "news-13",
      title: "Parliamentary select committee passes housing reform bill",
      kicker: "Wellington / Government",
      summary: "New central government public policy aims to streamline residential building permits and regulate infrastructure tax codes.",
      category: "government",
      region: "wellington",
      date: "13 May 2026",
      readTime: "5 min read",
      tags: ["Government", "Policy", "Housing"]
    },
    {
      id: "news-14",
      title: "All Blacks sponsor launches nationwide youth rugby programme",
      kicker: "Auckland / Sport",
      summary: "Major sports partnership organises high-performance training modules for school rugby leagues across the country.",
      category: "health",
      region: "auckland",
      date: "12 May 2026",
      readTime: "3 min read",
      tags: ["Sport", "Youth", "Rugby"]
    },
    {
      id: "news-15",
      title: "Creative sector music festival announces summer lineup and expansion",
      kicker: "Nelson-Tasman / Arts",
      summary: "Highly anticipated creative arts showcase brings international headliners to Nelson, boosting regional tourism bookings.",
      category: "lifestyle",
      region: "nelson",
      date: "11 May 2026",
      readTime: "4 min read",
      tags: ["Arts", "Music", "Festival"]
    }
  ];

  // --- DARK/LIGHT THEME SWITCHER ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  }

  function updateThemeIcon(theme) {
    if (themeToggleBtn) {
      themeToggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
      themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
  initializeTheme();

  // --- RENDER DYNAMIC CORE ARTICLES ---
  const newsGridContainer = document.getElementById('news-grid-container');
  let activeCategory = 'all';

  function renderNewsGrid() {
    if (!newsGridContainer) return;
    newsGridContainer.innerHTML = '';

    // Filter by active category
    let filteredNews = newsDatabase;
    if (activeCategory !== 'all') {
      filteredNews = newsDatabase.filter(news => news.category === activeCategory);
    }

    // Capture search queries
    const searchVal = document.getElementById('search-input')?.value.toLowerCase().trim() || "";
    if (searchVal) {
      filteredNews = filteredNews.filter(news => 
        news.title.toLowerCase().includes(searchVal) ||
        news.kicker.toLowerCase().includes(searchVal) ||
        news.summary.toLowerCase().includes(searchVal) ||
        news.region.toLowerCase().includes(searchVal) ||
        news.tags.some(tag => tag.toLowerCase().includes(searchVal))
      );
    }

    if (filteredNews.length === 0) {
      newsGridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
          <p>No matching press releases found. Try searching for other terms!</p>
        </div>
      `;
      return;
    }

    // Render items
    filteredNews.forEach(news => {
      const card = document.createElement('article');
      card.className = `news-card hover-grow fade-up visible`;
      card.id = news.id;
      
      card.innerHTML = `
        <span class="news-kicker">${news.kicker}</span>
        <h3>${news.title}</h3>
        <p>${news.summary}</p>
        <div class="news-meta">
          <span>${news.date}</span>
          <span>${news.readTime}</span>
          <span>${news.tags[0]}</span>
        </div>
      `;
      newsGridContainer.appendChild(card);
    });
  }

  function renderFeaturedStory() {
    const featuredStorySection = document.getElementById('featured-lead-story');
    if (!featuredStorySection) return;

    // Use news-2 (Enterprise Software) as lead story
    const lead = newsDatabase[1];

    featuredStorySection.innerHTML = `
      <span class="news-kicker">${lead.kicker}</span>
      <h3>${lead.title}</h3>
      <p>${lead.summary}</p>
      <div class="news-meta">
        <span>${lead.date}</span>
        <span>${lead.readTime}</span>
        <span>${lead.tags[0]}</span>
      </div>
    `;
  }

  // --- BENTO CATEGORY FILTER EVENT HANDLERS ---
  const categoryCards = document.querySelectorAll('.category-select-card');
  categoryCards.forEach(card => {
    card.addEventListener('click', () => {
      const isCurrentlyActive = card.classList.contains('active');
      categoryCards.forEach(c => c.classList.remove('active'));
      
      const selectedCat = card.getAttribute('data-category');
      if (isCurrentlyActive) {
        activeCategory = 'all';
      } else {
        card.classList.add('active');
        activeCategory = selectedCat;
      }
      renderNewsGrid();
    });
  });

  // --- LIVE AUTOCOMPLETE SEARCH CONTROLLERS ---
  const searchInput = document.getElementById('search-input');
  const searchWrapper = document.getElementById('search-wrapper');
  const autocompleteBox = document.getElementById('autocomplete-box');

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();
      
      if (!query) {
        searchWrapper.classList.remove('active');
        renderNewsGrid();
        return;
      }

      searchWrapper.classList.add('active');
      renderNewsGrid();

      // Autocomplete Suggestions logic
      const matches = newsDatabase.filter(news => 
        news.title.toLowerCase().includes(query)
      ).slice(0, 5);

      autocompleteBox.innerHTML = '';
      
      if (matches.length === 0) {
        autocompleteBox.innerHTML = `
          <div style="padding: 12px 20px; font-size: 0.9rem; color: var(--text-muted);">
            No quick suggestions
          </div>
        `;
        return;
      }

      matches.forEach(match => {
        const item = document.createElement('div');
        item.className = 'autocomplete-item';
        
        item.innerHTML = `
          <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:75%;">${match.title}</span>
          <span class="autocomplete-category">${match.category}</span>
        `;

        item.addEventListener('click', () => {
          searchInput.value = match.title;
          searchWrapper.classList.remove('active');
          renderNewsGrid();
          
          // Focus and highlight specific card
          const targetCard = document.getElementById(match.id);
          if (targetCard) {
            targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            targetCard.style.outline = '3px solid var(--brand-secondary)';
            setTimeout(() => {
              targetCard.style.outline = 'none';
            }, 2000);
          }
        });
        
        autocompleteBox.appendChild(item);
      });
    });

    // Close autocomplete on click outside
    document.addEventListener('click', (e) => {
      if (!searchWrapper.contains(e.target)) {
        searchWrapper.classList.remove('active');
      }
    });
  }

  // --- STATS DYNAMIC COUNT-UP ANIMATION ---
  const statsElements = document.querySelectorAll('.stat-number');
  
  const countUpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetVal = parseFloat(target.getAttribute('data-value'));
        const suffix = target.getAttribute('data-suffix') || "";
        animateCountUp(target, targetVal, suffix);
        countUpObserver.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  function animateCountUp(element, value, suffix) {
    let start = 0;
    const duration = 1500; // 1.5 seconds
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing curve (OutQuad)
      const easeVal = progress * (2 - progress);
      const currentVal = (easeVal * value).toFixed(progress === 1 ? (value % 1 === 0 ? 0 : 1) : 0);
      
      element.textContent = currentVal + suffix;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }
    requestAnimationFrame(updateCounter);
  }

  statsElements.forEach(el => countUpObserver.observe(el));

  // --- INTERACTIVE SUBMISSION WIZARD MODAL ---
  const modalOverlay = document.getElementById('submission-modal');
  const submitTriggers = document.querySelectorAll('.open-submit-modal');
  const closeModalBtn = document.getElementById('close-modal');
  
  const wizardSlides = document.querySelectorAll('.wizard-slide');
  const wizardStepItems = document.querySelectorAll('.progress-step-item');
  const nextBtn = document.getElementById('wizard-next-btn');
  const prevBtn = document.getElementById('wizard-prev-btn');
  
  let activeSlideIndex = 0;

  function showSlide(index) {
    wizardSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    wizardStepItems.forEach((step, i) => {
      step.classList.toggle('active', i <= index);
    });

    // Update buttons
    prevBtn.style.display = index === 0 ? 'none' : 'inline-flex';
    
    if (index === wizardSlides.length - 1) {
      nextBtn.style.display = 'none';
    } else {
      nextBtn.style.display = 'inline-flex';
      nextBtn.textContent = 'Continue';
    }
  }

  // Open modal handler
  submitTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      modalOverlay.classList.add('active');
      activeSlideIndex = 0;
      showSlide(activeSlideIndex);
      
      // Reset form states
      document.getElementById('wizard-form').reset();
      document.getElementById('simulated-success-view').style.display = 'none';
      document.getElementById('wizard-modal-inner').style.display = 'block';
    });
  });

  // Close modal handler
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
  }

  // Next/Prev Navigation clicks
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      // Step 1 validation
      if (activeSlideIndex === 0) {
        const titleVal = document.getElementById('form-pr-title').value.trim();
        if (!titleVal) {
          alert('Please enter a headline for your press release!');
          return;
        }
      }

      // Progress slide
      if (activeSlideIndex < wizardSlides.length - 1) {
        activeSlideIndex++;
        showSlide(activeSlideIndex);
        
        // If entering slide 3, build interactive preview card
        if (activeSlideIndex === 2) {
          buildPreviewCard();
        }
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (activeSlideIndex > 0) {
        activeSlideIndex--;
        showSlide(activeSlideIndex);
      }
    });
  }

  function buildPreviewCard() {
    const titleVal = document.getElementById('form-pr-title').value.trim();
    const bodyVal = document.getElementById('form-pr-body').value.trim();
    const categorySelector = document.getElementById('form-pr-category');
    const categoryText = categorySelector.options[categorySelector.selectedIndex].text;
    const regionSelector = document.getElementById('form-pr-region');
    const regionText = regionSelector.options[regionSelector.selectedIndex].text;

    const previewContainer = document.getElementById('simulated-preview-box');
    if (previewContainer) {
      previewContainer.innerHTML = `
        <div class="news-masthead" style="border-bottom-color: var(--brand-secondary);">
          <span class="news-masthead-title">Draft Preview</span>
          <span class="news-date">Today</span>
        </div>
        <article class="news-featured">
          <span class="news-kicker">${regionText} / ${categoryText}</span>
          <h3 style="color: var(--text-strong); font-size:1.4rem;">${titleVal}</h3>
          <p style="font-size:0.92rem; color:var(--text-muted);">${bodyVal.slice(0, 180)}...</p>
          <div class="news-meta">
            <span>Just now</span>
            <span>${categoryText}</span>
            <span>Draft</span>
          </div>
        </article>
      `;
    }
  }

  // Simulated Submission Form Handler
  const wizardForm = document.getElementById('wizard-form');
  if (wizardForm) {
    wizardForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Hide form contents, display loading animation
      document.getElementById('wizard-modal-inner').style.display = 'none';
      const successView = document.getElementById('simulated-success-view');
      successView.style.display = 'block';
      
      successView.innerHTML = `
        <div class="simulated-success-box">
          <div style="font-size: 1.5rem; font-weight: 700; color: var(--brand-secondary);">
            Syndicating Press Release...
          </div>
          <div style="width: 100%; background: var(--border-color); height: 8px; border-radius: 4px; overflow:hidden;">
            <div id="simulated-progress-bar" style="background: var(--brand-accent); width: 0%; height: 100%; transition: width 1.8s ease-in-out;"></div>
          </div>
          <p style="font-size:0.9rem;">Preparing media targeting bundles...</p>
        </div>
      `;

      // Trigger animated progress bar
      setTimeout(() => {
        const bar = document.getElementById('simulated-progress-bar');
        if (bar) bar.style.width = '100%';
      }, 50);

      // Transition to final success check
      setTimeout(() => {
        successView.innerHTML = `
          <div class="simulated-success-box">
            <div class="success-check-circle">✓</div>
            <h2>Distribution Activated!</h2>
            <p>Your press release has been successfully processed and queued for syndication to Google News, Stuff.co.nz, and NZ Herald desks.</p>
            <button class="btn btn-primary" id="success-close-btn" style="margin-top: 16px;">
              Return to Portal
            </button>
          </div>
        `;

        document.getElementById('success-close-btn').addEventListener('click', () => {
          modalOverlay.classList.remove('active');
        });
      }, 2000);
    });
  }

  // --- INITIAL RENDERING CALLS ---
  renderNewsGrid();
  renderFeaturedStory();
});
