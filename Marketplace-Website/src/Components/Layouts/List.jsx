import React from 'react';
import { NavLink } from 'react-router-dom';

const List = () => {
    return (
      <>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "btn btn-primary" : "btn btn-ghost"
            }
            to={"/"}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "btn btn-primary" : "btn btn-ghost"
            }
            to={"/team"}
          >
            Team
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "btn btn-primary" : "btn btn-ghost"
            }
            to={"/magazine"}
          >
            Magazine
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "btn btn-primary" : "btn btn-ghost"
            }
            to={"/blogs"}
          >
            blogs
          </NavLink>
        </li>
      </>
    );
};

export default List;