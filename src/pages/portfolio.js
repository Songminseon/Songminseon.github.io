import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout/MainLayout";
import Seo from "../components/seo";
import Bio from "../components/bio";

import ProjectSection from "../components/project-section";
import "./portfolio.scss";

function PortfolioPage({ data }) {
  const metaData = data.site.siteMetadata;
  const { author, about, language } = metaData;
  const { projects } = about;
  return (
    <Layout>
      <button className="a">ss</button>
      <Seo title="About" />
      <Bio author={author} language={language} />
      <ProjectSection projects={projects} />
    </Layout>
  );
}

export default PortfolioPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        language
        author {
          name
          bio {
            role
            description
            thumbnail
          }
          social {
            github
            linkedIn
            email
          }
        }

        about {
          timestamps {
            date
            activity
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }

          projects {
            title
            description
            techStack
            thumbnailUrl
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }
        }
      }
    }
  }
`;
