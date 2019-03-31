import React from "react";
import Link from "./Link";
import { VisibilityFilters, setVisibilityFilter } from "../actions";
import { useDispatch, useMappedState } from "../store";

const Footer = () => {
  const dispatch = useDispatch();
  const visibilityFilter = useMappedState(
    ({ visibilityFilter }) => visibilityFilter
  );

  return (
    <div>
      <span>Show: </span>
      <Link
        onClick={() =>
          dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))
        }
        active={visibilityFilter === VisibilityFilters.SHOW_ALL}
      >
        All
      </Link>
      <Link
        onClick={() =>
          dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))
        }
        active={visibilityFilter === VisibilityFilters.SHOW_ACTIVE}
      >
        Active
      </Link>
      <Link
        onClick={() =>
          dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
        }
        active={visibilityFilter === VisibilityFilters.SHOW_COMPLETED}
      >
        Completed
      </Link>
    </div>
  );
};

export default Footer;
