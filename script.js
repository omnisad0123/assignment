const newsData = [
    {
        "title": "Amy Schneider’s Jeopardy! Streak Ends at 40 Consecutive Wins and $1.4 Million",
        "link": "https://time.com/6142934/amy-schneider-jeopardy-streak-ends/"
    },
    {
        "title": "'Writing With Fire' Shines a Light on All-Women News Outlet",
        "link": "https://time.com/6142628/writing-with-fire-india-documentary/"
    },
    {
        "title": "Moderna Booster May Wane After 6 Months",
        "link": "https://time.com/6142852/moderna-booster-wanes-omicron/"
    },
    {
        "title": "Pressure Mounts for Biden to Nominate a Black Woman to the Supreme Court",
        "link": "https://time.com/6142743/joe-biden-supreme-court-nominee-black-woman-campaign-promise/"
    },
    {
        "title": "The James Webb Space Telescope Is in Position—And Now We Wait",
        "link": "https://time.com/6142769/james-webb-space-telescope-reaches-l2/"
    },
    {
        "title": "We Urgently Need a New National COVID-19 Response Plan",
        "link": "https://time.com/6142718/we-need-new-national-covid-19-response-plan/"
    }
];

// Function to format date as "Month Day, Year"
function formatDate(date) {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
}

// Function to format time as "HH:MM AM/PM"
function formatTime(date) {
    const options = { hour: 'numeric', minute: '2-digit', hour12: true };
    return new Date(date).toLocaleTimeString(undefined, options);
}

// Function to generate HTML for news articles
function generateNewsHTML(newsData) {
    const newsContainer = document.getElementById('news-container');
    newsData.forEach(article => {
        const newsCard = document.createElement('div');
        newsCard.classList.add('news-card');

        const title = document.createElement('a');
        title.textContent = article.title;
        title.href = article.link;

        // Container for date and time
        const dateTimeContainer = document.createElement('div');
        dateTimeContainer.classList.add('date-time-container');

        const dateElement = document.createElement('div');
        dateElement.textContent = formatDate(new Date());

        const timeElement = document.createElement('div');
        timeElement.textContent = formatTime(new Date());

        // Append date and time elements to container
        dateTimeContainer.appendChild(dateElement);
        dateTimeContainer.appendChild(timeElement);

        // Append title and date-time container to news card
        newsCard.appendChild(title);
        newsCard.appendChild(dateTimeContainer);

        newsContainer.appendChild(newsCard);
    });
}

// Call the function to generate HTML for news articles
generateNewsHTML(newsData);
