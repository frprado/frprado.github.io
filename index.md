---
layout: default
title: Frederico Prado
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>
  /* Barebones CSS just to make the tabs function */
  .tab-buttons { margin-bottom: 2em; }
  .tab-button { 
    background: none; 
    border: none; 
    padding: 0; 
    margin-right: 1.5em; 
    font-size: 1.1em; 
    color: #0366d6; 
    text-decoration: underline; 
    cursor: pointer; 
  }
  .tab-button:hover { color: #005cc5; }
  .tab-button.active { color: inherit; text-decoration: none; font-weight: bold; cursor: default; }
  
  .tab-content { display: none; }
  .tab-content.active { display: block; }
  
  .item-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.5em; }
  .item-header h3 { margin-bottom: 0; }
  .stack { font-family: monospace; font-size: 0.9em; margin-bottom: 1em; opacity: 0.8; }
  
  /* Styling for clean nested skill lists */
  ul ul { margin-top: 0.5em; margin-bottom: 1em; list-style-type: none; padding-left: 1em; }
  ul ul li { margin-bottom: 0.3em; }
  ul ul i { width: 1.2em; text-align: center; margin-right: 0.4em; }

  /* Brand Colors for Icons */
  .fa-python { color: #3776AB; }
  .fa-r-project { color: #276DC3; }
  .fa-git-alt { color: #F05032; }
  .fa-robot { color: #8A2BE2; }
  .fa-aws { color: #FF9900; }
  .fa-database { color: #4DB33D; }

  /* THE FIX: Re-invert emojis and icons if Dark Mode is active */
  @media (prefers-color-scheme: dark) {
    .emoji, i[class*="fa-"] {
      filter: invert(1) hue-rotate(180deg);
    }
  }
</style>

<h1>Frederico Prado, PhD</h1>
<p>Data Scientist | Researcher | Experimentalist</p>
<p>
  📍 São Paulo, Brazil
  <a href="https://github.com/frprado">GitHub</a> | <a href="https://www.linkedin.com/in/frblprado/">LinkedIn</a>
</p>

<hr>

<div class="tab-buttons">
  <button class="tab-button active" onclick="openTab(event, 'about')">About Me</button>
  <button class="tab-button" onclick="openTab(event, 'experience')">Experience</button>
  <button class="tab-button" onclick="openTab(event, 'portfolio')">Portfolio</button>
  <button class="tab-button" onclick="openTab(event, 'academic')">Academic Work</button>
</div>

<div id="about" class="tab-content active" markdown="1">

I am a Data Scientist specializing on NLP and experimentation, with a foundational background in cognitive science and linguistic research (MSc, PhD). I am focused on dynamically applying research methodology to the end-to-end development of data products and machine learning solutions.

My main areas of expertise are creating text classification solutions, ML pipeline development and end-to-end experimental deployment (A/B tests, eye-tracking controlled trials, survey-based randomized trials).

Previously, I was a graduate student researcher at McMaster University specialized in theoretical linguistics. My academic work falls within the field of Generative Syntax and is focused on the syntactic properties of Brazilian Portuguese. You can find my academic work here.

### Technical Skills
* **Programming & Automation**
  * <i class="fab fa-python"></i> **Python:** pandas, sklearn, numpy, seaborn, transformers, pytorch, selenium
  * <i class="fab fa-r-project"></i> **R:** tidyverse, lmer4, ggplot2, shiny
  * <i class="fab fa-git-alt"></i> **Git:** version control and CI/CD
* **AI & NLP**
  * <i class="fas fa-robot"></i> LabelBox, LangChain, transformers, spaCy, HuggingFace, Amazon Bedrock
* **Cloud Infrastructure**
  * <i class="fab fa-aws"></i> **AWS:** S3, Lambda, Glue, Athena, Sagemaker AI
* **Data & BI**
  * <i class="fas fa-database"></i> SQL, Looker Studio, PowerBI, Tableau

### Current Role
**Data Scientist at Mindgruve** (São Paulo, Brazil)

### Education & Certifications
* **PhD, Cognitive Science of Language** – McMaster University
* **MSc, Cognitive Science of Language** – McMaster University
* **BA, Linguistics** – State University of Campinas
* **Google Advanced Data Analytics Certificate** (2025)

### Languages
* <span class="emoji">🇧🇷</span> **Portuguese** (native)
* <span class="emoji">🇺🇸</span> **English** (fluent)
</div>

<div id="experience" class="tab-content" markdown="1">

<div class="item-header">
  <h3>Mindgruve | Data Scientist</h3>
  <span>2026 - Present</span>
</div>
<div class="stack">[<i class="fab fa-aws"></i> AWS, <i class="fab fa-python"></i> Python]</div>
* Developing Marketing Mix Models (MMM) to optimize budget allocation across multiple marketing channels and project ROI.
* Implementing end-to-end ML pipelines within AWS infrastructure, from raw data ingestion (Lambda, Glue, Athena) to model deployment (SageMaker).
* Writing documentation on legacy codebases to improve MLOps workflows.

<hr>

<div class="item-header">
  <h3>State Health Dept. | Data Scientist (Contract)</h3>
  <span>2025</span>
</div>
<div class="stack">[<i class="fab fa-python"></i> Python, <i class="fab fa-r-project"></i> R <i class="fas fa-database"></i> SQL]</div>
* Analyzed large-scale epidemiological datasets on respiratory illnesses; tasks went from data cleaning and wrangling to advanced machine learning model development and deployment.
* Conducted observational studies on vaccine effectiveness, employing logistic regression and propensity score matching to estimate effects on mortality, ICU admission, and illness severity.
* Developed and deployed an XGBoost text classifier to process 400,000+ clinical notes, identifying unreported patient deaths with high efficiency.
* Designed and deployed ETL pipelines to extract large medical exam datasets from legacy government databases leveraging Selenium + local transformer models for task automation.
* Built real-time monitoring dashboards to facilitate and automate monitoring workflows for critical respiratory illnesses in the state of São Paulo.

<hr>

<div class="item-header">
  <h3>Citylitics Inc. | Data Analyst</h3>
  <span>2024 - 2025</span>
</div>
<div class="stack">[<i class="fab fa-python"></i> Python, <i class="fas fa-database"></i> SQL]</div>
* Designed and deployed LLM-powered pipelines to structure and enrich large-scale text datasets, facilitating future analysis and predictive modelling.
* Developed and maintained dashboards in Looker Studio and Tableau, facilitating decision making by stakeholders through concise, clear and compelling data visualizations.
* Regularly conducted exploratory data analysis using SQL + pandas on a large database of textual and financial data.
* Conducted statistical analyses and built predictive models (classification/regression) to support data-driven decision-making for internal teams and external stakeholders.

<hr>

<div class="item-header">
  <h3>McMaster University | Graduate Researcher</h3>
  <span>2017 - 2023</span>
</div>
<div class="stack">[<i class="fab fa-r-project"></i> R]</div>
* Collected, annotated, and analyzed 1,000+ linguistic data points using structured interviews and A/B testing paradigms.
* Designed and deployed survey-based multifactored experiments (600+ participants), implementing randomized stimuli and automating workflows.
* Generated and cleaned large-scale datasets (500+ responses), applying statistical modeling (R, Linear Mixed Models) to extract meaningful patterns from behavioral data.
* Designed and piloted two behavioral studies using eye-tracking technology.

</div>

<div id="portfolio" class="tab-content" markdown="1">

<!-- <div class="item-header">
  <h3><a href="https://github.com/frprado/spam-scraper">ScamWatch</a></h3>
</div>
<div class="stack">[<i class="fab fa-python"></i> Python, spaCy, Streamlit, GitHub Actions]</div>

Reddit scraper + NLP pipeline + interactive dashboard for analysing r/Scams posts. Tracks scam types, money amounts, urgency language, scammer directives, victim actions, and geographic distribution. Automated daily scraping via GitHub Actions keeps the data fresh and triggers an automatic redeploy on Streamlit Community Cloud.

<hr> -->

<div class="item-header">
  <h3><a href="https://huggingface.co/spaces/ycalx/lingdash">LingDash</a></h3>
</div>
<div class="stack">[<i class="fab fa-python"></i> Python, Dash, Plotly, OpenAlex API]</div>

End-to-end bibliometric study of linguistics research (1960–2024), built on ~250M scholarly works indexed by OpenAlex. 

The pipeline fetches and deduplicates peer-reviewed articles across five linguistics topic clusters, applies a journal quality filter (DOAJ membership, OpenAlex core status, or h-index ≥ 15) to remove predatory venues, and enriches each paper with country attribution, detected language mentions (regex over a ~7 700-name ISO 639 reference list), genetic language family (hardcoded table + Wikidata SPARQL fallback), and zero-shot subfield classification via sentence-transformer embeddings. 

</div>

<div id="academic" class="tab-content" markdown="1">

<div class="item-header">
  <h3><u>Hyper-raising under control</u></h3>
  <span>2023</span>
</div>
*PhD thesis*. [[PDF](/pdf/phd-thesis.pdf)] [[BibTeX](/bib/phd-thesis.bib)]<br><br>
My PhD dissertation on hyper-raising. Proposes a novel analysis of hyper-raising by arguing it can be minimally explained via a control-based model, building upon previous theories of control. Argues for the existence of non-finite control and supports this idea via a large body of novel empirical evidence from Brazilian Portuguese.

<hr>

<div class="item-header">
  <h3><u>Movement across finite clause boundaries: Hyper Raising in Brazilian Portuguese</u></h3>
  <span>2022</span>
</div>
*Canadian Linguistic Association Annual Meeting*. [[Abstract](/pdf/PradoAssessing2021.pdf)] [[Slides](/pdf/apresentacao%20cla2.pdf)]<br><br>
Abstract. Talk given at the 2022 Canadian Linguistic Association annual conference.

<hr>

<div class="item-header">
  <h3><u>Hyper Raising in Brazilian Portuguese</u></h3>
  <span>2022</span>
</div>
*MOTH Syntax Conference*. [[Handout](/pdf/handout_MOTH_2022.pdf)]<br><br>
Handout. Talk given at the 2022 MOTH conference.

<hr>

<div class="item-header">
  <h3><u>Deriving the double subject construction in Brazilian Portuguese through anti-locality</u></h3>
  <span>2021</span>
</div>
*MOTH Syntax Conference*. [[Handout](/pdf/prado_handout_moth2021.pdf)]<br><br>
Handout. Talk given at the 2021 MOTH conference.

<hr>

<div class="item-header">
  <h3><u>Null Subjects in Brazilian Portuguese: A Unified Model</u></h3>
  <span>2019</span>
</div>
*MSc Thesis*. [[PDF](/pdf/msc-thesis.pdf)] [[BibTeX](/bib/msc-thesis.bib)]<br><br>
My MSc thesis on null subject phenomena in Brazilian Portuguese. Proposes a novel analysis of NSs and introduces previously unaccounted for patterns that remain to be properly understood in the literature.

<hr>

<div class="item-header">
  <h3><u>Brazilian Portuguese null subjects in light of a hybrid discourse-oriented system</u></h3>
  <span>2019</span>
</div>
*Canadian Linguistics Association Annual Meeting*. [[Abstract](/pdf/cla_2018.pdf)]<br><br>
Abstract. Poster presented at the 2019 Canadian Linguistic Association annual conference.

<hr>

<div class="item-header">
  <h3><u>Reassessing adjective chaining in Pirahã</u></h3>
  <span>2019</span>
</div>
*XXV Congresso de Iniciação Científica da UNICAMP*. [[Poster](/pdf/piraha.pdf)]<br><br>
Poster presented at the yearly Universidade Estadual de Campinas' Undergraduate Disseration Confernece

</div>

<script>
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].className = tabcontent[i].className.replace(" active", "");
  }
  
  tablinks = document.getElementsByClassName("tab-button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).className += " active";
  evt.currentTarget.className += " active";
}
</script>