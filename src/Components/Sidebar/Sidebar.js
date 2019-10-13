import React from "react";
import "./SidebarStyle.css";
import { Badge } from "react-bootstrap";


function Sidebar({ badgeLevel }) {
    return (
      <div>
        <div className="sidenav">
          <img className="imgStyle" src="https://picsum.photos/150" />
          <hr className="hrColor" />
          <a href="#">Feed</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
          <h4>Badges</h4>
          {badgeLevel==="1" ? <Badge pill variant="primary">Primary</Badge>
            : (badgeLevel==="2" ? <Badge pill variant="secondary">Secondary</Badge>
                : (badgeLevel==="3" ? <Badge pill variant="success">Success</Badge>
                    : (badgeLevel==="4" ? <Badge pill variant="danger">Danger</Badge>
                        : (badgeLevel==="5" ? <Badge pill variant="warning">Warning</Badge>
                            : (<Badge pill variant="dark">Dark</Badge>)))))  
        }
        </div>
      </div>
    );
  }
  
  export default Sidebar;