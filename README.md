# Grocery List Application

A simple grocery list application built with React.js and Django. This app allows users to add, categorize, and manage grocery items, with filtering and emoji-enhancement features.

## Features
- Add items with quantity and category.
- Filter by category.
- Automatically adds emojis to items.
- Responsive design with a modern UI.

## Installation

### Backend (Django)
1. Clone the repository:
   ```sh
   git clone https://github.com/isabellaMas/groceryList.git
   cd groceryList/backend
   ```
2. Set up a virtual environment and install dependencies:
   ```sh
   python3 -m venv env
   source env/bin/activate
   pip install -r requirements.txt
   ```
3. Apply migrations and run the server:
   ```sh
   python manage.py migrate
   python manage.py runserver
   ```

### Frontend (React)
1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## Usage
- Run both the Django and React servers.
- Open `http://localhost:3000` in your browser.

## Project Structure
- `backend/` - Django backend
- `frontend/` - React frontend

## Technologies Used
- **Frontend:** React.js, CSS
- **Backend:** Django, Django REST Framework
- **Other:** Axios, React Modal, Emoji Dictionary

## Contributing
Contributions are welcome! Please fork the repo and submit a pull request.

## Contact
For inquiries, contact [Isabella Masiero](mailto:masierobabeia@gmail.com).