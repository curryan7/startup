# "Me and You" startup specs
## Elevator Pitch
Communication is key in any relationship. Whether you just started a relationship or are in one right now, planning dates can be a stressful task; especially if you don't exactly know what you're partner is down to do. So instead of sending multiple text messages and memes and having each idea possibly shot down, how about you send them a list of options, and have them select the ones that they'd like? That's where I'd like to introduce Me and You. A couple's website where one person puts suggestions for dates and the other person receives those options and selects what they'd like to do. And the ones you agree on will then be displayed to show what you both are interested in doing!

## Key Features
- Authentication: The user will need to create an account and login. The user's name will be shown, below that name in smaller print will be their username they selected
- Database data: You can see what date other couples have agreed to go on to see what are some popular date ideas for inspiration
- WebSocket data: it will show some of the dates that have been agreed on that month
- Profile connection: users will be able to search the username of the person they've matched with online or met in person (if they have an account) and interact on a voting poll together
- Blind voting: Once connected, one person will create a poll and vote on it. The other person will not be able to see what the creator voted on. The other person will receive the poll that the creator chose and have a chance to vote. Those that they both voted on will display green after the receiver has voted.

## Sketches
![Screenshot 2023-09-22 at 2 43 21 PM](https://github.com/curryan7/startup/assets/103795725/2c7627fd-f1d5-4aaa-9ba1-db9cfc2d4de5)
![Screenshot 2023-09-22 at 2 43 41 PM](https://github.com/curryan7/startup/assets/103795725/462ab83f-43f5-4650-b0fc-04904d82f829)
![Screenshot 2023-09-22 at 2 43 53 PM](https://github.com/curryan7/startup/assets/103795725/bc70ad16-a047-4eed-9762-e4394eed2058)

## HTML deliverable
For this deliverable, I built out the structure of my application using HTML.
- HTML pages: (5 pages) index.html, about.html, voter.html, voting.html, and waiting.html
- Links: The login page has two paths. All buttons lead to another page (login, submit, etc.). There is a link to the about page in the waiting page text.
- Text: Each voting choice has a textual description, the about page has information about the website, the waiting page after submitting a pole has text instructing users the next steps.
- placeholder for 3rd party: a random article from a dating website will replace the articles in the about page
- images: there are images on the about page and waiting page
- login placeholder/username display: input box and submit button for login
- database data placeholder: voting choices will represent data pulled from the databases as well as date ideas that were suggested on the ideas table when creating a poll
- Websocket: tally of which ideas you agree on with your date on the results page will be the realtime communication will be

## CSS deliverable
- Header, footer, and main content body: color of footer and header and different from the white background of page
- Navigation elements: I created custom navigation menu that works as a drop down menu in mobile and also changed the color, font, and size of the elements within the navigation menu in the header.
- Responsive to window resizing: app looks great both in mobile and desktop (I'd highly recommend checkin it out on mobile)
- Application elements: Used a professional color scheme and utilized spacing to not crowd the user with content
- Application text content: consistent fonts
- Application images: all images are present and spaced correctly to be decoratively asthetic

## Javascript Deliverable
- support for log-in: the home page checks for valid phone numbers, and will only access the 'create poll' page if the phone number is valid. For those accessing someone else's poll (phone number field below), you will not be able to access the form without putting in a phone number that matches one in the array stored in the local storage
- future database data: first name, phone number, poll ideas, are all stored in local storage (verify with inspect --> application --> local storage)
- Websocket: ideas page will post random polls from other users **warning** you will need to create at least two polls when grading in order to see this feature work
- interaction logic: checkboxes in polls are an easy interface, the log-in screen with the first name and phone number will not proceed without a valid phone number or a matching phonenumber with what is in storage, and after completing a poll or filling one out the website will direct you to an instruction page to tell you what to do next.

