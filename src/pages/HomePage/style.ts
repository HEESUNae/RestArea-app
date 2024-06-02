import styled from 'styled-components';
import { bgImg } from '../../consts/images';

export const StyledHomePage = styled.div`
  .banner-component {
    background: url(${bgImg.visual}) no-repeat 50% 55%;
    background-size: cover;
    .inner {
      text-align: center;
      padding: 7rem 0;
    }
    .sec-title {
      font-size: 2.4rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: #fff;
    }
    .sec-info {
      font-size: 1.6rem;
      color: #fff;
    }
  }
  /* p {
    white-space: pre-line;
  } */

  .rest-list-component {
    background-color: #dceef8;
    ul {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
      gap: 1rem;
      .rest-list {
        background-color: #fff;
        padding: 1.6rem;
        border-radius: 1rem;
        transition: 0.3s;
        &:hover {
          background-color: #153448;
          .bedge {
            color: #dceef8;
          }
          .rest-name {
            color: #fff;
          }
          .rest-address {
            color: #b7c0d1;
          }
        }
        .bedge {
          color: #3572ef;
          border: 0.1rem solid;
          padding: 0.3rem 0.5rem;
          display: inline-block;
          border-radius: 1rem;
          font-size: 1.2rem;
        }
        .rest-name {
          font-size: 1.8rem;
          font-weight: 600;
          margin: 1rem 0;
        }
        .rest-address {
          font-size: 1.4rem;
          color: #666;
          font-weight: 400;
        }
      }
    }
    .page-component {
      display: flex;
      justify-content: center;
      margin-top: 3rem;
      gap: 1rem;
      button {
        border: 0;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        background-color: #fff;
        &.active {
          background-color: #153448;
          color: #fff;
        }
      }
    }
  }
`;
