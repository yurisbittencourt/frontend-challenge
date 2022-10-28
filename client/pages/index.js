import Head from "next/head";
import styled from "styled-components";
import { useLazyQuery, useQuery } from "@apollo/client";
import { Article, FilterOptions, HeroBanner, Modal } from "../components";
import { useEffect, useState } from "react";
import { GET_FIRST_ARTICLES, GET_PAGE_ARTICLES } from "./api/getArticles";
import { Waypoint } from "react-waypoint";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [newArticle, setNewArticle] = useState();
  const { data, loading, error } = useQuery(GET_FIRST_ARTICLES);
  const [getPageArticles, {}] = useLazyQuery(GET_PAGE_ARTICLES, {
    variables: { page: articles.length / 30 + 1 },
  });

  useEffect(() => {
    data && setArticles(data.firstPageArticles);
  }, [data]);

  useEffect(() => {
    newArticle && setArticles((articles) => [newArticle, ...articles]);
  }, [newArticle]);

  const handleOpen = () => {
    document.body.style.overflow = "hidden";
    setIsOpen(true);
  };

  return (
    <>
      <Head>
        <title>Savoir Faire | Hims</title>
      </Head>
      <Main>
        <HeroBanner />
        <CallToAction>
          <A onClick={() => handleOpen()}>Create a new article post</A>
        </CallToAction>
        <H1>Explore the Hims Journal</H1>
        <FilterOptions />

        {isOpen && (
          <Modal setIsOpen={setIsOpen} setNewArticle={setNewArticle} />
        )}

        {loading ? (
          <p>loading...</p>
        ) : error ? (
          <p>error...</p>
        ) : (
          articles &&
          articles.map((article, idx) => (
            <div key={idx}>
              <Article data={article} />
              {idx === articles.length - 3 && (
                <Waypoint
                  onEnter={() =>
                    getPageArticles().then((res) => {
                      setArticles([
                        ...articles,
                        ...res.data.retrievePageArticles,
                      ]);
                    })
                  }
                />
              )}
            </div>
          ))
        )}
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 56px;
`;

const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  align-self: center;
  margin-top: 32px;
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2rem;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 3rem;
  }
`;

const CallToAction = styled.div`
  grid-column: 1/4;
  display: flex;
  align-items: end;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  padding-bottom: 10px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-column: 1/4;
    padding-top: 100px;
    font-size: 0.8rem;
  }
`;

const A = styled.a`
  color: ${({ theme }) => theme.colors.bannerLink};
  font-weight: 500;
  cursor: pointer;
`;

const CreateArticle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 125px;
  margin: 0 auto;
  font-size: 1.2rem;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
  background: transparent;
  border: none;
  margin-top: 32px;
  color: ${({ theme }) => theme.colors.filter};
  &:hover {
    color: ${({ theme }) => theme.colors.line};
  }
`;
