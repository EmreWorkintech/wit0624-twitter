import { navigationItems } from "../data";
import NavigationItem from "./NavigationItem";

function Navigation() {
  return (
    <div>
      {navigationItems.map((item, index) => {
        return <NavigationItem menuItem={item} key={index} />;
      })}
    </div>
  );
}

export default Navigation;
