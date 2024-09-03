fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const leftDiv = document.getElementById('left_div');
        const rightDiv = document.getElementById('right_div');
        data.getTimeStories.forEach(story => {
            const storyDiv = document.createElement('div');
            storyDiv.classList.add('story');

            const storyTitle = document.createElement('h2');
            storyTitle.textContent = story.name;
            storyDiv.appendChild(storyTitle);

            const storyLink = document.createElement('a');
            storyLink.href = story.url;
            storyLink.textContent = story.selection2;
            storyLink.target = '_blank';
            storyDiv.appendChild(storyLink);

            leftDiv.appendChild(storyDiv);
        });

        data.homenews.forEach(news => {
            const newsDiv = document.createElement('div');
            newsDiv.classList.add('news');

            const newsTitle = document.createElement('h2');
            newsTitle.textContent = news.name;
            newsDiv.appendChild(newsTitle);

            const newsLink = document.createElement('a');
            newsLink.href = news.url;
            newsLink.textContent = news.selection2;
            newsLink.target = '_blank';
            newsDiv.appendChild(newsLink);

            rightDiv.appendChild(newsDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
