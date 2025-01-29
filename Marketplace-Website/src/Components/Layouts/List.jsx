import { Link } from "react-router-dom";


const List = () => {
    return (
      <>
        

          
          <li className="group relative">
            <Link to={"/love-box"}>Love Box</Link>
            <ul className="menu menu-compact absolute hidden group-hover:block w-96 mt-9 bg-base-100 rounded-box shadow-lg p-2 z-[50]">
              <li>
                <Link to={"/love-box"}>Jamdani Love Book </Link>
              </li>
              <li>
                <Link to={"/love-box"}>Kathan Love Box</Link>
              </li>
            </ul>
          </li>

          
          <li className="group relative">
            <Link to={"/saree"}>Saree</Link>
            <ul className="menu menu-compact absolute hidden group-hover:block w-96 mt-9 bg-base-100 rounded-box shadow-lg p-2 z-[50]">
              <li>
                <Link to={"/saree"}>Jamdani</Link>
              </li>
              <li>
                <Link to={"/saree"}>Katan</Link>
              </li>
              <li>
                <Link to={"/saree"}>Silk</Link>
              </li>
              <li>
                <Link to={"/saree"}>Half Silk</Link>
              </li>
              <li>
                <Link to={"/saree"}>Cotton</Link>
              </li>
            </ul>
          </li>

          
          <li className="group relative">
            <Link to={"/shawl"}>shawl</Link>
            <ul className="menu menu-compact absolute hidden group-hover:block w-96 mt-9  bg-base-100 rounded-box shadow-lg p-2 z-[50]">
              <li>
                <Link to={"/shawl"}>Products</Link>
              </li>
              
            </ul>
          </li>

          {/* All Collections */}
          {/* <li className="group relative">
            <a>All Collections</a>
            <ul className="menu menu-compact absolute hidden group-hover:block w-96 mt-9 bg-base-100 rounded-box shadow-lg p-2 z-[50]">
              <li>
                <a>Toys</a>
              </li>
              <li>
                <a>Clothing</a>
              </li>
              <li>
                <a>Dresses</a>
              </li>
              <li>
                <a>Handbags</a>
              </li>
              <li>
                <a>Shirts</a>
              </li>
              <li>
                <a>Jeans</a>
              </li>
            </ul>
          </li> */}
      </>
    );
};

export default List;