import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../layout/MainLayout";
import Seo from "../components/seo";
import Bio from "../components/bio";
import TimeStampSection from "../components/timestamp-section";

function AboutPage({ data }) {
  const metaData = data.site.siteMetadata;
  const { author, about, language } = metaData;
  const { timestamps } = about;

  const [category, setCategory] = useState("all");

  return (
    <Layout>
      <Seo title="About" />
      <TimeStampSection timestamps={timestamps} />
    </Layout>
  );
}

export default AboutPage;

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
