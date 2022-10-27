import styled from "styled-components";

export default function HeroBanner() {
  return (
    <Container>
      <BannerText>
        <BannerTitle>Savoir Faire</BannerTitle>
        <BannerDescription>
          its french. say it how its supposed to be said.
        </BannerDescription>
        <BannerDescription>itll make your mouth feel funny.</BannerDescription>
      </BannerText>
      <BannerImg>
        <Img
          src="assets/hims-blog-atf.webp"
          alt="pill containers with dolls on the cap"
        />
      </BannerImg>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns:
    minmax(24px, 1fr)
    minmax(auto, 100%)
    minmax(24px, 1fr);
  background-color: ${({ theme }) => theme.colors.bannerBackground};
  width: 100%;
  height: 750px;
  padding-top: 100px;
  @media ${({ theme }) => theme.breakpoints.lg} {
    padding-top: 0;
    grid-template-columns:
      9%
      51%
      40%;
  }
`;

const BannerText = styled.div`
  grid-column: 2;
  align-self: center;
  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-column: 2;
  }
`;

const BannerTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  @media ${({ theme }) => theme.breakpoints.lg} {
    text-align: left;
  }
`;

const BannerDescription = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  @media ${({ theme }) => theme.breakpoints.lg} {
    text-align: left;
  }
`;

const BannerImg = styled.div`
  grid-column: 1/4;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-column: 3;
  }
`;

const Img = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: cover;
  @media ${({ theme }) => theme.breakpoints.lg} {
    max-width: 100%;
  }
`;
