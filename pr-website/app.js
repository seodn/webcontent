/* ==========================================================================
   PR WEBSITE - DYNAMIC ENGINE
   Theme: Aotearoa PR Portal / The Press Release NZ
   Features: Bicultural Engine, Theme Toggles, Autocomplete, Modal Wizard, Countups
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- DATABASE: HIGH-FIDELITY NEW ZEALAND NEWS ARTICLES ---
  const newsDatabase = [
    {
      id: "news-1",
      title: "AI-powered fintech startup secures $12M Series A funding",
      titleTeReo: "Kua riro i tētahi kaipakihi hangarau putea AI he $12M mō te wāhanga A",
      kicker: "Auckland / Fintech",
      kickerTeReo: "Tāmaki Makaurau / Hangarau Putea",
      summary: "Leading AI fintech platform announces major funding round to accelerate product development and expand across Asia-Pacific markets.",
      summaryTeReo: "E pānui ana tēnei papaa-nui hangarau putea AI i tētahi karahatanga putea nui hei whakahohoro i te hanganga hua me te whakawhānui i ngā maakete o Āhia-Pāpāho.",
      category: "technology",
      region: "auckland",
      date: "20 May 2026",
      readTime: "4 min read",
      tags: ["Technology", "Startup", "Fintech"]
    },
    {
      id: "news-2",
      title: "Enterprise software company reaches $100M ARR milestone",
      titleTeReo: "Kua hipa i te kamupene raupaparorohiko te taumata $100M ARR",
      kicker: "Wellington / SaaS",
      kickerTeReo: "Te Whanganui-a-Tara / SaaS",
      summary: "Leading workplace collaboration platform announces record growth, announces three new product lines, and expands leadership team across EMEA and APAC regions.",
      summaryTeReo: "E pānui ana tēnei papaa-nui mahi tahi i te tipunga rekoata, toru ngā hua hou, me te whakawhānui i te roopu kaiārahi puta noa i ngā rohe EMEA me APAC.",
      category: "business",
      region: "wellington",
      date: "20 May 2026",
      readTime: "6 min read",
      tags: ["SaaS", "Growth", "Business"]
    },
    {
      id: "news-3",
      title: "Real estate tech startup launches new valuation platform",
      titleTeReo: "E whakarewa ana te pakihi hangarau rawa i tētahi papaa-nui hou",
      kicker: "Christchurch / Property",
      kickerTeReo: "Ōtautahi / Rawa",
      summary: "Streamlined property assessment tool now available across all major NZ markets.",
      summaryTeReo: "Kua wātea ināianei te taputapu aromatawai rawa tere puta noa i ngā maakete matua katoa o Aotearoa.",
      category: "business",
      region: "canterbury",
      date: "20 May 2026",
      readTime: "3 min read",
      tags: ["Property", "Innovation", "Business"]
    },
    {
      id: "news-4",
      title: "Industrial supplier announces sustainability initiative",
      titleTeReo: "E pānui ana te kaiwhakarato ahumahi i te kaupapa whakakaupapa",
      kicker: "Hamilton / Manufacturing",
      kickerTeReo: "Kirikiriroa / Ahumahi",
      summary: "Carbon-neutral operations milestone reached across all facilities.",
      summaryTeReo: "Kua eke ki te taumata waro-kore mō ngā mahi puta noa i ngā whare katoa.",
      category: "environment",
      region: "waikato",
      date: "20 May 2026",
      readTime: "2 min read",
      tags: ["Manufacturing", "Green", "Environment"]
    },
    {
      id: "news-5",
      title: "Coastal port operator invests in automation",
      titleTeReo: "E whakangao ana te kaiwhakahaere tauranga i te aunoatanga",
      kicker: "Tauranga / Logistics",
      kickerTeReo: "Tauranga / Waka",
      summary: "$50M infrastructure upgrade to boost throughput and efficiency.",
      summaryTeReo: "He $50M te whakahoutanga hanganga hei whakanui i te tere me te pai o ngā mahi.",
      category: "business",
      region: "bay-of-plenty",
      date: "20 May 2026",
      readTime: "5 min read",
      tags: ["Logistics", "Investment", "Business"]
    },
    {
      id: "news-6",
      title: "EdTech platform launches AI-powered learning engine",
      titleTeReo: "Kei te whakarewahia e te EdTech te miihini ako a AI",
      kicker: "Auckland / Technology",
      kickerTeReo: "Tāmaki Makaurau / Hangarau",
      summary: "Personalized education technology now serving over 100,000 students across NZ.",
      summaryTeReo: "E mahi ana te hangarau mātauranga pēnei mō te 100,000+ tauira puta noa i Aotearoa.",
      category: "technology",
      region: "auckland",
      date: "19 May 2026",
      readTime: "4 min read",
      tags: ["EdTech", "AI", "Technology"]
    },
    {
      id: "news-7",
      title: "Management consulting firm opens APAC hub",
      titleTeReo: "Kua whakatuwherahia e te kamupene kaiārahi he pokapū APAC",
      kicker: "Wellington / Business",
      kickerTeReo: "Te Whanganui-a-Tara / Pakihi",
      summary: "Strategic expansion brings offshore talent to domestic operations.",
      summaryTeReo: "Kei te kumea mai ngā pukenga rāwaho ki ngā mahi kāinga i tēnei whakawhānuitanga rautaki.",
      category: "business",
      region: "wellington",
      date: "18 May 2026",
      readTime: "3 min read",
      tags: ["Expansion", "Corporate", "Business"]
    },
    {
      id: "news-8",
      title: "Medical device company secures regulatory approval",
      titleTeReo: "Kua whiwhi te kamupene taputapu rongoā i te whakaaetanga",
      kicker: "Christchurch / Healthcare",
      kickerTeReo: "Ōtautahi / Hauora",
      summary: "FDA clearance enables international distribution starting Q3 2026.",
      summaryTeReo: "Ma te whakaaetanga FDA ka taea te tohatoha ki te ao katoa mai i te hauwhā tuatoru o 2026.",
      category: "lifestyle",
      region: "canterbury",
      date: "17 May 2026",
      readTime: "5 min read",
      tags: ["Healthcare", "FDA", "Lifestyle"]
    },
    {
      id: "news-9",
      title: "Local manufacturer partners with global brand",
      titleTeReo: "Kei te hono te kaihanga kāinga ki tētahi tohu o te ao",
      kicker: "Hamilton / Partnership",
      kickerTeReo: "Kirikiriroa / Hononga",
      summary: "Five-year supply agreement supports local economy and jobs.",
      summaryTeReo: "He whakaaetanga tuku rima tau e tautoko ana i te pūnaha ohaoha me ngā mahi o te kāinga.",
      category: "business",
      region: "waikato",
      date: "16 May 2026",
      readTime: "4 min read",
      tags: ["Partnership", "Trade", "Business"]
    },
    {
      id: "news-10",
      title: "Food producer achieves carbon neutrality goal",
      titleTeReo: "Kua eke te kaihanga kai ki te taumata waro-kore",
      kicker: "Dunedin / Sustainability",
      kickerTeReo: "Ōtepoti / Whakakaupapa",
      summary: "Renewable energy transition completed ahead of schedule.",
      summaryTeReo: "Kua oti te whakawhitinga ki ngā pūngao whakahou i mua i te wā i whakaritea.",
      category: "environment",
      region: "otago",
      date: "15 May 2026",
      readTime: "3 min read",
      tags: ["Food", "Carbon-Neutral", "Environment"]
    },
    {
      id: "news-11",
      title: "Tourism operator wins industry excellence award",
      titleTeReo: "Kua riro i te kaiwhakahaere ferahinga te tohu kairangi ahumahi",
      kicker: "Queenstown / Awards",
      kickerTeReo: "Queenstown / Tohu",
      summary: "Adventure company recognized for innovation and safety standards.",
      summaryTeReo: "Kua mihia te kamupene tākaro mō ngā hangarau hou me ngā paerewa haumaru.",
      category: "tourism",
      region: "otago",
      date: "14 May 2026",
      readTime: "3 min read",
      tags: ["Tourism", "Awards", "Lifestyle"]
    },
    {
      id: "news-12",
      title: "Māori Forestry Joint Venture Secures $15M Export Deal",
      titleTeReo: "Kua whiwhi te Pānga Ngahere Māori i tētahi whakaaetanga kaweake $15M",
      kicker: "Gisborne / Agribusiness",
      kickerTeReo: "Tūranga-nui-a-Kiwa / Ahumahi Matua",
      summary: "Major partnership with international distributors to supply sustainably managed timber from Iwi land.",
      summaryTeReo: "He hononga nui ki ngā tohatoha o te ao ki te tuku rākau e whakahaerehia ana i runga i te painga mai i ngā whenua Iwi.",
      category: "maori",
      region: "gisborne",
      date: "13 May 2026",
      readTime: "4 min read",
      tags: ["Maori", "Forestry", "Agribusiness"]
    }
  ];

  // --- BICULTURAL TRANSLATION ENGINE ---
  let currentLanguage = 'en';
  const translations = {
    en: {
      brandSub: "TE PĀNUI O AOTEAROA",
      navHome: "Home",
      navFeatured: "Featured Releases",
      navBenefits: "Why Publish",
      navSubmit: "Submit Release",
      btnSubmit: "Submit a Release",
      btnExamples: "View Examples",
      heroEyebrow: "Publish. Be Seen. Be Trusted.",
      heroTitle: "Press releases for New Zealand businesses that need to look credible online.",
      heroDesc: "The Press Release publishes polished business announcements that support search visibility, build online credibility, and give your news a professional home.",
      searchPlaceholder: "Search headlines, categories, or locations (e.g. Auckland, Fintech)...",
      tickerLabel: "LIVE NEW ZEALAND FEEDS",
      featuredTitle: "Featured Release Layout",
      featuredDesc: "Strong single-story treatment for launches, acquisitions, funding, major hires, and company milestones.",
      categoryTitle: "Browse by Industry Sectors",
      categoryDesc: "Click an economic or cultural sector to instantly filter current announcements.",
      gridTitle: "Recent Press Releases",
      gridDesc: "Browse the latest verified corporate updates, product launches, and regional milestones across New Zealand.",
      statOutlets: "NZ Syndication Channels",
      statIndexing: "Search Indexing Rate",
      statSupport: "Newsdesk Support",
      statIwi: "Bicultural Sectors Supported",
      btnEmailDesk: "Email the Newsdesk",
      btnStartSub: "Start Your Submission"
    },
    mi: {
      brandSub: "TE PĀNUI O AOTEAROA",
      navHome: "Kāinga",
      navFeatured: "Kōhure",
      navBenefits: "Painga",
      navSubmit: "Tukuna",
      btnSubmit: "Tukuna he Pānui",
      btnExamples: "Tirohia ngā Tauira",
      heroEyebrow: "Tāpirihia. Me kitea. Kia whakapono.",
      heroTitle: "He pānui pāpāho mā ngā kaupapa pakihi o Aotearoa e hiahia ana ki te titiro pono i te ao ipurangi.",
      heroDesc: "Kei te pānui Te Pānui o Aotearoa i ngā pānui pakihi whakaohooho e tautoko ana i te kitea rapu, te whakawhanake whakapono ipurangi, me te hoatu i tētahi kāinga ngaio ki ō pānui.",
      searchPlaceholder: "Rapua ngā ingoa, ngā wāhanga, ngā rohe rānei...",
      tickerLabel: "PĀNUI KOREUTU O AOTEAROA",
      featuredTitle: "Kaupapa Pānui Kōhure",
      featuredDesc: "He manaaki pānui kotahi kaha mō ngā whakarewatanga, kaupapa putea, me ngā taumata nui o te kamupene.",
      categoryTitle: "Tirohia mā ngā Wāhanga Ahumahi",
      categoryDesc: "Paatohia tētahi wāhanga ohaoha, ahurea rānei hei tātari tere i ngā pānui o nāianei.",
      gridTitle: "Ngā Pānui Pāpāho Hou",
      gridDesc: "Tirohia ngā whakahoutanga pakihi hou kua whakamanahia puta noa i Aotearoa.",
      statOutlets: "Ngā Hoko Tohatoha Aotearoa",
      statIndexing: "Mōhiohio Rapu Pono",
      statSupport: "Āwhina Papamahi 24/7",
      statIwi: "Ngā Wāhanga Ahurea Iwi",
      btnEmailDesk: "Tukuna he Īmēra",
      btnStartSub: "Tīmatahia te Tukunga"
    }
  };

  const langToggleBtn = document.getElementById('lang-toggle');

  function updateInterfaceLanguage(lang) {
    currentLanguage = lang;
    
    // Update simple text mappings
    document.querySelectorAll('[data-trans]').forEach(element => {
      const key = element.getAttribute('data-trans');
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });

    // Update placeholders
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.placeholder = translations[lang].searchPlaceholder;
    }

    // Toggle button text representation
    if (langToggleBtn) {
      langToggleBtn.textContent = lang === 'en' ? 'Te Reo Māori' : 'English';
    }

    // Refresh rendering of our news database with respective language text
    renderNewsGrid();
    renderFeaturedStory();
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLanguage === 'en' ? 'mi' : 'en';
      updateInterfaceLanguage(nextLang);
    });
  }

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
        news.titleTeReo.toLowerCase().includes(searchVal) ||
        news.kicker.toLowerCase().includes(searchVal) ||
        news.summary.toLowerCase().includes(searchVal) ||
        news.summaryTeReo.toLowerCase().includes(searchVal) ||
        news.region.toLowerCase().includes(searchVal) ||
        news.tags.some(tag => tag.toLowerCase().includes(searchVal))
      );
    }

    if (filteredNews.length === 0) {
      newsGridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
          <p>${currentLanguage === 'en' ? 'No matching press releases found. Try searching for other terms!' : 'Kāore he pānui pāpāho i kitea. Whakamātauhia he kupu kē!'}</p>
        </div>
      `;
      return;
    }

    // Render items
    filteredNews.forEach(news => {
      const card = document.createElement('article');
      card.className = `news-card hover-grow fade-up visible`;
      card.id = news.id;
      
      const titleText = currentLanguage === 'en' ? news.title : news.titleTeReo;
      const kickerText = currentLanguage === 'en' ? news.kicker : news.kickerTeReo;
      const summaryText = currentLanguage === 'en' ? news.summary : news.summaryTeReo;
      
      card.innerHTML = `
        <span class="news-kicker">${kickerText}</span>
        <h3>${titleText}</h3>
        <p>${summaryText}</p>
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
    const titleText = currentLanguage === 'en' ? lead.title : lead.titleTeReo;
    const kickerText = currentLanguage === 'en' ? lead.kicker : lead.kickerTeReo;
    const summaryText = currentLanguage === 'en' ? lead.summary : lead.summaryTeReo;

    featuredStorySection.innerHTML = `
      <span class="news-kicker">${kickerText}</span>
      <h3>${titleText}</h3>
      <p>${summaryText}</p>
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
      categoryCards.forEach(c => c.classList.remove('active'));
      
      const selectedCat = card.getAttribute('data-category');
      if (activeCategory === selectedCat) {
        // Toggle off
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
        news.title.toLowerCase().includes(query) ||
        news.titleTeReo.toLowerCase().includes(query)
      ).slice(0, 5);

      autocompleteBox.innerHTML = '';
      
      if (matches.length === 0) {
        autocompleteBox.innerHTML = `
          <div style="padding: 12px 20px; font-size: 0.9rem; color: var(--text-muted);">
            ${currentLanguage === 'en' ? 'No quick suggestions' : 'Kāore he whakaaro tere'}
          </div>
        `;
        return;
      }

      matches.forEach(match => {
        const item = document.createElement('div');
        item.className = 'autocomplete-item';
        
        const titleText = currentLanguage === 'en' ? match.title : match.titleTeReo;
        
        item.innerHTML = `
          <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:75%;">${titleText}</span>
          <span class="autocomplete-category">${match.category}</span>
        `;

        item.addEventListener('click', () => {
          searchInput.value = titleText;
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
      nextBtn.textContent = currentLanguage === 'en' ? 'Continue' : 'Haere tonu';
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
          alert(currentLanguage === 'en' ? 'Please enter a headline for your press release!' : 'Tukuna koa he ingoa mō tō pānui pāpāho!');
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
            ${currentLanguage === 'en' ? 'Syndicating Press Release...' : 'E tohatoha ana i te Pānui...'}
          </div>
          <div style="width: 100%; background: var(--border-color); height: 8px; border-radius: 4px; overflow:hidden;">
            <div id="simulated-progress-bar" style="background: var(--brand-accent); width: 0%; height: 100%; transition: width 1.8s ease-in-out;"></div>
          </div>
          <p style="font-size:0.9rem;">${currentLanguage === 'en' ? 'Preparing media targeting bundles...' : 'E whakarite ana i ngā kōpaki pāpāho...'}</p>
        </div>
      `;

      // Trigger animated progress bar
      setTimeout(() => {
        const bar = document.getElementById('simulated-progress-bar');
        if (bar) bar.style.width = '100%';
      }, 50);

      // Transition to final success check and feedback confetti simulated
      setTimeout(() => {
        successView.innerHTML = `
          <div class="simulated-success-box">
            <div class="success-check-circle">✓</div>
            <h2>${currentLanguage === 'en' ? 'Distribution Activated!' : 'Kua Whakamanahia te Tohatoha!'}</h2>
            <p>${currentLanguage === 'en' ? 'Your press release has been successfully processed and queued for syndication to Google News, Stuff.co.nz, and NZ Herald desks.' : 'Kua pai te tukatuka i tō pānui pāpāho, kua whakauruhia ki te rarangi tohatoha mō Google News, Stuff, me te NZ Herald.'}</p>
            <button class="btn btn-primary" id="success-close-btn" style="margin-top: 16px;">
              ${currentLanguage === 'en' ? 'Return to Portal' : 'Hoki ki te Pokapū'}
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
