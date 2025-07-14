
import Userfront from "@userfront/toolkit";

export default function Profile() {
  const handleLogout = () => {
    Userfront.logout();
  };
  const userData = JSON.stringify(Userfront.user, null, 2);
    return(
        <div>
        <h2>Dashboard</h2>
        <pre>{userData}</pre>
        
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
}
