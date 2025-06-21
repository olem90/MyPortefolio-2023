import { DownloadsSection } from "./Downloads.style";

export const Downloads = () => {
    return (
      <DownloadsSection>
        <h2>CV & Certificates</h2>
        <ul>
          <li>
            <a
              href="/docs/Ole_Marius_Rognan_CV_English.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 CV (English)
            </a>
          </li>
          <li>
            <a
              href="/docs/Ole_Marius_Rognan_CV_Norsk.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 CV (Norwegian)
            </a>
          </li>
          <li>
            <a
              href="/docs/Digitalt_vitnemal.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              🎓 Front-End Certificate
            </a>
          </li>
        </ul>
      </DownloadsSection>
    );
  };
  // trigger deploy