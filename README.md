# Grocery List Application

A simple and visually appealing grocery list application built with React.js and Django. This application allows users to add, categorize, and manage their grocery items. Users can filter items by category, and the application even enhances the display with relevant emojis.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- Add grocery items with a quantity and category.
- Filter grocery items by category.
- Automatically adds relevant emojis to grocery items.
- Strikethrough functionality for checked items.
- Modern and responsive UI design.


## Installation

### Backend (Django)
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/grocery-list.git
   cd grocery-list/backend
   ```
2. Set up a virtual environment:
   ```bash
   python3 -m venv env
   source env/bin/activate
   ```
3. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```
4. Apply migrations and run the server:
   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

### Frontend (React)
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install the required packages:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

## Usage

- Start both the Django and React servers as described in the [Installation](#installation) section.
- Open your browser and navigate to `http://localhost:3000` to view the application.
- Use the interface to add, view, filter, and manage your grocery list.

## Project Structure

```bash
.
├── backend                 # Django backend
│   ├── groceries           # Grocery app
│   ├── manage.py           # Django management script
│   ├── db.sqlite3          # SQLite database
│   └── requirements.txt    # Python dependencies
└── frontend                # React frontend
    ├── src
    │   ├── components      # React components
    │   ├── App.js          # Main React component
    │   ├── index.js        # React entry point
    │   └── App.css         # Main CSS file
    ├── public              # Public assets
    ├── package.json        # Node.js dependencies
    └── README.md           # Frontend-specific README
```

## Technologies Used

- **Frontend:**
  - React.js
  - CSS (with Flexbox and Grid for responsive design)

- **Backend:**
  - Django (Python)
  - Django REST framework for API development

- **Other:**
  - Axios for HTTP requests
  - React Modal for pop-up forms
  - Emoji mapping using `emoji-dictionary`

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any enhancements, bug fixes, or new features. Ensure that your code adheres to the existing coding style and conventions.

## Contact

For any questions or inquiries, please contact:

- **Isabella Masiero**
- Email: [masierobabeia@gmail.com](mailto:your-email@example.com)
- GitHub: [github.com/isabellaMas](https://github.com/your-username)