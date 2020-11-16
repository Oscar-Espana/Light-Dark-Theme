import styled from "styled-components";

const H3 = styled.h3`
  color: #e1197e;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
`;

const Paragraph = styled.p`
  color: var(--fg);
`;

const ContentBox = styled.div`
  display: flex;
  padding: 24px 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 6;
  padding-right: 16px;
`;
const ImageBox = styled.div`
  flex: 6;
`;

const index = ({ title, description, image }) => (
  <ContentBox>
    <DescriptionBox>
      <H3>{title}</H3>
      <Paragraph>{description}</Paragraph>
    </DescriptionBox>
    <ImageBox>
      <img src={image} width="100%" />
    </ImageBox>
  </ContentBox>
);

export default index;
