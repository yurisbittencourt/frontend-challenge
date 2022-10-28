import styled from "styled-components";
import { useState } from "react";
import { useCheckIfFixed } from "../../hooks/useCheckScroll";

export default function FilterOptions() {
  const [active, setActive] = useState("all");
  const { isFilterFixed } = useCheckIfFixed();

  const handleClick = (e) => {
    setActive((active) => e.target.id);
  };

  return (
    <>
      <Container fixed={isFilterFixed}>
        <FilterOption>
          <A
            id="everyday-health"
            onClick={handleClick}
            active={active === "everyday-health" ? true : false}
          >
            Everyday Health
          </A>
        </FilterOption>
        <FilterOption>
          <A
            id="all"
            onClick={handleClick}
            active={active === "all" ? true : false}
          >
            All
          </A>
        </FilterOption>
        <FilterOption>
          <A
            id="hair"
            onClick={handleClick}
            active={active === "hair" ? true : false}
          >
            Hair
          </A>
        </FilterOption>
        <FilterOption>
          <A
            id="lifestyle"
            onClick={handleClick}
            active={active === "lifestyle" ? true : false}
          >
            Lifestyle
          </A>
        </FilterOption>
        <FilterOption>
          <A
            id="mental-health"
            onClick={handleClick}
            active={active === "mental-health" ? true : false}
          >
            Mental Health
          </A>
        </FilterOption>
        <FilterOption>
          <A
            id="sex"
            onClick={handleClick}
            active={active === "sex" ? true : false}
          >
            Sex
          </A>
        </FilterOption>
        <FilterOption>
          <A
            id="skin"
            onClick={handleClick}
            active={active === "skin" ? true : false}
          >
            Skin
          </A>
        </FilterOption>
      </Container>
    </>
  );
}

const Container = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 32px 0;
  background-color: ${({ theme }) => theme.colors.background};
  overflow-x: scroll;
  transition: all 0.5s linear;
  border-bottom: 2px solid ${(props) => props.theme.colors.line};
  @media ${({ theme }) => theme.breakpoints.lg} {
    overflow-x: hidden;
    ${({ fixed }) =>
      fixed &&
      "position: fixed; top:0; left: 0; box-shadow: rgb(0 0 0 / 5%) 0px 0.125rem 1rem; border: none;"};
  }
`;

const FilterOption = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 125px;
  margin: 0 auto;
`;

const A = styled.a`
  text-decoration: none;
  font-size: 1.2rem;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
  color: ${({ active, theme }) =>
    active ? theme.colors.filterActive : theme.colors.filter};
  &:hover {
    color: ${({ theme }) => theme.colors.filterHover};
  }
`;
