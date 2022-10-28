import { useFetchImage } from "../../hooks/useFetchImage";
import styled from "styled-components";

export default function Article({ data }) {
  const imgUrl = useFetchImage(data);
  return (
    <Container>
      <ImgWrapper>
        <Img src={imgUrl} alt="article image" />
      </ImgWrapper>
      <TextWrapper>
        <ArticleTitle>{data.title}</ArticleTitle>
        <ArticleDescription>{data.text}</ArticleDescription>
        <ArticleLink href={data.url} target="_blank">
          Read this Article
        </ArticleLink>
      </TextWrapper>
      <Line />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  width: 100%;
  padding-top: 32px;
  grid-template-columns:
    minmax(24px, 1fr)
    minmax(auto, 550px)
    minmax(24px, 1fr);

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns:
      minmax(64px, 1fr)
      28%
      minmax(32px, 64px)
      52%
      minmax(64px, 1fr);
  }
`;

const ImgWrapper = styled.div`
  grid-column: 2;
  width: 100%;
  height: 250px;
  margin-bottom: 32px;
  @media ${(props) => props.theme.breakpoints.md} {
    height: 460px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  grid-column: 2;
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-column: 4;
  }
`;

const ArticleTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 16px;
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 1.8rem;
  }
`;

const ArticleDescription = styled.p`
  margin-bottom: 32px;
  font-size: 1rem;
`;

const ArticleLink = styled.a`
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  margin-bottom: 32px;
  padding-bottom: 2px;
  border-bottom: 2px solid ${(props) => props.theme.colors.text};
`;

const Line = styled.div`
  grid-column: 2;
  width: 100%;
  border-bottom: 2px solid ${(props) => props.theme.colors.line};
  margin-top: 32px;
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-column: 2/5;
  }
`;
