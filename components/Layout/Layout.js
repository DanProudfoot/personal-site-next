import styled from "styled-components";

export const Page = styled.main`
  min-height: 100vh;

  background-color: var(--hex-white);
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4d4d4' fill-opacity='0.24' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-repeat: repeat;
`;

export const Section = styled.section`
  max-width: 1200px;

  margin: 0 auto;
  padding: 10rem 2rem;
`;
