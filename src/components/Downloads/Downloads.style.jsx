import styled from "styled-components";

export const DownloadsSection = styled.div`
    width: fit-content;
    margin: auto auto 50px auto;
    padding: 15px;

    h2 {
        text-align: center;
        font-size: 34px;
        font-family: var(--h2-font);
    }

     ul {
        list-style: none;
        padding-left: 0;
        font-size: 20px; 
}
    ul > li > a {
        text-decoration: none;
    }

  a.cv::before {
    content: "📄";
    margin-right: 0.5rem;
    text-decoration: none;
  }

  a.certificate::before {
    content: "🎓";
    margin-right: 0.5rem;
  }
`