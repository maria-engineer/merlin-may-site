import styled from "@emotion/styled";

export const Body = styled.div`
    padding: 1.9rem 2.5rem 2.5rem 2.5rem;
`;

export const Text = styled.p`
color: rgba(0,0,0,0.75);
`;

export const SectionTitle = styled.h2`
    @media (max-width: 600px) {
        width: 100%;
        padding: 0.5rem;
    }
    width: 50%;
    font-weight: bold;
    text-align: left;
    font-size: 1.4rem;
    grid-pad: 2;
    padding: 1rem;
    color: rgba(0,0,0,0.75);
`;


export const Main = styled.div`
  @media (max-width: 600px) {
      padding: 0.5rem;
    }
  display: flex;
  flex-direction: column;
  line-height: 1.4;
  text-size: 1.5rem;
  padding: 2rem 4rem 2rem 4rem;
`;

export const Title = styled.h1`
  text-size: 3rem;
  text-align: center;
`;

export const SubTitle = styled.h2`
  text-size: 2rem;
  text-align: right;
  padding-right: 5rem;
`;

export const Separator = styled.div`
  color: #99a893;
  text-size: 20rem;
  text-align: center;
  height: 50px;
  padding-bottom: 1rem;
`;