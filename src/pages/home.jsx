import './home.css';

import {Link} from 'react-router-dom';

function Home() {
    return (
     <div className="home">
        <h1>Welcome to my super amazing online store</h1>

        <Link className='btn btn-primary' to="/catalog">Check our catalog &gt;</Link>
     </div>
    );
}

export default Home;