import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  > section {
    margin-top: 7rem;
    display: flex;
    gap: 1.5rem;
    padding-bottom: 8rem;
    border-bottom: 3px solid ${({ theme }) => theme.primary};
  }
  @media (max-width: 1000px) {
    gap: 1rem;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    margin-top: 5rem;
    gap: 2rem;
  }
`;
export const ItemContainer = styled.div`
  > div {
    background: ${({ theme }) => theme.gradient};
    padding: 1rem;
    padding-top: 1.8rem;
    height: 15rem;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    transition: 0.5s;

    h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 2rem;
      margin-bottom: 1.2rem;
    }

    h2 {
      color: ${({ theme }) => theme.secondary};
      font-weight: 300;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    p {
      color: ${({ theme }) => theme.textLight};
      font-weight: 300;
      font-size: 1rem;
    }
  }
  &:hover > div {
    filter: brightness(1.3);
    transform: translateY(-20px);
  }

  @media (max-width: 1000) {
    > div {
      height: 15rem;
      padding-top: 1.5rem;
    }
    h1 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 700) {
    > div {
      height: auto;
      padding: 2rem;

      h1 {
        font-size: 22rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;
