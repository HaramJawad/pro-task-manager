
import { Link } from 'react-router-dom';
import "./NotFoundPage.css"

function NotFoundPage() {
    return (
        <div className="notFoundPageContainer">
          <h1>404</h1>
          <h2>Oops! Page Not Found</h2>
          <p>The page you are looking for doesn't exist.</p>
          <Link to="/">
            Go Back to Dashboard
          </Link>
        </div>
  )
}

export default NotFoundPage