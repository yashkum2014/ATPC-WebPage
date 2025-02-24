// Contentful API credentials
const spaceId = 'zbd9q2xufq4z';
const accessToken = 'mNl5mEGnl7ch1taMG4XziBOsawfTQjKJVzIm-bQM9g0';

// Contentful API URL
const apiUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}`;

// Fetch data from Contentful
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Full API response:', data);

        if (data.items && data.items.length > 0) {
            const notification = data.items[0].fields;
            const notificationText = notification?.text || 'No updates available.';
            const imageUrl = notification?.image?.fields?.file?.url ? `https:${notification.image.fields.file.url}` : '';

            // Set text and image
            document.getElementById('notification-text').textContent = notificationText;
            const imageElement = document.getElementById('notification-image');

            
        } else {
            console.error('No items found in Contentful response.');
        }
    })
    .catch(error => {
        console.error('Error fetching content:', error);
    });
