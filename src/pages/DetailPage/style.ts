import styled from 'styled-components';

export const StyledDetailPage = styled.div`
  position: relative;
  p {
    white-space: pre-line;
    &.title {
      font-size: 1.8rem;
      font-weight: 600;
      margin: 2rem 0;
    }
  }

  .detail-contents {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  .rest {
    &-subject {
      margin-bottom: 2rem;
      border-bottom: 0.1rem solid #eee;
      h2 {
        margin-top: 1rem;
      }
      .rest-address {
        font-size: 1.6rem;
        color: #666;
        margin: 2rem 0;
      }
    }
    &-content {
      .rest-info {
        background-color: #f5f5f5;
        padding: 2rem;
        border-radius: 0.8rem;
        line-height: 1.5;
        .date {
          color: #666;
          font-size: 1.2rem;
          margin-top: 2rem;
          text-align: right;
        }
      }
    }
    &-facility {
      margin-top: 3rem;
      ul {
        display: grid;
        gap: 1rem;
        li {
          list-style: square;
          list-style-position: inside;
          span {
            font-weight: 400;
            color: #444;
          }
        }
      }
    }
    &-food {
      margin-top: 7rem;
      ul {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(25rem, 2fr));
        gap: 1rem;
        li {
          background-color: #f4fbff;
          border-radius: 0.8rem;
          padding: 2rem;
          display: flex;
          flex-direction: column;

          .title {
            margin: 0;
          }
          .food-etc {
            color: #666;
            flex-grow: 1;
            margin: 1rem 0;
            white-space: normal;
            word-break: keep-all;
          }
        }
      }
    }
  }

  .rest-map {
    border: 1px solid #eee;
    height: 35rem;
  }

  .btn-container {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
  }
`;
